import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Cpu,
  HeartPulse,
  Leaf,
  Palette,
  Search,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import type { CatalogResponse, Certification, Industry, IndustryId } from "./types";

const iconByIndustry: Record<IndustryId, typeof Cpu> = {
  it: Cpu,
  health: HeartPulse,
  construction: Building2,
  business: BriefcaseBusiness,
  environment: Leaf,
  design: Palette
};

const examTypeLabel = {
  written: "필기",
  practical: "실기",
  portfolio: "포트폴리오",
  interview: "면접"
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(value));
}

function getNextSchedule(certification: Certification) {
  const today = new Date();
  return certification.schedules
    .map((schedule) => ({ ...schedule, date: new Date(schedule.examDate) }))
    .filter((schedule) => schedule.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0] ?? certification.schedules[0];
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

export function App() {
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | "all">("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>("");

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

  const industries = catalog?.industries ?? [];
  const certifications = catalog?.certifications ?? [];

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return certifications.filter((certification) => {
      const matchesIndustry =
        selectedIndustry === "all" || certification.industryId === selectedIndustry;
      const haystack = [
        certification.name,
        certification.issuer,
        certification.summary,
        ...certification.fitFor,
        ...certification.requiredFor
      ]
        .join(" ")
        .toLowerCase();
      return matchesIndustry && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [certifications, query, selectedIndustry]);

  const selectedCertification =
    filtered.find((certification) => certification.id === selectedId) ??
    filtered[0] ??
    certifications[0];

  const selectedIndustryInfo = industries.find(
    (industry) => industry.id === selectedCertification?.industryId
  );

  return (
    <main>
      <section className="hero">
        <img className="hero__image" src="/certimap-hero.png" alt="자격증 탐색 대시보드 콘셉트" />
        <div className="hero__shade" />
        <nav className="nav" aria-label="주요 메뉴">
          <a className="brand" href="/">
            <ShieldCheck aria-hidden="true" />
            <span>CertiMap</span>
          </a>
          <div className="nav__links">
            <a href="#explore">탐색</a>
            <a href="#schedule">시험 일정</a>
            <a href="#story">브랜드</a>
          </div>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            산업별 자격증 탐색 플랫폼
          </p>
          <h1>궁금한 직무에 필요한 자격증을 한 번에 찾으세요.</h1>
          <p>
            CertiMap은 산업 분야, 직무 키워드, 시험 일정을 연결해 다음 커리어 선택에
            필요한 자격증 정보를 빠르게 보여주는 가상의 정보 조회 서비스입니다.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#explore">
              <Search size={18} aria-hidden="true" />
              자격증 찾기
            </a>
            <a className="button button--ghost" href="#schedule">
              <CalendarDays size={18} aria-hidden="true" />
              일정 보기
            </a>
          </div>
        </div>
      </section>

      <section className="quick-stats" aria-label="서비스 요약">
        <div>
          <strong>{industries.length || 6}</strong>
          <span>산업 분야</span>
        </div>
        <div>
          <strong>{certifications.length || 7}</strong>
          <span>추천 자격증</span>
        </div>
        <div>
          <strong>2단계</strong>
          <span>분야 선택 후 공식 사이트 이동</span>
        </div>
      </section>

      <section className="explorer" id="explore">
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
                  className={selectedIndustry === industry.id ? "is-active" : ""}
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

          {selectedCertification && (
            <article className="detail-panel" id="schedule">
              <div className="detail-panel__top">
                <div>
                  <p className="eyebrow">{selectedIndustryInfo?.name}</p>
                  <h2>{selectedCertification.name}</h2>
                  <p>{selectedCertification.summary}</p>
                </div>
                <a className="button button--primary" href={selectedCertification.officialUrl} target="_blank" rel="noreferrer">
                  공식 홈페이지
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className="info-grid">
                <div>
                  <ClipboardList aria-hidden="true" />
                  <span>시행기관</span>
                  <strong>{selectedCertification.issuer}</strong>
                </div>
                <div>
                  <BookOpenCheck aria-hidden="true" />
                  <span>평균 준비</span>
                  <strong>{selectedCertification.averagePrepWeeks}주</strong>
                </div>
                <div>
                  <BadgeCheck aria-hidden="true" />
                  <span>응시료</span>
                  <strong>{selectedCertification.examFee}</strong>
                </div>
              </div>

              <div className="detail-columns">
                <section>
                  <h3>주요 활용 직무</h3>
                  <div className="pill-list">
                    {selectedCertification.fitFor.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </section>
                <section>
                  <h3>검증 역량</h3>
                  <ul className="check-list">
                    {selectedCertification.requiredFor.map((item) => (
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
                  <span>{selectedCertification.passingStandard}</span>
                </div>
                {selectedCertification.schedules.map((schedule) => (
                  <div className="schedule-row" key={`${selectedCertification.id}-${schedule.round}`}>
                    <strong>{schedule.round}</strong>
                    <span>{examTypeLabel[schedule.examType]}</span>
                    <span>접수 {formatDate(schedule.registrationStart)}-{formatDate(schedule.registrationEnd)}</span>
                    <span>시험 {formatDate(schedule.examDate)}</span>
                    <span>발표 {formatDate(schedule.resultDate)}</span>
                  </div>
                ))}
              </section>
            </article>
          )}
        </div>
      </section>

      <section className="story" id="story">
        <div>
          <p className="eyebrow">Brand Story</p>
          <h2>CertiMap은 흩어진 자격 정보를 커리어 지도처럼 정리합니다.</h2>
        </div>
        <p>
          어떤 분야가 궁금해졌을 때 가장 먼저 막히는 지점은 “무엇부터 확인해야 하는가”입니다.
          CertiMap은 직무와 산업을 출발점으로 삼아 필요한 자격, 시험 일정, 공식 안내 페이지를
          한 흐름으로 묶어 학습 계획을 세우기 쉽게 만드는 브랜드입니다.
        </p>
      </section>
    </main>
  );
}
