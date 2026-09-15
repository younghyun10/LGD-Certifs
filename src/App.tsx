import { useEffect, useMemo, useRef, useState, type Ref } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clapperboard,
  ClipboardList,
  Cpu,
  Factory,
  GraduationCap,
  Layers3,
  HeartPulse,
  Hotel,
  Landmark,
  Leaf,
  Map,
  Newspaper,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Zap,
  Scale,
  ScrollText,
} from "lucide-react";
import type {
  CatalogResponse,
  Certification,
  Industry,
  IndustryId,
  PublicJobsResponse,
} from "./types";

type View =
  | "home"
  | "explore"
  | "schedule"
  | "jobs"
  | "roadmap"
  | "portfolio"
  | "login";

type AuthProvider = "local";

type AuthUser = {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
};

type StoredUser = AuthUser & {
  password: string;
};

const AUTH_SESSION_KEY = "certimap-auth-session";
const AUTH_USERS_KEY = "certimap-auth-users";

const iconByIndustry: Record<IndustryId, typeof Cpu> = {
  it: Cpu,
  health: HeartPulse,
  construction: Building2,
  business: BriefcaseBusiness,
  environment: Leaf,
  design: Palette,
  finance: Landmark,
  education: GraduationCap,
  legal: Scale,
  public: ScrollText,
  manufacturing: Factory,
  energy: Zap,
  media: Clapperboard,
  hospitality: Hotel,
};

const examTypeLabel = {
  written: "필기",
  practical: "실기",
  portfolio: "포트폴리오",
  interview: "면접",
};

type RoadmapGoal = {
  id: string;
  industryId: IndustryId;
  label: string;
  description: string;
  keywords: string[];
  mustHave: string[];
  niceToHave: string[];
};

const roadmapGoals: RoadmapGoal[] = [
  {
    id: "data-analyst",
    industryId: "it",
    label: "데이터 분석가",
    description:
      "SQL, 통계, 분석 모델링을 바탕으로 데이터 기반 의사결정을 지원하는 직무",
    keywords: ["데이터", "SQL", "분석", "통계", "BI", "모델"],
    mustHave: ["sqld", "adp"],
    niceToHave: ["topcit", "azure-fundamentals"],
  },
  {
    id: "cloud-engineer",
    industryId: "it",
    label: "클라우드 엔지니어",
    description:
      "클라우드 인프라를 설계하고 운영 안정성, 보안, 비용을 함께 관리하는 직무",
    keywords: [
      "클라우드",
      "AWS",
      "Azure",
      "Google",
      "인프라",
      "네트워크",
      "리눅스",
      "보안",
    ],
    mustHave: ["azure-fundamentals", "cloud-architect"],
    niceToHave: ["google-cloud-architect", "linux-master", "network-manager"],
  },
  {
    id: "security-engineer",
    industryId: "it",
    label: "보안 엔지니어",
    description:
      "취약점 분석, 보안 정책, 침해 대응과 인프라 보호를 담당하는 직무",
    keywords: ["보안", "침해", "취약점", "네트워크", "리눅스", "시스템"],
    mustHave: ["information-security-engineer", "network-manager"],
    niceToHave: ["linux-master", "topcit"],
  },
  {
    id: "hospital-admin",
    industryId: "health",
    label: "병원 행정·원무",
    description:
      "의료기관 원무, 보험 청구, 진료정보 관리와 병원 행정 흐름을 다루는 직무",
    keywords: ["병원", "행정", "원무", "보험", "의료정보", "진료정보", "청구"],
    mustHave: ["medical-admin", "health-records-analyst"],
    niceToHave: ["public-health-educator", "computer-literacy"],
  },
  {
    id: "clinical-support",
    industryId: "health",
    label: "의료 현장 지원",
    description: "검사, 영상, 재활, 돌봄 등 의료 현장 실무를 지원하는 직군",
    keywords: ["검사", "영상", "재활", "간호", "돌봄", "환자", "치료"],
    mustHave: ["nursing-assistant", "clinical-laboratory-technologist"],
    niceToHave: [
      "radiologic-technologist",
      "physical-therapist",
      "care-worker",
    ],
  },
  {
    id: "site-safety",
    industryId: "construction",
    label: "건설·현장 안전관리",
    description:
      "공사 현장의 안전, 품질, 공정과 법정 안전관리 체계를 운영하는 직무",
    keywords: ["안전", "건설", "현장", "시공", "품질", "소방", "전기"],
    mustHave: ["construction-safety-engineer", "industrial-safety"],
    niceToHave: [
      "fire-safety-engineer",
      "construction-materials-engineer",
      "electric-engineer",
    ],
  },
  {
    id: "architecture-civil",
    industryId: "construction",
    label: "건축·토목 기술자",
    description:
      "건축·토목 설계, 시공, 측량, 설비와 현장 품질을 다루는 기술 직군",
    keywords: ["건축", "토목", "측량", "설비", "시공", "재료", "실내"],
    mustHave: ["construction-engineer", "civil-engineer"],
    niceToHave: [
      "surveyor-engineer",
      "architecture-equipment-engineer",
      "interior-architecture-engineer",
    ],
  },
  {
    id: "accounting-office",
    industryId: "business",
    label: "회계·세무 사무",
    description:
      "전표 처리, 세무 신고 보조, 결산과 회계 시스템 운용을 맡는 직무",
    keywords: ["회계", "세무", "전표", "결산", "ERP", "FAT", "세무회계"],
    mustHave: ["computerized-accounting", "tax-accounting"],
    niceToHave: ["fat-accounting", "erp-accounting", "computer-literacy"],
  },
  {
    id: "office-operations",
    industryId: "business",
    label: "사무·운영·물류",
    description: "문서, 데이터, 유통, 물류와 운영 프로세스를 관리하는 직무",
    keywords: ["사무", "문서", "물류", "유통", "운영", "무역", "스프레드시트"],
    mustHave: ["computer-literacy", "word-processor"],
    niceToHave: ["logistics-manager", "distribution-manager", "trade-english"],
  },
  {
    id: "esg-environment",
    industryId: "environment",
    label: "환경·ESG 관리자",
    description:
      "대기·수질·폐기물·온실가스 등 환경 규제와 ESG 데이터를 관리하는 직무",
    keywords: ["환경", "ESG", "대기", "수질", "폐기물", "온실가스", "토양"],
    mustHave: ["environment-engineer", "water-pollution-engineer"],
    niceToHave: [
      "waste-treatment-engineer",
      "greenhouse-gas-engineer",
      "soil-environment-engineer",
    ],
  },
  {
    id: "green-agriculture",
    industryId: "environment",
    label: "녹지·산림·친환경 농업",
    description:
      "조경, 산림, 유기농업, 식물보호 등 생태 기반 현장을 관리하는 직군",
    keywords: ["조경", "산림", "농업", "식물", "친환경", "녹지", "생태"],
    mustHave: ["landscape-engineer", "forest-engineer"],
    niceToHave: ["organic-agriculture-engineer", "plant-protection-engineer"],
  },
  {
    id: "graphic-designer",
    industryId: "design",
    label: "그래픽·브랜드 디자이너",
    description:
      "이미지, 색채, 편집, 브랜드 그래픽을 제작하고 디자인 품질을 관리하는 직무",
    keywords: [
      "그래픽",
      "브랜드",
      "포토샵",
      "일러스트",
      "색채",
      "편집",
      "시각",
    ],
    mustHave: ["gtq-photoshop", "colorist"],
    niceToHave: [
      "gtqi-illustrator",
      "visual-communication-engineer",
      "adobe-photoshop-professional",
    ],
  },
  {
    id: "product-ux-designer",
    industryId: "design",
    label: "제품·UX 디자이너",
    description:
      "제품, 서비스 경험, 웹 화면과 사용자 흐름을 설계하는 디자인 직군",
    keywords: ["UX", "서비스", "제품", "웹", "사용자", "경험", "프로토타입"],
    mustHave: ["ux-researcher", "product-design-engineer"],
    niceToHave: [
      "web-design-functional",
      "gtqid-indesign",
      "computer-graphics-operation",
    ],
  },
  {
    id: "financial-risk-analyst",
    industryId: "finance",
    label: "금융 리스크 분석가",
    description:
      "투자, 신용, 보험 데이터를 기반으로 위험을 측정하고 재무 의사결정을 지원하는 직무",
    keywords: ["금융", "리스크", "투자", "신용", "보험", "재무", "데이터"],
    mustHave: ["investment-advisor", "credit-analyst"],
    niceToHave: ["frm", "afpk", "data-analyst-junior"],
  },
  {
    id: "learning-designer",
    industryId: "education",
    label: "교육 콘텐츠 기획자",
    description:
      "학습 목표, 콘텐츠 설계, 디지털 교육 운영을 연결하는 에듀테크·교육 기획 직무",
    keywords: ["교육", "학습", "콘텐츠", "교수설계", "상담", "평생교육"],
    mustHave: ["lifelong-educator", "vocational-counselor"],
    niceToHave: [
      "e-learning-specialist",
      "korean-language-teacher",
      "computer-literacy",
    ],
  },
  {
    id: "legal-compliance",
    industryId: "legal",
    label: "법무·컴플라이언스 담당자",
    description:
      "계약, 개인정보, 지식재산, 노무 이슈를 점검하고 조직의 법적 리스크를 관리하는 직무",
    keywords: ["법무", "계약", "컴플라이언스", "개인정보", "노무", "지식재산"],
    mustHave: ["personal-information-manager", "compliance-officer"],
    niceToHave: [
      "patent-information-searcher",
      "hr-specialist",
      "administrative-agent",
    ],
  },
  {
    id: "public-administration",
    industryId: "public",
    label: "공공 행정·정책 실무자",
    description:
      "행정 문서, 정책 자료, 기록 관리, 공공 데이터 업무를 담당하는 공공 분야 실무 직군",
    keywords: ["공공", "행정", "정책", "기록", "문서", "데이터"],
    mustHave: ["administrative-agent", "records-manager"],
    niceToHave: [
      "policy-analysis-specialist",
      "computer-literacy",
      "word-processor",
    ],
  },
  {
    id: "smart-factory-engineer",
    industryId: "manufacturing",
    label: "스마트팩토리 엔지니어",
    description:
      "생산 설비, 품질, 자동화, CAD/CAM 데이터를 연결해 제조 현장을 개선하는 기술 직무",
    keywords: ["제조", "생산", "품질", "자동화", "설비", "CAD", "공정"],
    mustHave: [
      "quality-management-engineer",
      "production-automation-industrial",
    ],
    niceToHave: [
      "cad-industrial",
      "machinery-maintenance",
      "industrial-safety",
    ],
  },
  {
    id: "energy-manager",
    industryId: "energy",
    label: "에너지·전기 설비 관리자",
    description:
      "전기, 에너지, 신재생 설비의 운영 효율과 안전 기준을 관리하는 시설·에너지 직무",
    keywords: ["에너지", "전기", "설비", "신재생", "안전", "효율"],
    mustHave: ["energy-manager-engineer", "electric-engineer"],
    niceToHave: [
      "renewable-energy-engineer",
      "gas-engineer",
      "fire-safety-engineer",
    ],
  },
  {
    id: "content-marketer",
    industryId: "media",
    label: "콘텐츠 마케터·영상 기획자",
    description:
      "영상, 광고, 디지털 캠페인, 소셜 콘텐츠를 기획하고 성과를 분석하는 콘텐츠 직무",
    keywords: ["콘텐츠", "영상", "광고", "마케팅", "미디어", "SNS", "브랜드"],
    mustHave: ["digital-marketing-specialist", "multimedia-content-specialist"],
    niceToHave: [
      "google-analytics",
      "gtq-photoshop",
      "adobe-photoshop-professional",
    ],
  },
];

const levelRank: Record<Certification["level"], number> = {
  입문: 1,
  실무: 2,
  전문: 3,
  고급: 4,
};

const viewLabels: Record<View, string> = {
  home: "홈",
  explore: "자격증 찾기",
  schedule: "일정 보기",
  jobs: "채용 공고",
  roadmap: "로드맵 추천",
  portfolio: "보유 자격 분석",
  login: "로그인",
};

function getInitialView(): View {
  const hash = window.location.hash.replace("#", "");
  if (
    hash === "explore" ||
    hash === "schedule" ||
    hash === "jobs" ||
    hash === "roadmap" ||
    hash === "portfolio" ||
    hash === "login"
  )
    return hash;
  return "home";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function getNextSchedule(certification: Certification) {
  const today = new Date();
  return (
    certification.schedules
      .map((schedule) => ({ ...schedule, date: new Date(schedule.examDate) }))
      .filter((schedule) => schedule.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0] ??
    certification.schedules[0]
  );
}

function requestCatalog(): Promise<CatalogResponse> {
  if ("fetch" in window) {
    return window.fetch("/api/catalog").then((response) => response.json());
  }

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "/api/catalog");
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        resolve(JSON.parse(request.responseText) as CatalogResponse);
      } else {
        reject(new Error(`Catalog request failed with ${request.status}`));
      }
    };
    request.onerror = () => reject(new Error("Catalog request failed"));
    request.send();
  });
}

function requestPublicJobs(): Promise<PublicJobsResponse> {
  if ("fetch" in window) {
    return window.fetch("/api/jobs").then((response) => response.json());
  }

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "/api/jobs");
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        resolve(JSON.parse(request.responseText) as PublicJobsResponse);
      } else {
        reject(new Error(`Jobs request failed with ${request.status}`));
      }
    };
    request.onerror = () => reject(new Error("Jobs request failed"));
    request.send();
  });
}

function scoreCertification(certification: Certification, goal: RoadmapGoal) {
  const content = [
    certification.name,
    certification.summary,
    certification.issuer,
    certification.level,
    certification.type,
    ...certification.fitFor,
    ...certification.requiredFor,
  ]
    .join(" ")
    .toLowerCase();

  const keywordScore = goal.keywords.reduce(
    (score, keyword) =>
      score + (content.includes(keyword.toLowerCase()) ? 4 : 0),
    0,
  );
  const requiredScore = goal.mustHave.includes(certification.id) ? 40 : 0;
  const optionalScore = goal.niceToHave.includes(certification.id) ? 24 : 0;
  const industryScore = certification.industryId === goal.industryId ? 12 : 0;

  return requiredScore + optionalScore + industryScore + keywordScore;
}

function getRecommendationReason(
  certification: Certification,
  goal: RoadmapGoal,
) {
  if (goal.mustHave.includes(certification.id)) {
    return "핵심 추천";
  }

  if (goal.niceToHave.includes(certification.id)) {
    return "있으면 좋은 보완 자격";
  }

  const matchedKeyword = goal.keywords.find((keyword) =>
    [
      certification.name,
      certification.summary,
      ...certification.fitFor,
      ...certification.requiredFor,
    ]
      .join(" ")
      .toLowerCase()
      .includes(keyword.toLowerCase()),
  );

  return matchedKeyword ? `${matchedKeyword} 역량 연결` : "분야 적합도 기반";
}

function getCertificationText(certification: Certification) {
  return [
    certification.name,
    certification.summary,
    certification.issuer,
    certification.level,
    certification.type,
    ...certification.fitFor,
    ...certification.requiredFor,
  ]
    .join(" ")
    .toLowerCase();
}

function getOverlapScore(source: Certification[], target: Certification) {
  const ownedWords = new Set(
    source
      .flatMap((certification) => [
        certification.name,
        certification.summary,
        ...certification.fitFor,
        ...certification.requiredFor,
      ])
      .join(" ")
      .toLowerCase()
      .split(/[\s,·/()]+/)
      .filter((word) => word.length > 1),
  );

  return getCertificationText(target)
    .split(/[\s,·/()]+/)
    .filter((word) => ownedWords.has(word)).length;
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function getStoredUsers() {
  return readJson<StoredUser[]>(AUTH_USERS_KEY, []);
}

function saveStoredUsers(users: StoredUser[]) {
  window.localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getOwnedStorageKey(userId: string) {
  return `certimap-owned-certifications:${userId}`;
}

type CertificationDetailPanelProps = {
  certification: Certification;
  industryName?: string;
  className?: string;
  detailRef?: Ref<HTMLElement>;
};

function CertificationDetailPanel({
  certification,
  industryName,
  className = "",
  detailRef,
}: CertificationDetailPanelProps) {
  return (
    <article className={`detail-panel ${className}`} ref={detailRef}>
      <div className="detail-panel__top">
        <div>
          <p className="eyebrow">{industryName}</p>
          <h2>{certification.name}</h2>
          <p>{certification.summary}</p>
        </div>
        <a
          className="button button--primary"
          href={certification.officialUrl}
          target="_blank"
          rel="noreferrer"
        >
          공식 홈페이지
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="info-grid">
        <div>
          <ClipboardList aria-hidden="true" />
          <span>시행기관</span>
          <strong>{certification.issuer}</strong>
        </div>
        <div>
          <BookOpenCheck aria-hidden="true" />
          <span>평균 준비</span>
          <strong>{certification.averagePrepWeeks}주</strong>
        </div>
        <div>
          <BadgeCheck aria-hidden="true" />
          <span>응시료</span>
          <strong>{certification.examFee}</strong>
        </div>
      </div>

      <div className="detail-columns">
        <section>
          <h3>주요 활용 직무</h3>
          <div className="pill-list">
            {certification.fitFor.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
        <section>
          <h3>검증 역량</h3>
          <ul className="check-list">
            {certification.requiredFor.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="schedule-table" aria-label="시험 일정">
        <div className="schedule-table__head">
          <h3>시험 일정</h3>
          <span>{certification.passingStandard}</span>
        </div>
        {certification.schedules.map((schedule) => (
          <div
            className="schedule-row"
            key={`${certification.id}-${schedule.round}`}
          >
            <strong>{schedule.round}</strong>
            <span>{examTypeLabel[schedule.examType]}</span>
            <span>
              접수 {formatDate(schedule.registrationStart)}-
              {formatDate(schedule.registrationEnd)}
            </span>
            <span>시험 {formatDate(schedule.examDate)}</span>
            <span>발표 {formatDate(schedule.resultDate)}</span>
          </div>
        ))}
      </section>
    </article>
  );
}

export function App() {
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [view, setView] = useState<View>(getInitialView);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | "all">(
    "all",
  );
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>("");
  const [selectedGoalId, setSelectedGoalId] = useState(roadmapGoals[0].id);
  const [ownedQuery, setOwnedQuery] = useState("");
  const [jobsResponse, setJobsResponse] = useState<PublicJobsResponse | null>(
    null,
  );
  const [jobQuery, setJobQuery] = useState("");
  const [selectedJobNcs, setSelectedJobNcs] = useState("all");
  const [ownedCertificationIds, setOwnedCertificationIds] = useState<string[]>(
    [],
  );
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authMessage, setAuthMessage] = useState("");
  const [authForm, setAuthForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  const roadmapDetailRef = useRef<HTMLElement | null>(null);

  function navigate(nextView: View) {
    setView(nextView);
    window.history.replaceState(
      null,
      "",
      nextView === "home" ? "/" : `#${nextView}`,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectRoadmapCertification(certificationId: string) {
    setSelectedRoadmapId(certificationId);
    window.setTimeout(() => {
      roadmapDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  function handleAuthSubmit() {
    const email = authForm.email.trim().toLowerCase();
    const name = authForm.name.trim();
    const password = authForm.password.trim();

    if (!email || !password || (authMode === "signup" && !name)) {
      setAuthMessage("이메일, 비밀번호, 이름을 입력해주세요.");
      return;
    }

    const users = getStoredUsers();
    const existingUser = users.find((user) => user.email === email);

    if (authMode === "signup") {
      if (existingUser) {
        setAuthMessage("이미 가입된 이메일입니다. 로그인으로 전환해주세요.");
        return;
      }

      const newUser: StoredUser = {
        id: crypto.randomUUID(),
        email,
        name,
        password,
        provider: "local",
      };

      saveStoredUsers([...users, newUser]);
      const sessionUser: AuthUser = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        provider: newUser.provider,
      };
      window.localStorage.setItem(
        AUTH_SESSION_KEY,
        JSON.stringify(sessionUser),
      );
      setAuthUser(sessionUser);
      setAuthMessage("회원가입과 로그인이 완료되었습니다.");
      setAuthForm({ email: "", name: "", password: "" });
      return;
    }

    if (!existingUser || existingUser.password !== password) {
      setAuthMessage("이메일 또는 비밀번호가 맞지 않습니다.");
      return;
    }

    const sessionUser: AuthUser = {
      id: existingUser.id,
      email: existingUser.email,
      name: existingUser.name,
      provider: existingUser.provider,
    };
    window.localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionUser));
    setAuthUser(sessionUser);
    setAuthMessage("로그인되었습니다.");
    setAuthForm({ email: "", name: "", password: "" });
  }

  function handleLogout() {
    window.localStorage.removeItem(AUTH_SESSION_KEY);
    setAuthUser(null);
    setOwnedCertificationIds([]);
    setAuthMessage("로그아웃되었습니다.");
  }

  useEffect(() => {
    requestCatalog()
      .then((data: CatalogResponse) => {
        setCatalog(data);
        setSelectedId(data.certifications[0]?.id ?? "");
      })
      .catch(() => {
        setCatalog({ industries: [], certifications: [] });
      });
  }, []);

  useEffect(() => {
    requestPublicJobs()
      .then((data) => setJobsResponse(data))
      .catch(() => {
        setJobsResponse({
          source: "ALIO 공공기관 채용정보",
          updatedAt: new Date().toISOString(),
          jobs: [],
        });
      });
  }, []);

  useEffect(() => {
    const syncHash = () => setView(getInitialView());
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    setAuthUser(readJson<AuthUser | null>(AUTH_SESSION_KEY, null));
  }, []);

  useEffect(() => {
    if (!authUser) return;
    setOwnedCertificationIds(
      readJson<string[]>(getOwnedStorageKey(authUser.id), []),
    );
  }, [authUser]);

  useEffect(() => {
    if (!authUser) return;
    window.localStorage.setItem(
      getOwnedStorageKey(authUser.id),
      JSON.stringify(ownedCertificationIds),
    );
  }, [authUser, ownedCertificationIds]);

  const industries = catalog?.industries ?? [];
  const certifications = catalog?.certifications ?? [];
  const publicJobs = jobsResponse?.jobs ?? [];
  const ownedCertifications = certifications.filter((certification) =>
    ownedCertificationIds.includes(certification.id),
  );

  const jobNcsOptions = useMemo(() => {
    return Array.from(new Set(publicJobs.flatMap((job) => job.ncs))).sort();
  }, [publicJobs]);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = jobQuery.trim().toLowerCase();
    return publicJobs.filter((job) => {
      const matchesNcs =
        selectedJobNcs === "all" || job.ncs.includes(selectedJobNcs);
      const matchesQuery =
        !normalizedQuery ||
        [
          job.title,
          job.organization,
          job.location,
          job.employmentType,
          job.careerType,
          ...job.ncs,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesNcs && matchesQuery;
    });
  }, [jobQuery, publicJobs, selectedJobNcs]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return certifications.filter((certification) => {
      const matchesIndustry =
        selectedIndustry === "all" ||
        certification.industryId === selectedIndustry;
      const haystack = [
        certification.name,
        certification.issuer,
        certification.summary,
        ...certification.fitFor,
        ...certification.requiredFor,
      ]
        .join(" ")
        .toLowerCase();
      return (
        matchesIndustry &&
        (!normalizedQuery || haystack.includes(normalizedQuery))
      );
    });
  }, [certifications, query, selectedIndustry]);

  const selectedCertification =
    filtered.find((certification) => certification.id === selectedId) ??
    filtered[0] ??
    certifications[0];

  const selectedIndustryInfo = industries.find(
    (industry) => industry.id === selectedCertification?.industryId,
  );

  const selectedGoal =
    roadmapGoals.find((goal) => goal.id === selectedGoalId) ?? roadmapGoals[0];

  const roadmapRecommendations = useMemo(() => {
    return certifications
      .map((certification) => ({
        certification,
        score: scoreCertification(certification, selectedGoal),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return (
          levelRank[a.certification.level] - levelRank[b.certification.level]
        );
      })
      .slice(0, 7);
  }, [certifications, selectedGoal]);

  const roadmapSteps = useMemo(() => {
    const labels: Certification["level"][] = ["입문", "실무", "전문", "고급"];
    return labels
      .map((level) => ({
        level,
        items: roadmapRecommendations
          .map((recommendation) => recommendation.certification)
          .filter((certification) => certification.level === level)
          .slice(0, 3),
      }))
      .filter((step) => step.items.length > 0);
  }, [roadmapRecommendations]);

  const selectedRoadmapCertification =
    roadmapRecommendations.find(
      (item) => item.certification.id === selectedRoadmapId,
    )?.certification ?? roadmapRecommendations[0]?.certification;

  const selectedRoadmapIndustryInfo = industries.find(
    (industry) => industry.id === selectedRoadmapCertification?.industryId,
  );

  const scheduleItems = useMemo(() => {
    return certifications
      .flatMap((certification) =>
        certification.schedules.map((schedule) => ({
          certification,
          schedule,
          date: new Date(schedule.examDate),
        })),
      )
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [certifications]);

  const ownedSearchResults = useMemo(() => {
    const normalizedQuery = ownedQuery.trim().toLowerCase();
    return certifications
      .filter((certification) => {
        if (ownedCertificationIds.includes(certification.id)) return false;
        if (!normalizedQuery) return true;
        return getCertificationText(certification).includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [certifications, ownedCertificationIds, ownedQuery]);

  const portfolioIndustryMatches = useMemo(() => {
    return industries
      .map((industry) => {
        const ownedInIndustry = ownedCertifications.filter(
          (certification) => certification.industryId === industry.id,
        );
        const crossSignals = ownedCertifications.filter((certification) =>
          getCertificationText(certification).includes(
            industry.name.toLowerCase(),
          ),
        );
        const relatedGoals = roadmapGoals.filter(
          (goal) => goal.industryId === industry.id,
        );
        const goalSignals = relatedGoals.reduce((score, goal) => {
          return (
            score +
            ownedCertifications.reduce((total, certification) => {
              const text = getCertificationText(certification);
              return (
                total +
                goal.keywords.filter((keyword) =>
                  text.includes(keyword.toLowerCase()),
                ).length
              );
            }, 0)
          );
        }, 0);

        return {
          industry,
          score:
            ownedInIndustry.length * 36 +
            crossSignals.length * 10 +
            goalSignals * 8,
          ownedCount: ownedInIndustry.length,
          goalSignals,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [industries, ownedCertifications]);

  const portfolioRecommendations = useMemo(() => {
    if (ownedCertifications.length === 0) return [];

    return certifications
      .filter(
        (certification) => !ownedCertificationIds.includes(certification.id),
      )
      .map((certification) => {
        const sameIndustryScore = ownedCertifications.some(
          (owned) => owned.industryId === certification.industryId,
        )
          ? 24
          : 0;
        const overlapScore =
          getOverlapScore(ownedCertifications, certification) * 3;
        const levelBridgeScore =
          Math.max(
            ...ownedCertifications.map((owned) => levelRank[owned.level]),
          ) <= levelRank[certification.level]
            ? 8
            : 0;

        return {
          certification,
          score: sameIndustryScore + overlapScore + levelBridgeScore,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [certifications, ownedCertificationIds, ownedCertifications]);

  function addOwnedCertification(certificationId: string) {
    if (!authUser) {
      setAuthMessage("로그인하면 보유 자격증을 저장할 수 있습니다.");
      return;
    }

    setOwnedCertificationIds((current) =>
      current.includes(certificationId)
        ? current
        : [...current, certificationId],
    );
    setOwnedQuery("");
  }

  function removeOwnedCertification(certificationId: string) {
    setOwnedCertificationIds((current) =>
      current.filter((id) => id !== certificationId),
    );
  }

  return (
    <main>
      <nav
        className={`nav ${view === "home" ? "nav--overlay" : "nav--solid"}`}
        aria-label="주요 메뉴"
      >
        <button
          className="brand brand--button"
          onClick={() => navigate("home")}
          type="button"
        >
          <ShieldCheck aria-hidden="true" />
          <span>CertiMap</span>
        </button>
        <div className="nav__links">
          {(
            ["explore", "schedule", "jobs", "roadmap", "portfolio"] as View[]
          ).map((item) => (
            <button
              className={view === item ? "is-active" : ""}
              key={item}
              onClick={() => navigate(item)}
              type="button"
            >
              {viewLabels[item]}
            </button>
          ))}
        </div>
        <div className="nav__auth">
          {authUser ? (
            <>
              <span>{authUser.name}</span>
              <button type="button" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <button type="button" onClick={() => navigate("login")}>
              로그인
            </button>
          )}
        </div>
      </nav>

      {view === "home" && (
        <>
          <section className="hero">
            <img
              className="hero__image"
              src="/certimap-hero.png"
              alt="자격증 탐색 대시보드 콘셉트"
            />
            <div className="hero__shade" />
            <div className="hero__content">
              <p className="eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                산업별 자격증 탐색 플랫폼
              </p>
              <h1>궁금한 직무에 필요한 자격증을 \n한 번에 찾으세요.</h1>
              <p>
                CertiMap은 산업 분야, 직무 키워드, 시험 일정을 연결해 다음
                커리어 선택에 필요한 자격증 정보를 빠르게 보여주는 가상의 정보
                조회 서비스입니다.
              </p>
              <div className="hero__actions">
                <button
                  className="button button--primary"
                  onClick={() => navigate("explore")}
                  type="button"
                >
                  <Search size={18} aria-hidden="true" />
                  자격증 찾기
                </button>
                <button
                  className="button button--ghost"
                  onClick={() => navigate("schedule")}
                  type="button"
                >
                  <CalendarDays size={18} aria-hidden="true" />
                  일정 보기
                </button>
                <button
                  className="button button--ghost"
                  onClick={() => navigate("jobs")}
                  type="button"
                >
                  <Newspaper size={18} aria-hidden="true" />
                  채용 공고
                </button>
                <button
                  className="button button--ghost"
                  onClick={() => navigate("roadmap")}
                  type="button"
                >
                  <Map size={18} aria-hidden="true" />
                  로드맵 추천
                </button>
                <button
                  className="button button--ghost"
                  onClick={() => navigate("portfolio")}
                  type="button"
                >
                  <Layers3 size={18} aria-hidden="true" />
                  보유 자격 분석
                </button>
              </div>
            </div>
          </section>

          <section className="quick-stats" aria-label="서비스 요약">
            <div>
              <strong>{industries.length || 6}</strong>
              <span>산업 분야</span>
            </div>
            <div>
              <strong>{certifications.length || 60}</strong>
              <span>추천 자격증</span>
            </div>
            <div>
              <strong>{roadmapGoals.length}</strong>
              <span>직무 로드맵</span>
            </div>
          </section>

          <section className="home-actions" aria-label="주요 기능">
            <button onClick={() => navigate("explore")} type="button">
              <Search aria-hidden="true" />
              <strong>자격증 찾기</strong>
              <span>
                분야와 키워드로 자격증을 탐색하고 상세 정보를 확인합니다.
              </span>
            </button>
            <button onClick={() => navigate("schedule")} type="button">
              <CalendarDays aria-hidden="true" />
              <strong>일정 보기</strong>
              <span>
                시험일, 접수 기간, 합격 발표일을 한 화면에서 비교합니다.
              </span>
            </button>
            <button onClick={() => navigate("jobs")} type="button">
              <Newspaper aria-hidden="true" />
              <strong>채용 공고</strong>
              <span>
                공기업 채용 공고를 확인하고 요구 직무와 NCS 분류를 비교합니다.
              </span>
            </button>
            <button onClick={() => navigate("roadmap")} type="button">
              <Map aria-hidden="true" />
              <strong>로드맵 추천</strong>
              <span>
                목표 직무에 맞는 핵심 자격과 보완 자격을 추천받습니다.
              </span>
            </button>
            <button onClick={() => navigate("portfolio")} type="button">
              <Layers3 aria-hidden="true" />
              <strong>보유 자격 분석</strong>
              <span>
                이미 취득한 자격증을 바탕으로 산업군과 다음 자격을 추천합니다.
              </span>
            </button>
          </section>

          <section className="story" id="story">
            <div>
              <p className="eyebrow">Brand Story</p>
              <h2>CertiMap은 흩어진 자격 정보를 커리어 지도처럼 정리합니다.</h2>
            </div>
            <p>
              어떤 분야가 궁금해졌을 때 가장 먼저 막히는 지점은 “무엇부터
              확인해야 하는가”입니다. CertiMap은 직무와 산업을 출발점으로 삼아
              필요한 자격, 시험 일정, 공식 안내 페이지를 한 흐름으로 묶어 학습
              계획을 세우기 쉽게 만드는 브랜드입니다.
            </p>
          </section>
        </>
      )}

      {view !== "home" && (
        <header className="page-header">
          <p className="eyebrow">
            <ShieldCheck aria-hidden="true" />
            {viewLabels[view]}
          </p>
          <h1>
            {view === "explore" && "자격증 찾기"}
            {view === "schedule" && "시험 일정 보기"}
            {view === "jobs" && "공기업 채용 공고"}
            {view === "roadmap" && "로드맵 추천"}
            {view === "portfolio" && "보유 자격 분석"}
            {view === "login" && "로그인"}
          </h1>
          <p>
            {view === "explore" &&
              "분야와 키워드로 필요한 자격증을 빠르게 좁혀보세요."}
            {view === "schedule" &&
              "접수 기간, 시험일, 발표일을 자격증별로 한눈에 확인하세요."}
            {view === "jobs" &&
              "ALIO 공개 채용 정보를 바탕으로 진행 중인 공공기관 채용 공고를 확인하세요."}
            {view === "roadmap" &&
              "목표 직무에 맞는 핵심 자격과 있으면 좋은 자격을 단계별로 추천합니다."}
            {view === "portfolio" &&
              "이미 보유한 자격증 조합으로 잘 맞는 산업군과 다음 취득 후보를 확인하세요."}
            {view === "login" &&
              "자체 계정으로 로그인해 보유 자격 데이터를 저장하고 다시 불러오세요."}
          </p>
          {/* <div className="page-switcher" aria-label="기능 페이지 이동">
            {(["explore", "schedule", "roadmap", "portfolio", "login"] as View[]).map((item) => (
              <button
                className={view === item ? "is-active" : ""}
                key={item}
                onClick={() => navigate(item)}
                type="button"
              >
                {viewLabels[item]}
              </button>
            ))}
          </div> */}
        </header>
      )}

      {view === "login" && (
        <section className="login-page">
          <section
            className="auth-panel auth-panel--standalone"
            aria-label="로그인"
          >
            <div>
              <p className="eyebrow">Account</p>
              <h3>
                {authUser
                  ? `${authUser.name}님, 로그인되어 있습니다`
                  : "로그인하고 보유 자격 데이터를 저장하세요"}
              </h3>
              <p>
                {authUser
                  ? "보유 자격 분석 페이지에서 등록한 자격증은 다음 접속 때 다시 불러올 수 있습니다."
                  : "현재는 자체 로그인으로 계정을 만들고, 사용자별 보유 자격증 목록을 저장합니다."}
              </p>
            </div>

            {authUser ? (
              <div className="auth-status">
                <span>{authUser.email}</span>
                <button type="button" onClick={handleLogout}>
                  로그아웃
                </button>
                <button type="button" onClick={() => navigate("portfolio")}>
                  보유 자격 분석으로 이동
                </button>
              </div>
            ) : (
              <div className="auth-form">
                <div className="auth-tabs">
                  <button
                    className={authMode === "login" ? "is-active" : ""}
                    type="button"
                    onClick={() => setAuthMode("login")}
                  >
                    로그인
                  </button>
                  <button
                    className={authMode === "signup" ? "is-active" : ""}
                    type="button"
                    onClick={() => setAuthMode("signup")}
                  >
                    회원가입
                  </button>
                </div>
                <div className="auth-fields">
                  {authMode === "signup" && (
                    <input
                      value={authForm.name}
                      onChange={(event) =>
                        setAuthForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      placeholder="이름"
                    />
                  )}
                  <input
                    value={authForm.email}
                    onChange={(event) =>
                      setAuthForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="이메일"
                    type="email"
                  />
                  <input
                    value={authForm.password}
                    onChange={(event) =>
                      setAuthForm((current) => ({
                        ...current,
                        password: event.target.value,
                      }))
                    }
                    placeholder="비밀번호"
                    type="password"
                  />
                  <button type="button" onClick={handleAuthSubmit}>
                    {authMode === "login" ? "로그인" : "회원가입"}
                  </button>
                </div>
              </div>
            )}
            {authMessage && <p className="auth-message">{authMessage}</p>}
          </section>
        </section>
      )}

      {view === "jobs" && (
        <section className="jobs-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Public Sector Jobs</p>
              <h2>공기업 채용 공고 조회</h2>
            </div>
            <p className="section-copy">
              공공기관 채용 공고를 먼저 모아보고, 이후 추천 점수에 채용공고
              빈도와 산업별 요구 조건을 반영할 수 있도록 기반 데이터를
              정리합니다.
            </p>
          </div>

          <div className="jobs-summary">
            <div>
              <span>데이터 출처</span>
              <strong>
                {jobsResponse?.source ?? "ALIO 공공기관 채용정보"}
              </strong>
            </div>
            <div>
              <span>수집 공고</span>
              <strong>{publicJobs.length}건</strong>
            </div>
            <div>
              <span>마지막 갱신</span>
              <strong>
                {jobsResponse
                  ? new Date(jobsResponse.updatedAt).toLocaleString("ko-KR")
                  : "불러오는 중"}
              </strong>
            </div>
          </div>

          <div className="jobs-page__tools">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <input
                value={jobQuery}
                onChange={(event) => setJobQuery(event.target.value)}
                placeholder="기관명, 직무, 지역, NCS 검색"
              />
            </label>
            <div className="filters" aria-label="NCS 분류 필터">
              <button
                className={selectedJobNcs === "all" ? "is-active" : ""}
                onClick={() => setSelectedJobNcs("all")}
                type="button"
              >
                전체
              </button>
              {jobNcsOptions.map((ncs) => (
                <button
                  className={selectedJobNcs === ncs ? "is-active" : ""}
                  key={ncs}
                  onClick={() => setSelectedJobNcs(ncs)}
                  type="button"
                >
                  {ncs}
                </button>
              ))}
            </div>
          </div>

          <div className="job-list" aria-label="공기업 채용 공고 목록">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article className="job-card" key={job.id}>
                  <div className="job-card__top">
                    <div>
                      <span>{job.organization}</span>
                      <h3>{job.title}</h3>
                    </div>
                    <strong>{job.status}</strong>
                  </div>
                  <div className="job-card__tags">
                    {job.ncs.map((ncs) => (
                      <span key={`${job.id}-${ncs}`}>{ncs}</span>
                    ))}
                  </div>
                  <div className="job-card__meta">
                    <span>근무지 {job.location}</span>
                    <span>{job.employmentType}</span>
                    <span>{job.careerType}</span>
                    <span>모집 {job.headcount}</span>
                  </div>
                  <div className="job-card__period">
                    <CalendarDays size={17} aria-hidden="true" />
                    <span>
                      접수 {job.startDate} - {job.endDate}
                    </span>
                  </div>
                  <a href={job.sourceUrl} target="_blank" rel="noreferrer">
                    공고 원문 보기
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))
            ) : (
              <p className="empty-copy">
                조건에 맞는 공고가 없습니다. 검색어 또는 NCS 필터를
                조정해보세요.
              </p>
            )}
          </div>
        </section>
      )}

      {view === "roadmap" && (
        <section className="roadmap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Roadmap Recommender</p>
              <h2>원하는 직무에 맞춘 자격증 로드맵</h2>
            </div>
            <p className="section-copy">
              분야와 직무를 선택하면 현재 데이터베이스에서 핵심 자격과 보완
              자격을 자동으로 골라 준비 순서까지 정리합니다.
            </p>
          </div>

          <div className="roadmap-panel">
            <div className="roadmap-picker">
              <label>
                <span>목표 직무</span>
                <select
                  value={selectedGoalId}
                  onChange={(event) => setSelectedGoalId(event.target.value)}
                >
                  {roadmapGoals.map((goal) => {
                    const industry = industries.find(
                      (item) => item.id === goal.industryId,
                    );
                    return (
                      <option key={goal.id} value={goal.id}>
                        {industry?.name ?? goal.industryId} · {goal.label}
                      </option>
                    );
                  })}
                </select>
              </label>
              <div className="roadmap-goal">
                <span>
                  {
                    industries.find(
                      (industry) => industry.id === selectedGoal.industryId,
                    )?.name
                  }
                </span>
                <h3>{selectedGoal.label}</h3>
                <p>{selectedGoal.description}</p>
              </div>
            </div>

            <div className="roadmap-flow" aria-label="추천 학습 순서">
              {roadmapSteps.map((step, index) => (
                <div className="roadmap-step" key={step.level}>
                  <div className="roadmap-step__marker">
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <strong>{step.level} 단계</strong>
                    <p>
                      {step.level === "입문" &&
                        "기본 개념과 도구 감각을 먼저 잡습니다."}
                      {step.level === "실무" &&
                        "채용 공고에 자주 등장하는 실무 역량을 증명합니다."}
                      {step.level === "전문" &&
                        "담당 업무의 전문성과 법정 요건을 보강합니다."}
                      {step.level === "고급" &&
                        "리드급 역할이나 고난도 프로젝트 역량을 보여줍니다."}
                    </p>
                    <div className="roadmap-step__items">
                      {step.items.map((certification) => (
                        <button
                          type="button"
                          className={
                            selectedRoadmapCertification?.id ===
                            certification.id
                              ? "is-active"
                              : ""
                          }
                          key={certification.id}
                          onClick={() =>
                            selectRoadmapCertification(certification.id)
                          }
                        >
                          {certification.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="recommendation-grid" aria-label="추천 자격증">
              {roadmapRecommendations
                .slice(0, 5)
                .map(({ certification, score }) => {
                  const schedule = getNextSchedule(certification);
                  return (
                    <article
                      className={`recommendation-card ${
                        selectedRoadmapCertification?.id === certification.id
                          ? "is-selected"
                          : ""
                      }`}
                      key={certification.id}
                    >
                      <div className="recommendation-card__top">
                        <span>
                          <Star size={15} aria-hidden="true" />
                          {getRecommendationReason(certification, selectedGoal)}
                        </span>
                        <strong>{score}</strong>
                      </div>
                      <h3>{certification.name}</h3>
                      <p>{certification.summary}</p>
                      <div className="recommendation-card__meta">
                        <span>{certification.level}</span>
                        <span>{certification.averagePrepWeeks}주</span>
                        <span>{formatDate(schedule.examDate)}</span>
                      </div>
                      <div className="recommendation-card__actions">
                        <button
                          type="button"
                          onClick={() =>
                            selectRoadmapCertification(certification.id)
                          }
                        >
                          <Target size={16} aria-hidden="true" />
                          상세 보기
                        </button>
                        <a
                          href={certification.officialUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          공식 사이트
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  );
                })}
            </div>

            {selectedRoadmapCertification && (
              <CertificationDetailPanel
                certification={selectedRoadmapCertification}
                industryName={selectedRoadmapIndustryInfo?.name}
                className="detail-panel--featured roadmap-detail"
                detailRef={roadmapDetailRef}
              />
            )}
          </div>
        </section>
      )}

      {view === "explore" && (
        <section className="explorer">
          <div className="section-heading">
            <p className="eyebrow">Certification Finder</p>
            <h2>산업 분야별 자격증 조회</h2>
          </div>

          <div className="toolbar">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="직무, 자격증, 기관명 검색"
              />
            </label>
            <div className="filters" aria-label="산업 분야 필터">
              <button
                className={selectedIndustry === "all" ? "is-active" : ""}
                onClick={() => setSelectedIndustry("all")}
                type="button"
              >
                전체
              </button>
              {industries.map((industry) => {
                const Icon = iconByIndustry[industry.id];
                return (
                  <button
                    className={
                      selectedIndustry === industry.id ? "is-active" : ""
                    }
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    type="button"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {industry.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="workspace">
            {selectedCertification && (
              <CertificationDetailPanel
                certification={selectedCertification}
                industryName={selectedIndustryInfo?.name}
                className="detail-panel--featured"
              />
            )}

            <div className="cert-list" aria-label="자격증 목록">
              {filtered.map((certification) => {
                const schedule = getNextSchedule(certification);
                return (
                  <button
                    className={`cert-card ${selectedCertification?.id === certification.id ? "is-selected" : ""}`}
                    key={certification.id}
                    onClick={() => setSelectedId(certification.id)}
                    type="button"
                  >
                    <span className="cert-card__meta">
                      {certification.type} · {certification.level}
                    </span>
                    <strong>{certification.name}</strong>
                    <span>{certification.summary}</span>
                    <span className="cert-card__date">
                      <CalendarDays size={16} aria-hidden="true" />
                      다음 시험 {formatDate(schedule.examDate)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {view === "portfolio" && (
        <section className="portfolio">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Credential Portfolio</p>
              <h2>내 자격증 기반 추천</h2>
            </div>
            <p className="section-copy">
              보유 자격증을 등록하면 CertiMap이 역량 키워드와 산업 분포를 분석해
              잘 맞는 산업군과 다음에 준비하기 좋은 자격증을 추천합니다.
            </p>
          </div>

          {!authUser && (
            <section className="login-notice" aria-label="로그인 안내">
              <div>
                <p className="eyebrow">Login Required</p>
                <h3>로그인하면 보유 자격 데이터를 저장할 수 있습니다.</h3>
                <p>
                  계정을 만든 뒤 자격증을 등록하면 다음 접속 때도 같은 목록을
                  다시 불러옵니다.
                </p>
              </div>
              <button type="button" onClick={() => navigate("login")}>
                로그인 페이지로 이동
              </button>
            </section>
          )}

          <div className="portfolio-layout">
            <section
              className="portfolio-builder"
              aria-label="보유 자격증 등록"
            >
              <label className="search-box">
                <Search size={18} aria-hidden="true" />
                <input
                  value={ownedQuery}
                  onChange={(event) => setOwnedQuery(event.target.value)}
                  placeholder="취득한 자격증 검색"
                  disabled={!authUser}
                />
              </label>

              <div className="owned-search-results">
                {ownedSearchResults.map((certification) => {
                  const industry = industries.find(
                    (item) => item.id === certification.industryId,
                  );
                  return (
                    <button
                      key={certification.id}
                      type="button"
                      onClick={() => addOwnedCertification(certification.id)}
                      disabled={!authUser}
                    >
                      <span>{industry?.name}</span>
                      <strong>{certification.name}</strong>
                      <small>
                        {certification.level} · {certification.type}
                      </small>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="owned-panel" aria-label="등록된 보유 자격증">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">My Credentials</p>
                  <h3>등록한 자격증</h3>
                </div>
                <strong>{ownedCertifications.length}개</strong>
              </div>

              {ownedCertifications.length > 0 ? (
                <div className="owned-list">
                  {ownedCertifications.map((certification) => {
                    const industry = industries.find(
                      (item) => item.id === certification.industryId,
                    );
                    return (
                      <div className="owned-chip" key={certification.id}>
                        <span>{industry?.name}</span>
                        <strong>{certification.name}</strong>
                        <button
                          type="button"
                          onClick={() =>
                            removeOwnedCertification(certification.id)
                          }
                        >
                          제거
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="empty-copy">
                  예시로 SQLD, 정보처리기사, 컴퓨터활용능력 같은 자격증을
                  검색해서 추가해보세요.
                </p>
              )}
            </section>
          </div>

          {ownedCertifications.length > 0 && (
            <div className="portfolio-results">
              <section className="industry-match-panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Industry Fit</p>
                    <h3>잘 맞는 산업군</h3>
                  </div>
                </div>
                <div className="industry-match-list">
                  {portfolioIndustryMatches.map(
                    ({ industry, score, ownedCount, goalSignals }) => {
                      const Icon = iconByIndustry[industry.id];
                      return (
                        <article key={industry.id}>
                          <Icon aria-hidden="true" />
                          <div>
                            <strong>{industry.name}</strong>
                            <p>{industry.tagline}</p>
                          </div>
                          <span>{score}점</span>
                          <small>
                            보유 {ownedCount}개 · 직무 연결 {goalSignals}개
                          </small>
                        </article>
                      );
                    },
                  )}
                </div>
              </section>

              <section className="next-cert-panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Next Credentials</p>
                    <h3>연관 자격증 추천</h3>
                  </div>
                </div>
                <div className="next-cert-grid">
                  {portfolioRecommendations.map(({ certification, score }) => {
                    const industry = industries.find(
                      (item) => item.id === certification.industryId,
                    );
                    const schedule = getNextSchedule(certification);
                    return (
                      <article
                        className="recommendation-card"
                        key={certification.id}
                      >
                        <div className="recommendation-card__top">
                          <span>
                            <Star size={15} aria-hidden="true" />
                            보유 역량과 연결
                          </span>
                          <strong>{score}</strong>
                        </div>
                        <h3>{certification.name}</h3>
                        <p>{certification.summary}</p>
                        <div className="recommendation-card__meta">
                          <span>{industry?.name}</span>
                          <span>{certification.level}</span>
                          <span>{formatDate(schedule.examDate)}</span>
                        </div>
                        <div className="recommendation-card__actions">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedIndustry(certification.industryId);
                              setSelectedId(certification.id);
                              setQuery("");
                              navigate("explore");
                            }}
                          >
                            <Target size={16} aria-hidden="true" />
                            상세 보기
                          </button>
                          <a
                            href={certification.officialUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            공식 사이트
                            <ArrowUpRight size={15} aria-hidden="true" />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>
          )}
        </section>
      )}

      {view === "schedule" && (
        <section className="schedule-page">
          <div className="schedule-page__tools">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="일정에서 자격증, 기관명 검색"
              />
            </label>
            <div className="filters" aria-label="일정 분야 필터">
              <button
                className={selectedIndustry === "all" ? "is-active" : ""}
                onClick={() => setSelectedIndustry("all")}
                type="button"
              >
                전체
              </button>
              {industries.map((industry) => {
                const Icon = iconByIndustry[industry.id];
                return (
                  <button
                    className={
                      selectedIndustry === industry.id ? "is-active" : ""
                    }
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    type="button"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {industry.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="schedule-list" aria-label="전체 시험 일정">
            {scheduleItems
              .filter(({ certification }) => {
                const normalizedQuery = query.trim().toLowerCase();
                const matchesIndustry =
                  selectedIndustry === "all" ||
                  certification.industryId === selectedIndustry;
                const matchesQuery =
                  !normalizedQuery ||
                  [
                    certification.name,
                    certification.issuer,
                    certification.summary,
                  ]
                    .join(" ")
                    .toLowerCase()
                    .includes(normalizedQuery);
                return matchesIndustry && matchesQuery;
              })
              .map(({ certification, schedule }) => {
                const industry = industries.find(
                  (item) => item.id === certification.industryId,
                );
                return (
                  <article
                    className="schedule-card"
                    key={`${certification.id}-${schedule.round}`}
                  >
                    <div>
                      <span>{industry?.name}</span>
                      <h3>{certification.name}</h3>
                      <p>
                        {certification.issuer} · {certification.type} ·{" "}
                        {certification.level}
                      </p>
                    </div>
                    <div className="schedule-card__dates">
                      <strong>{schedule.round}</strong>
                      <span>
                        접수 {formatDate(schedule.registrationStart)}-
                        {formatDate(schedule.registrationEnd)}
                      </span>
                      <span>시험 {formatDate(schedule.examDate)}</span>
                      <span>발표 {formatDate(schedule.resultDate)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedIndustry(certification.industryId);
                        setSelectedId(certification.id);
                        setQuery("");
                        navigate("explore");
                      }}
                    >
                      상세 보기
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      )}
    </main>
  );
}
