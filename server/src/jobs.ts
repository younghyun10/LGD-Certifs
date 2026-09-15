import type { PublicJobPosting } from "../../src/types.js";

const ALIO_RECRUIT_URL = "https://opendata.alio.go.kr/new/odaApiMng/recrutInquiryAjaxList.do";
const ALIO_RECRUIT_PAGE = "https://alio.go.kr/information/informationRecruitList.do";

const fallbackJobs: PublicJobPosting[] = [
  {
    id: "fallback-lh-202609",
    title: "한국토지주택공사 광주전남지역본부 기간제근로자(사업관리) 채용공고(2026.09)",
    organization: "한국토지주택공사",
    ncs: ["경영.회계.사무", "사회복지.종교"],
    location: "전남광주",
    employmentType: "비정규직",
    careerType: "신입",
    headcount: "1명",
    startDate: "2026.09.08",
    endDate: "2026.09.22",
    status: "진행중",
    sourceUrl: ALIO_RECRUIT_PAGE
  },
  {
    id: "fallback-post-202609",
    title: "한국우편사업진흥원 기간제 근로자 채용",
    organization: "한국우편사업진흥원",
    ncs: ["경영.회계.사무"],
    location: "충북",
    employmentType: "비정규직",
    careerType: "신입",
    headcount: "1명",
    startDate: "2026.09.08",
    endDate: "2026.09.22",
    status: "진행중",
    sourceUrl: ALIO_RECRUIT_PAGE
  },
  {
    id: "fallback-kepco-202609",
    title: "2026년도 제4차 전문직원 채용공고",
    organization: "한국전력공사",
    ncs: ["전기.전자", "환경.에너지.안전"],
    location: "서울,대전,전남광주",
    employmentType: "정규직",
    careerType: "신입+경력",
    headcount: "4명",
    startDate: "2026.09.08",
    endDate: "2026.09.22",
    status: "진행중",
    sourceUrl: ALIO_RECRUIT_PAGE
  },
  {
    id: "fallback-kdn-202609",
    title: "한전KDN 진주지사 배전분야 비정규직 모집공고",
    organization: "한전KDN",
    ncs: ["전기.전자", "정보통신"],
    location: "경남",
    employmentType: "비정규직",
    careerType: "신입+경력",
    headcount: "0명",
    startDate: "2026.09.09",
    endDate: "2026.09.23",
    status: "진행중",
    sourceUrl: ALIO_RECRUIT_PAGE
  },
  {
    id: "fallback-poly-202609",
    title: "한국폴리텍대학 청주캠퍼스 하반기 청년인턴(일반) 채용 공고",
    organization: "한국폴리텍대학",
    ncs: ["교육.자연.사회과학", "경영.회계.사무"],
    location: "충북",
    employmentType: "청년인턴(체험형)",
    careerType: "신입",
    headcount: "0명",
    startDate: "2026.09.09",
    endDate: "2026.09.23",
    status: "진행중",
    sourceUrl: ALIO_RECRUIT_PAGE
  }
];

function toText(value: unknown) {
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

function splitTags(value: unknown) {
  return toText(value)
    .split(/[,/|]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeJob(raw: Record<string, unknown>, index: number): PublicJobPosting {
  const title = toText(raw.title ?? raw.recrutPbancTtl ?? raw.recrutTitle ?? raw.pblancTitle);
  const organization = toText(raw.pname ?? raw.orgNm ?? raw.instNm ?? raw.institutionNm);
  const termStart = toText(raw.termStart ?? raw.pbancBgngYmd ?? raw.startDate ?? raw.recrutPblancBgnDtm);
  const termEnd = toText(raw.termEnd ?? raw.pbancEndYmd ?? raw.endDate ?? raw.recrutPblancEndDtm);

  return {
    id: toText(raw.recrutNo ?? raw.sn ?? raw.seq ?? raw.id) || `alio-${index}`,
    title: title || "제목 미상",
    organization: organization || "기관 미상",
    ncs: splitTags(raw.ncsCdNmLst ?? raw.ncsNm ?? raw.ncs ?? raw.ncsNa),
    location: toText(raw.locationNa ?? raw.workRgnNmLst ?? raw.workRgnNm ?? raw.location) || "미정",
    employmentType: toText(raw.workTypeNa ?? raw.hireTypeNm ?? raw.employmentType) || "미정",
    careerType: toText(raw.carrerNa ?? raw.recrutSeNm ?? raw.careerType) || "미정",
    headcount: toText(raw.person ?? raw.recrutNope ?? raw.headcount) || "0명",
    startDate: termStart || "미정",
    endDate: termEnd || "미정",
    status: toText(raw.state ?? raw.status ?? raw.progress).includes("마감") ? "마감" : "진행중",
    sourceUrl: toText(raw.url ?? raw.link) || ALIO_RECRUIT_PAGE
  };
}

function unwrapRows(payload: unknown): Record<string, unknown>[] {
  if (Array.isArray(payload)) return payload as Record<string, unknown>[];
  if (!payload || typeof payload !== "object") return [];

  const objectPayload = payload as Record<string, unknown>;
  const candidates = [
    objectPayload.data,
    objectPayload.list,
    objectPayload.result,
    objectPayload.items,
    objectPayload.rows
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate as Record<string, unknown>[];
    if (candidate && typeof candidate === "object") {
      const nested = unwrapRows(candidate);
      if (nested.length > 0) return nested;
    }
  }

  return [];
}

export async function listPublicJobs(): Promise<PublicJobPosting[]> {
  try {
    const body = new URLSearchParams({
      pageNo: "1",
      numOfRows: "20",
      ongoingYn: "Y"
    });
    const response = await fetch(ALIO_RECRUIT_URL, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent": "CertiMap/0.1"
      },
      body
    });

    if (!response.ok) throw new Error(`ALIO request failed with ${response.status}`);

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("json")) throw new Error("ALIO response is not JSON");

    const rows = unwrapRows(await response.json());
    const jobs = rows.map(normalizeJob).filter((job) => job.title !== "제목 미상");
    return jobs.length > 0 ? jobs : fallbackJobs;
  } catch {
    return fallbackJobs;
  }
}
