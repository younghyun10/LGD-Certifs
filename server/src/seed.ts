import type { Certification, Industry } from "./types.js";

export const industries: Industry[] = [
  {
    id: "it",
    name: "IT·기술",
    tagline: "데이터, 클라우드, 보안 직무의 기준점",
    description: "개발, 데이터 분석, 인프라, 보안 직무에서 채용 공고에 자주 등장하는 자격을 모았습니다."
  },
  {
    id: "health",
    name: "보건·의료",
    tagline: "현장 신뢰와 법정 요건을 함께 확인",
    description: "의료 행정, 안전, 돌봄, 임상 보조 분야에서 요구되는 실무형 자격을 살펴봅니다."
  },
  {
    id: "construction",
    name: "건설·안전",
    tagline: "현장 배치와 안전 관리에 필요한 자격",
    description: "건축, 토목, 산업안전, 설비 관리 직무에 필요한 국가기술자격 중심으로 정리했습니다."
  },
  {
    id: "business",
    name: "경영·사무",
    tagline: "회계, 인사, 물류, 운영 실무의 증명",
    description: "사무 자동화, 회계, 물류, 프로젝트 운영 역량을 보여주는 자격을 비교합니다."
  },
  {
    id: "environment",
    name: "농림·환경",
    tagline: "지속가능성, 에너지, 환경 관리 직무",
    description: "환경 규제 대응, 에너지 관리, 조경 및 농업 기술 분야 자격을 탐색합니다."
  },
  {
    id: "design",
    name: "디자인·예술",
    tagline: "포트폴리오를 보완하는 실무 인증",
    description: "디지털 콘텐츠, 색채, 제품, 서비스 디자인 분야의 검증 지표를 모았습니다."
  }
];

function generatedSchedules(index: number, examType: Certification["schedules"][number]["examType"] = "written") {
  const firstMonth = (index % 6) + 1;
  const secondMonth = firstMonth + 6;
  const pad = (value: number) => String(value).padStart(2, "0");
  const resultDate = (month: number) =>
    month === 12 ? "2027-01-10" : `2026-${pad(month + 1)}-10`;

  return [
    {
      round: `2026년 ${firstMonth}월`,
      registrationStart: `2026-${pad(firstMonth)}-03`,
      registrationEnd: `2026-${pad(firstMonth)}-10`,
      examDate: `2026-${pad(firstMonth)}-24`,
      resultDate: resultDate(firstMonth),
      examType
    },
    {
      round: `2026년 ${secondMonth}월`,
      registrationStart: `2026-${pad(secondMonth)}-03`,
      registrationEnd: `2026-${pad(secondMonth)}-10`,
      examDate: `2026-${pad(secondMonth)}-24`,
      resultDate: resultDate(secondMonth),
      examType
    }
  ];
}

const additionalCertifications: Omit<Certification, "schedules">[] = [
  {
    id: "investment-advisor",
    industryId: "finance",
    name: "투자자산운용사",
    issuer: "금융투자협회",
    level: "전문",
    type: "민간자격",
    summary: "집합투자재산 운용, 투자상품 분석, 금융시장 이해도를 검증하는 자산운용 대표 자격입니다.",
    fitFor: ["자산운용 실무자", "증권사 PB", "금융상품 기획자"],
    requiredFor: ["금융상품 분석", "투자위험 관리", "포트폴리오 운용"],
    averagePrepWeeks: 8,
    officialUrl: "https://license.kofia.or.kr",
    examFee: "50,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "credit-analyst",
    industryId: "finance",
    name: "신용분석사",
    issuer: "한국금융연수원",
    level: "전문",
    type: "민간자격",
    summary: "기업 재무제표와 산업 정보를 바탕으로 신용위험을 평가하는 금융 분석 자격입니다.",
    fitFor: ["여신 심사역", "기업금융 담당자", "리스크 분석가"],
    requiredFor: ["재무제표 분석", "신용위험 평가", "기업가치 이해"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.kbi.or.kr",
    examFee: "60,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상"
  },
  {
    id: "frm",
    industryId: "finance",
    name: "Financial Risk Manager",
    issuer: "GARP",
    level: "고급",
    type: "국제자격",
    summary: "시장, 신용, 운영 리스크를 정량적으로 측정하고 관리하는 글로벌 금융 리스크 자격입니다.",
    fitFor: ["리스크 매니저", "퀀트 분석가", "금융 데이터 분석가"],
    requiredFor: ["시장위험 측정", "리스크 모델링", "금융규제 이해"],
    averagePrepWeeks: 18,
    officialUrl: "https://www.garp.org/frm",
    examFee: "등록 시점별 상이",
    passingStandard: "GARP 합격 기준 충족"
  },
  {
    id: "afpk",
    industryId: "finance",
    name: "AFPK",
    issuer: "한국FPSB",
    level: "실무",
    type: "민간자격",
    summary: "개인 재무설계, 보험, 투자, 은퇴 설계의 기초 상담 역량을 검증합니다.",
    fitFor: ["재무설계사", "보험 컨설턴트", "은행 창구 상담원"],
    requiredFor: ["개인 재무상담", "보험·투자 기초", "은퇴 설계"],
    averagePrepWeeks: 7,
    officialUrl: "https://www.fpsbkorea.org",
    examFee: "66,000원",
    passingStandard: "전체 평균 70점 이상"
  },
  {
    id: "insurance-planner",
    industryId: "finance",
    name: "손해보험설계사",
    issuer: "보험연수원",
    level: "입문",
    type: "민간자격",
    summary: "손해보험 상품 구조, 모집 윤리, 보험계약 실무를 이해하는 영업 입문 자격입니다.",
    fitFor: ["보험 설계사", "고객 상담원", "보험 대리점 직원"],
    requiredFor: ["보험 상품 설명", "계약 관리", "고객 리스크 상담"],
    averagePrepWeeks: 3,
    officialUrl: "https://www.in.or.kr",
    examFee: "20,000원",
    passingStandard: "100점 만점 60점 이상"
  },
  {
    id: "lifelong-educator",
    industryId: "education",
    name: "평생교육사",
    issuer: "국가평생교육진흥원",
    level: "전문",
    type: "국가자격",
    summary: "평생교육 프로그램 기획, 운영, 평가 역량을 검증하는 교육 운영 전문 자격입니다.",
    fitFor: ["교육 운영자", "평생교육기관 담당자", "교육 기획자"],
    requiredFor: ["교육 프로그램 설계", "학습자 관리", "교육 평가"],
    averagePrepWeeks: 12,
    officialUrl: "https://lledu.nile.or.kr",
    examFee: "과정 이수형",
    passingStandard: "관련 과목 이수 및 실습 기준 충족"
  },
  {
    id: "vocational-counselor",
    industryId: "education",
    name: "직업상담사 2급",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "진로상담, 직업심리, 노동시장 정보 활용과 취업 지원 실무 역량을 평가합니다.",
    fitFor: ["취업 컨설턴트", "커리어 코치", "교육기관 상담원"],
    requiredFor: ["진로 상담", "직업심리 이해", "취업 지원"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 20,800원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "e-learning-specialist",
    industryId: "education",
    name: "이러닝운영관리사",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "온라인 학습 플랫폼 운영, 콘텐츠 품질관리, 학습 데이터 관리 능력을 평가합니다.",
    fitFor: ["LMS 운영자", "에듀테크 매니저", "교육 콘텐츠 관리자"],
    requiredFor: ["온라인 교육 운영", "학습 데이터 관리", "콘텐츠 품질 점검"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 20,800원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "korean-language-teacher",
    industryId: "education",
    name: "한국어교원 2급",
    issuer: "국립국어원",
    level: "전문",
    type: "국가자격",
    summary: "외국어로서의 한국어 교육 이론과 수업 설계 역량을 검증합니다.",
    fitFor: ["한국어 강사", "교육 콘텐츠 개발자", "다문화 교육 담당자"],
    requiredFor: ["언어교육 설계", "한국어 문법 지도", "학습자 평가"],
    averagePrepWeeks: 16,
    officialUrl: "https://kteacher.korean.go.kr",
    examFee: "심사 수수료 기준",
    passingStandard: "자격 심사 기준 충족"
  },
  {
    id: "youth-counselor",
    industryId: "education",
    name: "청소년상담사 3급",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "청소년 발달, 상담 이론, 위기 개입과 교육 상담 역량을 평가합니다.",
    fitFor: ["청소년 상담원", "학교 상담 지원", "교육복지 담당자"],
    requiredFor: ["상담 기초", "청소년 발달 이해", "위기 대응"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 26,000원 / 면접 16,000원",
    passingStandard: "필기 평균 60점 및 면접 기준 충족"
  },
  {
    id: "personal-information-manager",
    industryId: "legal",
    name: "개인정보관리사 CPPG",
    issuer: "한국CPO포럼",
    level: "전문",
    type: "민간자격",
    summary: "개인정보 보호법, 내부관리계획, 개인정보 처리 실무 역량을 검증합니다.",
    fitFor: ["개인정보 담당자", "보안 컴플라이언스", "법무 지원"],
    requiredFor: ["개인정보 처리 기준", "내부관리계획", "침해 대응"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.cpptest.or.kr",
    examFee: "130,000원",
    passingStandard: "100점 만점 60점 이상"
  },
  {
    id: "compliance-officer",
    industryId: "legal",
    name: "준법감시전문가",
    issuer: "한국금융연수원",
    level: "전문",
    type: "민간자격",
    summary: "금융회사 내부통제, 자금세탁방지, 법규 준수 체계 운영 역량을 평가합니다.",
    fitFor: ["준법감시 담당자", "내부통제 실무자", "리스크 관리자"],
    requiredFor: ["내부통제", "규정 점검", "컴플라이언스 보고"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.kbi.or.kr",
    examFee: "70,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상"
  },
  {
    id: "patent-information-searcher",
    industryId: "legal",
    name: "지식재산능력시험 IPAT",
    issuer: "한국발명진흥회",
    level: "실무",
    type: "민간자격",
    summary: "특허, 상표, 디자인권 등 지식재산 제도의 이해와 활용 능력을 평가합니다.",
    fitFor: ["특허 사무원", "R&D 기획자", "브랜드 법무 담당자"],
    requiredFor: ["특허 검색", "지식재산 제도 이해", "권리화 지원"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.ipat.or.kr",
    examFee: "50,000원",
    passingStandard: "등급별 점수 기준"
  },
  {
    id: "administrative-agent",
    industryId: "legal",
    name: "행정사",
    issuer: "한국산업인력공단",
    level: "고급",
    type: "국가자격",
    summary: "행정 관계 법령, 민원 서류 작성, 인허가 업무 대행 역량을 검증합니다.",
    fitFor: ["행정 법무 담당자", "인허가 컨설턴트", "공공 민원 전문가"],
    requiredFor: ["행정 법령 이해", "문서 작성", "인허가 절차"],
    averagePrepWeeks: 20,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "1차 25,000원 / 2차 40,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상"
  },
  {
    id: "contract-management-specialist",
    industryId: "legal",
    name: "계약관리전문가",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "계약서 검토, 리스크 조항 점검, 구매·외주 계약 관리 실무를 평가합니다.",
    fitFor: ["계약 담당자", "구매 담당자", "법무 지원"],
    requiredFor: ["계약서 검토", "리스크 조항 이해", "계약 이행 관리"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "50,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "records-manager",
    industryId: "public",
    name: "기록물관리 전문요원",
    issuer: "국가기록원",
    level: "전문",
    type: "국가자격",
    summary: "공공기록물 분류, 보존, 평가, 기록정보 서비스 운영 역량을 확인합니다.",
    fitFor: ["기록관리 담당자", "공공기관 문서관리", "아카이브 운영자"],
    requiredFor: ["기록 분류", "보존 관리", "기록정보 서비스"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.archives.go.kr",
    examFee: "심사 기준",
    passingStandard: "자격 요건 및 시험 기준 충족"
  },
  {
    id: "policy-analysis-specialist",
    industryId: "public",
    name: "정책분석평가사",
    issuer: "한국정책분석평가학회",
    level: "실무",
    type: "민간자격",
    summary: "정책 자료 조사, 성과지표 설계, 평가 보고서 작성 역량을 평가합니다.",
    fitFor: ["정책 연구원", "공공 프로젝트 매니저", "성과관리 담당자"],
    requiredFor: ["정책 분석", "성과 평가", "보고서 작성"],
    averagePrepWeeks: 7,
    officialUrl: "https://www.kapae.kr",
    examFee: "60,000원",
    passingStandard: "등급별 평가 기준 충족"
  },
  {
    id: "social-worker",
    industryId: "public",
    name: "사회복지사 1급",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "사회복지 정책, 실천, 행정과 사례관리 역량을 검증하는 복지 분야 핵심 자격입니다.",
    fitFor: ["복지기관 실무자", "공공 복지 담당자", "사례관리자"],
    requiredFor: ["사회복지 실천", "사례관리", "복지행정"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "25,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상"
  },
  {
    id: "public-data-analyst",
    industryId: "public",
    name: "공공데이터 활용 분석사",
    issuer: "한국지능정보사회진흥원",
    level: "실무",
    type: "민간자격",
    summary: "공공데이터 포털 활용, 데이터 정제, 시각화와 행정 데이터 분석 역량을 평가합니다.",
    fitFor: ["공공 데이터 담당자", "정책 데이터 분석가", "행정 혁신 담당자"],
    requiredFor: ["공공데이터 활용", "데이터 시각화", "정책 지표 분석"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.data.go.kr",
    examFee: "시험별 상이",
    passingStandard: "평가 기준 충족"
  },
  {
    id: "office-administration",
    industryId: "public",
    name: "사무행정전문가",
    issuer: "한국생산성본부",
    level: "입문",
    type: "민간자격",
    summary: "행정 문서 작성, 문서 분류, 회의 운영, 사무 프로세스 관리 능력을 평가합니다.",
    fitFor: ["행정 사무원", "공공기관 인턴", "총무 담당자"],
    requiredFor: ["행정 문서 처리", "회의 운영", "사무 프로세스"],
    averagePrepWeeks: 4,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "35,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "quality-management-engineer",
    industryId: "manufacturing",
    name: "품질경영기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "품질관리, 통계적 공정관리, 신뢰성 관리와 품질개선 역량을 검증합니다.",
    fitFor: ["품질관리자", "공정개선 담당자", "제조 데이터 분석가"],
    requiredFor: ["품질 개선", "통계적 공정관리", "검사 기준 설계"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "production-automation-industrial",
    industryId: "manufacturing",
    name: "생산자동화산업기사",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "자동화 설비, PLC, 센서, 생산 시스템 운영과 유지보수 역량을 평가합니다.",
    fitFor: ["자동화 설비 담당자", "스마트팩토리 운영자", "생산기술 담당자"],
    requiredFor: ["PLC 제어", "자동화 설비 운영", "공정 개선"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 20,800원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "cad-industrial",
    industryId: "manufacturing",
    name: "기계설계산업기사",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "기계요소 설계, 2D/3D CAD 도면 작성, 설계 검토 역량을 평가합니다.",
    fitFor: ["기계 설계 보조", "CAD 오퍼레이터", "제품개발 담당자"],
    requiredFor: ["CAD 도면 작성", "기계요소 이해", "설계 검토"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 20,800원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "machinery-maintenance",
    industryId: "manufacturing",
    name: "설비보전기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "생산 설비의 진단, 예방정비, 보전 계획 수립과 설비 신뢰성 관리 역량을 검증합니다.",
    fitFor: ["설비보전 담당자", "공무팀", "생산기술 엔지니어"],
    requiredFor: ["설비 진단", "예방 정비", "보전 계획"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "six-sigma-greenbelt",
    industryId: "manufacturing",
    name: "Six Sigma Green Belt",
    issuer: "ASQ",
    level: "실무",
    type: "국제자격",
    summary: "DMAIC 기반 문제해결, 품질 개선 프로젝트 수행과 데이터 기반 개선 역량을 인증합니다.",
    fitFor: ["품질개선 담당자", "프로세스 혁신 담당자", "제조 데이터 분석가"],
    requiredFor: ["품질 개선 프로젝트", "통계적 문제해결", "프로세스 분석"],
    averagePrepWeeks: 8,
    officialUrl: "https://asq.org/cert/six-sigma-green-belt",
    examFee: "응시 지역별 상이",
    passingStandard: "ASQ 인증시험 기준 충족"
  },
  {
    id: "energy-manager-engineer",
    industryId: "energy",
    name: "에너지관리기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "열설비, 에너지 진단, 효율 개선과 에너지 관리 기준 이해도를 평가합니다.",
    fitFor: ["에너지 관리자", "시설 관리자", "설비 운영 담당자"],
    requiredFor: ["에너지 효율 관리", "열설비 운영", "진단 보고"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "renewable-energy-engineer",
    industryId: "energy",
    name: "신재생에너지발전설비기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "태양광 등 신재생 발전설비의 설계, 시공, 운영과 안전 기준을 평가합니다.",
    fitFor: ["신재생 설비 담당자", "태양광 시공관리자", "에너지 컨설턴트"],
    requiredFor: ["발전설비 설계", "시공 관리", "전기 안전 기준"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "gas-engineer",
    industryId: "energy",
    name: "가스기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "가스 설비, 저장·공급, 안전관리와 사고 예방 역량을 평가합니다.",
    fitFor: ["가스 안전관리자", "시설 관리자", "설비 점검 담당자"],
    requiredFor: ["가스 안전관리", "설비 점검", "위험 예방"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "electrical-safety-manager",
    industryId: "energy",
    name: "전기안전관리자 실무",
    issuer: "한국전기안전공사",
    level: "실무",
    type: "민간자격",
    summary: "전기설비 안전점검, 법정 점검 기준, 사고 예방 중심의 시설 전기 실무를 평가합니다.",
    fitFor: ["전기 시설 담당자", "건물 관리 담당자", "안전관리 보조"],
    requiredFor: ["전기 점검", "안전 기준 이해", "시설 사고 예방"],
    averagePrepWeeks: 5,
    officialUrl: "https://www.kesco.or.kr",
    examFee: "교육·평가별 상이",
    passingStandard: "과정 평가 기준 충족"
  },
  {
    id: "carbon-management-specialist",
    industryId: "energy",
    name: "탄소중립관리사",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "탄소중립 전략, 에너지 사용량 관리, 온실가스 감축 과제 운영 역량을 평가합니다.",
    fitFor: ["ESG 실무자", "에너지 담당자", "탄소관리 담당자"],
    requiredFor: ["탄소중립 전략", "배출량 관리", "감축 과제 운영"],
    averagePrepWeeks: 6,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "50,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "digital-marketing-specialist",
    industryId: "media",
    name: "디지털마케팅전문가",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "검색광고, SNS 캠페인, 콘텐츠 전략과 성과 분석 역량을 평가합니다.",
    fitFor: ["퍼포먼스 마케터", "콘텐츠 마케터", "브랜드 매니저"],
    requiredFor: ["캠페인 기획", "광고 성과 분석", "콘텐츠 전략"],
    averagePrepWeeks: 6,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "45,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "multimedia-content-specialist",
    industryId: "media",
    name: "멀티미디어콘텐츠제작전문가",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "영상, 그래픽, 웹 콘텐츠 제작과 멀티미디어 저작도구 활용 능력을 검증합니다.",
    fitFor: ["영상 콘텐츠 제작자", "디지털 디자이너", "미디어 운영자"],
    requiredFor: ["영상 편집", "멀티미디어 제작", "콘텐츠 저작"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 26,900원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "google-analytics",
    industryId: "media",
    name: "Google Analytics Certification",
    issuer: "Google",
    level: "입문",
    type: "국제자격",
    summary: "웹·앱 데이터 수집, 이벤트 분석, 리포트 해석과 마케팅 성과 측정 역량을 인증합니다.",
    fitFor: ["마케팅 분석가", "그로스 마케터", "서비스 운영자"],
    requiredFor: ["웹 분석", "이벤트 측정", "성과 리포팅"],
    averagePrepWeeks: 3,
    officialUrl: "https://skillshop.withgoogle.com",
    examFee: "무료",
    passingStandard: "Google Skillshop 기준 충족"
  },
  {
    id: "video-editor",
    industryId: "media",
    name: "영상편집전문가",
    issuer: "한국영상전문인협회",
    level: "실무",
    type: "민간자격",
    summary: "촬영본 구성, 컷 편집, 자막, 색보정, 숏폼 영상 제작 실무를 평가합니다.",
    fitFor: ["영상 편집자", "콘텐츠 크리에이터", "SNS 운영자"],
    requiredFor: ["컷 편집", "자막 구성", "영상 후반 작업"],
    averagePrepWeeks: 5,
    officialUrl: "https://www.kpc.or.kr",
    examFee: "시험별 상이",
    passingStandard: "실기 평가 기준 충족"
  },
  {
    id: "broadcast-communication-engineer",
    industryId: "media",
    name: "방송통신기사",
    issuer: "한국방송통신전파진흥원",
    level: "전문",
    type: "국가자격",
    summary: "방송통신 설비, 송수신 시스템, 네트워크 운영과 전파 기술 이해도를 평가합니다.",
    fitFor: ["방송기술 엔지니어", "통신망 운영자", "미디어 인프라 담당자"],
    requiredFor: ["방송통신 설비", "송수신 시스템", "네트워크 운영"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.cq.or.kr",
    examFee: "필기 18,800원 / 실기 21,900원",
    passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "hotel-service",
    industryId: "hospitality",
    name: "호텔서비스사",
    issuer: "한국산업인력공단",
    level: "실무",
    type: "국가자격",
    summary: "호텔 객실·식음 서비스, 고객 응대, 관광 서비스 매너를 평가합니다.",
    fitFor: ["호텔 프런트", "객실 서비스", "고객 경험 담당자"],
    requiredFor: ["고객 응대", "호텔 서비스 절차", "서비스 매너"],
    averagePrepWeeks: 5,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "20,000원",
    passingStandard: "필기 및 면접 기준 충족"
  },
  {
    id: "tour-guide",
    industryId: "hospitality",
    name: "관광통역안내사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "외국어 안내, 관광자원 해설, 관광법규와 서비스 실무 역량을 검증합니다.",
    fitFor: ["관광 가이드", "인바운드 여행사", "지역 관광 해설사"],
    requiredFor: ["관광 해설", "외국어 안내", "여행 서비스"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "20,000원",
    passingStandard: "필기 평균 60점 및 면접 기준 충족"
  },
  {
    id: "korean-cuisine-craftsman",
    industryId: "hospitality",
    name: "한식조리기능사",
    issuer: "한국산업인력공단",
    level: "입문",
    type: "국가자격",
    summary: "한식 조리 재료 손질, 조리법, 위생관리와 메뉴 완성도를 평가합니다.",
    fitFor: ["조리사", "외식 창업 준비자", "급식 조리원"],
    requiredFor: ["한식 조리", "위생 관리", "재료 손질"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 14,500원 / 실기 26,900원",
    passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "barista",
    industryId: "hospitality",
    name: "바리스타 2급",
    issuer: "한국커피협회",
    level: "입문",
    type: "민간자격",
    summary: "커피 추출, 원두 이해, 음료 제조와 카페 서비스 기본 역량을 평가합니다.",
    fitFor: ["카페 바리스타", "외식 서비스", "식음료 매장 운영자"],
    requiredFor: ["에스프레소 추출", "음료 제조", "고객 서비스"],
    averagePrepWeeks: 4,
    officialUrl: "https://www.kca-coffee.org",
    examFee: "필기 33,000원 / 실기 55,000원",
    passingStandard: "필기·실기 평가 기준 충족"
  },
  {
    id: "airline-service",
    industryId: "hospitality",
    name: "항공서비스매니저",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "항공 객실 서비스, 안전 안내, 고객 커뮤니케이션과 서비스 품질 관리 역량을 평가합니다.",
    fitFor: ["항공 서비스 지원", "공항 지상직", "고객 서비스 매니저"],
    requiredFor: ["항공 서비스 절차", "고객 커뮤니케이션", "서비스 품질 관리"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "45,000원",
    passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "aws-cloud-practitioner",
    industryId: "it",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "입문",
    type: "국제자격",
    summary: "AWS 클라우드 핵심 개념, 보안, 요금, 주요 서비스를 이해하는 입문 자격입니다.",
    fitFor: ["클라우드 입문자", "IT 영업 담당자", "서비스 기획자"],
    requiredFor: ["클라우드 기본 이해", "AWS 서비스 식별", "비용 구조 이해"],
    averagePrepWeeks: 4,
    officialUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    examFee: "100 USD",
    passingStandard: "AWS 인증 기준 충족"
  },
  {
    id: "aws-solutions-architect-associate",
    industryId: "it",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    level: "전문",
    type: "국제자격",
    summary: "AWS 기반 고가용성 아키텍처 설계와 비용 최적화 역량을 검증합니다.",
    fitFor: ["클라우드 엔지니어", "솔루션 아키텍트", "인프라 담당자"],
    requiredFor: ["클라우드 아키텍처", "네트워크 구성", "운영 안정성"],
    averagePrepWeeks: 10,
    officialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    examFee: "150 USD",
    passingStandard: "AWS 인증 기준 충족"
  },
  {
    id: "aws-developer-associate",
    industryId: "it",
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    level: "전문",
    type: "국제자격",
    summary: "AWS에서 애플리케이션을 개발, 배포, 모니터링하는 역량을 인증합니다.",
    fitFor: ["백엔드 개발자", "클라우드 개발자", "DevOps 엔지니어"],
    requiredFor: ["서버리스 개발", "API 배포", "클라우드 모니터링"],
    averagePrepWeeks: 9,
    officialUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
    examFee: "150 USD",
    passingStandard: "AWS 인증 기준 충족"
  },
  {
    id: "aws-sysops-administrator-associate",
    industryId: "it",
    name: "AWS Certified SysOps Administrator - Associate",
    issuer: "Amazon Web Services",
    level: "전문",
    type: "국제자격",
    summary: "AWS 인프라 운영, 배포 자동화, 장애 대응과 모니터링 능력을 검증합니다.",
    fitFor: ["시스템 운영자", "클라우드 운영 엔지니어", "SRE"],
    requiredFor: ["인프라 운영", "장애 대응", "운영 자동화"],
    averagePrepWeeks: 10,
    officialUrl: "https://aws.amazon.com/certification/certified-sysops-admin-associate/",
    examFee: "150 USD",
    passingStandard: "AWS 인증 기준 충족"
  },
  {
    id: "azure-administrator-associate",
    industryId: "it",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    level: "전문",
    type: "국제자격",
    summary: "Azure 리소스, 네트워크, ID, 보안, 모니터링을 운영하는 관리자 자격입니다.",
    fitFor: ["클라우드 관리자", "인프라 엔지니어", "시스템 운영자"],
    requiredFor: ["Azure 리소스 운영", "ID 관리", "네트워크 구성"],
    averagePrepWeeks: 9,
    officialUrl: "https://learn.microsoft.com/credentials/certifications/azure-administrator/",
    examFee: "지역별 상이",
    passingStandard: "Microsoft 인증 기준 충족"
  },
  {
    id: "azure-developer-associate",
    industryId: "it",
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    level: "전문",
    type: "국제자격",
    summary: "Azure 기반 앱 개발, 스토리지, 보안, API 연동과 배포 역량을 검증합니다.",
    fitFor: ["클라우드 개발자", "백엔드 개발자", "API 개발자"],
    requiredFor: ["Azure 앱 개발", "보안 연동", "배포 자동화"],
    averagePrepWeeks: 9,
    officialUrl: "https://learn.microsoft.com/credentials/certifications/azure-developer/",
    examFee: "지역별 상이",
    passingStandard: "Microsoft 인증 기준 충족"
  },
  {
    id: "google-associate-cloud-engineer",
    industryId: "it",
    name: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    level: "실무",
    type: "국제자격",
    summary: "Google Cloud 환경 구성, 배포, 운영 모니터링 기초 역량을 인증합니다.",
    fitFor: ["클라우드 엔지니어", "인프라 운영자", "주니어 DevOps"],
    requiredFor: ["GCP 리소스 구성", "배포 운영", "클라우드 모니터링"],
    averagePrepWeeks: 8,
    officialUrl: "https://cloud.google.com/learn/certification/cloud-engineer",
    examFee: "125 USD",
    passingStandard: "Google Cloud 인증 기준 충족"
  },
  {
    id: "comptia-a-plus",
    industryId: "it",
    name: "CompTIA A+",
    issuer: "CompTIA",
    level: "입문",
    type: "국제자격",
    summary: "PC, 운영체제, 네트워크, 보안 기초와 IT 지원 업무 역량을 검증합니다.",
    fitFor: ["IT 지원 담당자", "헬프데스크", "시스템 운영 입문자"],
    requiredFor: ["하드웨어 이해", "운영체제 문제 해결", "기초 보안"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.comptia.org/certifications/a",
    examFee: "시험센터별 상이",
    passingStandard: "CompTIA 인증 기준 충족"
  },
  {
    id: "comptia-network-plus",
    industryId: "it",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    level: "실무",
    type: "국제자격",
    summary: "네트워크 설계, 운영, 보안, 장애 분석의 기초 실무 역량을 인증합니다.",
    fitFor: ["네트워크 운영자", "인프라 엔지니어", "보안 입문자"],
    requiredFor: ["네트워크 프로토콜", "장애 분석", "네트워크 보안"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.comptia.org/certifications/network",
    examFee: "시험센터별 상이",
    passingStandard: "CompTIA 인증 기준 충족"
  },
  {
    id: "comptia-security-plus",
    industryId: "it",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    level: "실무",
    type: "국제자격",
    summary: "보안 위협, 취약점, 암호화, 접근통제와 보안 운영 기초를 검증합니다.",
    fitFor: ["보안 담당자", "시스템 운영자", "보안 컨설턴트 입문자"],
    requiredFor: ["보안 위협 분석", "접근통제", "보안 운영"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.comptia.org/certifications/security",
    examFee: "시험센터별 상이",
    passingStandard: "CompTIA 인증 기준 충족"
  },
  {
    id: "cisco-ccna",
    industryId: "it",
    name: "Cisco CCNA",
    issuer: "Cisco",
    level: "실무",
    type: "국제자격",
    summary: "라우팅, 스위칭, IP 서비스, 보안 기초와 자동화 기초를 검증합니다.",
    fitFor: ["네트워크 엔지니어", "인프라 운영자", "보안 엔지니어"],
    requiredFor: ["라우팅·스위칭", "IP 네트워크", "네트워크 자동화"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
    examFee: "300 USD",
    passingStandard: "Cisco 인증 기준 충족"
  },
  {
    id: "kubernetes-cka",
    industryId: "it",
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    level: "전문",
    type: "국제자격",
    summary: "Kubernetes 클러스터 설치, 운영, 네트워킹, 보안과 장애 대응 역량을 검증합니다.",
    fitFor: ["플랫폼 엔지니어", "DevOps 엔지니어", "클라우드 운영자"],
    requiredFor: ["컨테이너 오케스트레이션", "클러스터 운영", "장애 대응"],
    averagePrepWeeks: 12,
    officialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    examFee: "395 USD",
    passingStandard: "실습형 시험 합격 기준 충족"
  },
  {
    id: "kubernetes-ckad",
    industryId: "it",
    name: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    level: "전문",
    type: "국제자격",
    summary: "Kubernetes 환경에서 애플리케이션을 설계, 배포, 설정, 관찰하는 개발 자격입니다.",
    fitFor: ["클라우드 네이티브 개발자", "백엔드 개발자", "DevOps 엔지니어"],
    requiredFor: ["컨테이너 앱 배포", "워크로드 설정", "서비스 관찰"],
    averagePrepWeeks: 10,
    officialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
    examFee: "395 USD",
    passingStandard: "실습형 시험 합격 기준 충족"
  },
  {
    id: "terraform-associate",
    industryId: "it",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    level: "실무",
    type: "국제자격",
    summary: "Terraform을 활용한 IaC 구성, 상태 관리, 모듈 활용과 워크플로 이해도를 검증합니다.",
    fitFor: ["DevOps 엔지니어", "클라우드 엔지니어", "인프라 자동화 담당자"],
    requiredFor: ["IaC 작성", "인프라 버전관리", "자동화 워크플로"],
    averagePrepWeeks: 6,
    officialUrl: "https://developer.hashicorp.com/certifications/infrastructure-automation",
    examFee: "70.50 USD",
    passingStandard: "HashiCorp 인증 기준 충족"
  },
  {
    id: "oracle-java-se-17",
    industryId: "it",
    name: "Oracle Certified Professional Java SE 17 Developer",
    issuer: "Oracle",
    level: "전문",
    type: "국제자격",
    summary: "Java 문법, 객체지향, API, 예외 처리와 모듈 시스템 개발 역량을 인증합니다.",
    fitFor: ["Java 개발자", "백엔드 개발자", "서버 개발자"],
    requiredFor: ["Java 프로그래밍", "객체지향 설계", "표준 API 활용"],
    averagePrepWeeks: 12,
    officialUrl: "https://education.oracle.com/oracle-certified-professional-java-se-17-developer/trackp_OCPJSE17",
    examFee: "지역별 상이",
    passingStandard: "Oracle 인증 기준 충족"
  },
  {
    id: "certified-real-estate-appraiser",
    industryId: "finance",
    name: "감정평가사",
    issuer: "한국산업인력공단",
    level: "고급",
    type: "국가자격",
    summary: "부동산, 동산, 기업가치 등 경제적 가치를 평가하는 전문 자격입니다.",
    fitFor: ["감정평가 법인", "부동산 금융 담당자", "자산평가 전문가"],
    requiredFor: ["자산 가치평가", "부동산 시장 분석", "평가 법규 이해"],
    averagePrepWeeks: 40,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "큐넷 공고 기준",
    passingStandard: "1차, 2차 시험 합격 기준 충족"
  },
  {
    id: "financial-planner-cfp", industryId: "finance", name: "CFP", issuer: "한국FPSB", level: "고급", type: "국제자격",
    summary: "종합 재무설계, 투자, 보험, 은퇴, 세금, 상속 설계 역량을 인증합니다.",
    fitFor: ["재무설계 전문가", "PB", "자산관리 컨설턴트"], requiredFor: ["종합 재무설계", "자산관리 상담", "은퇴·상속 설계"],
    averagePrepWeeks: 20, officialUrl: "https://www.fpsbkorea.org", examFee: "과정 및 시험별 상이", passingStandard: "FPSB 인증 기준 충족"
  },
  {
    id: "securities-investment-advisor", industryId: "finance", name: "증권투자권유자문인력", issuer: "금융투자협회", level: "실무", type: "민간자격",
    summary: "증권 상품 투자권유와 고객 상담에 필요한 법규, 상품, 투자분석 지식을 검증합니다.",
    fitFor: ["증권사 영업 담당자", "금융상품 상담원", "투자상담 인력"], requiredFor: ["증권상품 설명", "투자권유 규정", "고객 상담"],
    averagePrepWeeks: 6, officialUrl: "https://license.kofia.or.kr", examFee: "50,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "fund-investment-advisor", industryId: "finance", name: "펀드투자권유자문인력", issuer: "금융투자협회", level: "실무", type: "민간자격",
    summary: "펀드 상품 구조, 투자권유 규정, 고객 적합성 원칙을 다루는 금융 영업 자격입니다.",
    fitFor: ["은행 창구 상담원", "펀드 판매 담당자", "금융 영업 담당자"], requiredFor: ["펀드상품 이해", "투자자 보호", "금융규정 준수"],
    averagePrepWeeks: 5, officialUrl: "https://license.kofia.or.kr", examFee: "50,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "derivatives-investment-advisor", industryId: "finance", name: "파생상품투자권유자문인력", issuer: "금융투자협회", level: "전문", type: "민간자격",
    summary: "파생상품 구조, 위험 설명, 투자권유 규정과 고객 적합성 판단 역량을 평가합니다.",
    fitFor: ["파생상품 영업 담당자", "PB", "리스크 관리 입문자"], requiredFor: ["파생상품 이해", "위험 설명", "투자권유 규정"],
    averagePrepWeeks: 7, officialUrl: "https://license.kofia.or.kr", examFee: "50,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "asset-management-specialist", industryId: "finance", name: "자산관리사", issuer: "한국금융연수원", level: "실무", type: "민간자격",
    summary: "개인 고객 자산관리, 세무, 부동산, 보험, 투자 상담 기초 역량을 검증합니다.",
    fitFor: ["은행 PB", "자산관리 상담원", "금융 영업 담당자"], requiredFor: ["개인 자산관리", "금융상품 상담", "재무설계 기초"],
    averagePrepWeeks: 8, officialUrl: "https://www.kbi.or.kr", examFee: "60,000원", passingStandard: "과목별 40점 이상, 평균 60점 이상"
  },
  {
    id: "social-worker-level2", industryId: "health", name: "사회복지사 2급", issuer: "한국사회복지사협회", level: "전문", type: "국가자격",
    summary: "사회복지 이론, 실습, 사례관리 기반의 복지 서비스 제공 역량을 인정하는 자격입니다.",
    fitFor: ["사회복지기관 종사자", "복지 행정 담당자", "돌봄 서비스 운영자"], requiredFor: ["사례관리", "복지 프로그램 운영", "사회복지 실천"],
    averagePrepWeeks: 16, officialUrl: "https://www.welfare.net", examFee: "과정 이수형", passingStandard: "관련 과목 및 실습 기준 충족"
  },
  {
    id: "dental-hygienist", industryId: "health", name: "치과위생사", issuer: "한국보건의료인국가시험원", level: "전문", type: "국가자격",
    summary: "구강보건 교육, 예방처치, 치과 진료 협조 역량을 검증하는 의료기사 자격입니다.",
    fitFor: ["치과위생사", "구강보건 담당자", "치과 진료 지원"], requiredFor: ["구강보건 관리", "예방처치", "진료 협조"],
    averagePrepWeeks: 12, officialUrl: "https://www.kuksiwon.or.kr", examFee: "국시원 공고 기준", passingStandard: "국가시험 합격 기준 충족"
  },
  {
    id: "emergency-medical-technician", industryId: "health", name: "응급구조사 1급", issuer: "한국보건의료인국가시험원", level: "전문", type: "국가자격",
    summary: "응급환자 평가, 처치, 이송과 현장 대응 역량을 검증하는 응급의료 자격입니다.",
    fitFor: ["응급구조사", "구급대원", "응급의료센터 실무자"], requiredFor: ["응급처치", "환자 이송", "현장 대응"],
    averagePrepWeeks: 12, officialUrl: "https://www.kuksiwon.or.kr", examFee: "국시원 공고 기준", passingStandard: "국가시험 합격 기준 충족"
  },
  {
    id: "architect-engineer", industryId: "construction", name: "건축기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "건축계획, 구조, 시공, 설비, 법규를 바탕으로 건축 실무 역량을 평가합니다.",
    fitFor: ["건축 시공 기술자", "건축 설계 보조", "공사관리 담당자"], requiredFor: ["건축 시공", "건축 구조", "건축 법규"],
    averagePrepWeeks: 12, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 22,600원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "urban-planning-engineer", industryId: "construction", name: "도시계획기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "도시계획, 토지이용, 교통, 환경과 도시 관련 법규 이해도를 검증합니다.",
    fitFor: ["도시계획 실무자", "공공개발 담당자", "부동산 개발 기획자"], requiredFor: ["도시계획 수립", "토지이용 분석", "개발 법규 이해"],
    averagePrepWeeks: 11, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 22,600원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "concrete-engineer", industryId: "construction", name: "콘크리트기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "콘크리트 재료, 배합, 품질시험과 구조물 유지관리 역량을 검증합니다.",
    fitFor: ["품질관리 담당자", "토목 시공 기술자", "건설재료 시험원"], requiredFor: ["콘크리트 품질관리", "재료 시험", "구조물 유지관리"],
    averagePrepWeeks: 9, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 22,600원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "traffic-engineer", industryId: "construction", name: "교통기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "교통계획, 교통공학, 교통안전과 도로 운영 분석 역량을 평가합니다.",
    fitFor: ["교통계획 담당자", "도로 운영 담당자", "교통 컨설턴트"], requiredFor: ["교통수요 분석", "도로 운영", "교통안전 관리"],
    averagePrepWeeks: 10, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 22,600원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "computerized-tax-level1", industryId: "business", name: "전산세무 1급", issuer: "한국세무사회", level: "전문", type: "국가공인",
    summary: "법인세, 소득세, 부가가치세와 회계 프로그램 활용 능력을 평가합니다.",
    fitFor: ["세무회계 담당자", "회계법인 사무원", "세무사무소 직원"], requiredFor: ["세무 신고", "회계 프로그램", "법인세 실무"],
    averagePrepWeeks: 12, officialUrl: "https://license.kacpta.or.kr", examFee: "30,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "computerized-tax-level2", industryId: "business", name: "전산세무 2급", issuer: "한국세무사회", level: "실무", type: "국가공인",
    summary: "부가가치세, 소득세, 원천징수와 회계 프로그램 활용 역량을 검증합니다.",
    fitFor: ["회계 사무원", "세무 사무원", "중소기업 경리 담당자"], requiredFor: ["부가세 신고", "원천징수", "전산 회계 처리"],
    averagePrepWeeks: 8, officialUrl: "https://license.kacpta.or.kr", examFee: "30,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "erp-production", industryId: "business", name: "ERP정보관리사 생산 2급", issuer: "한국생산성본부", level: "실무", type: "국가공인",
    summary: "생산계획, 자재, 공정, 원가 관리와 ERP 생산 모듈 활용 능력을 평가합니다.",
    fitFor: ["생산관리 담당자", "ERP 운영자", "제조 사무원"], requiredFor: ["생산계획", "자재관리", "ERP 생산 모듈"],
    averagePrepWeeks: 6, officialUrl: "https://license.kpc.or.kr", examFee: "37,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "erp-hr", industryId: "business", name: "ERP정보관리사 인사 2급", issuer: "한국생산성본부", level: "실무", type: "국가공인",
    summary: "인사관리, 급여, 근태, 조직 정보와 ERP 인사 모듈 운용 역량을 검증합니다.",
    fitFor: ["인사 담당자", "급여 담당자", "ERP 운영자"], requiredFor: ["인사정보 관리", "급여 처리", "ERP 인사 모듈"],
    averagePrepWeeks: 6, officialUrl: "https://license.kpc.or.kr", examFee: "37,000원", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "smat-service-management", industryId: "business", name: "SMAT 서비스경영자격", issuer: "한국생산성본부", level: "실무", type: "국가공인",
    summary: "서비스 현장 운영, 고객 응대, 비즈니스 매너와 서비스 품질 관리 역량을 평가합니다.",
    fitFor: ["고객센터 관리자", "서비스 운영 담당자", "영업 지원 담당자"], requiredFor: ["고객 응대", "서비스 품질관리", "현장 운영"],
    averagePrepWeeks: 5, officialUrl: "https://license.kpc.or.kr", examFee: "모듈별 상이", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "privacy-specialist", industryId: "legal", name: "개인정보보호사", issuer: "한국CPO포럼", level: "실무", type: "민간자격",
    summary: "개인정보보호 법규, 관리체계, 침해 대응과 내부 통제 실무 역량을 검증합니다.",
    fitFor: ["개인정보 담당자", "컴플라이언스 실무자", "정보보호 담당자"], requiredFor: ["개인정보 법규", "내부관리계획", "침해 대응"],
    averagePrepWeeks: 6, officialUrl: "https://www.cpoforum.or.kr", examFee: "기관 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "labor-consultant", industryId: "legal", name: "공인노무사", issuer: "한국산업인력공단", level: "고급", type: "국가자격",
    summary: "노동관계법, 인사노무관리, 노동분쟁 대응 전문성을 평가합니다.",
    fitFor: ["노무 컨설턴트", "인사노무 전문가", "노동분쟁 담당자"], requiredFor: ["노동법 자문", "인사노무 관리", "분쟁 조정"],
    averagePrepWeeks: 40, officialUrl: "https://www.q-net.or.kr", examFee: "큐넷 공고 기준", passingStandard: "1차, 2차, 면접 시험 기준 충족"
  },
  {
    id: "certified-legal-manager", industryId: "legal", name: "기업법무관리사", issuer: "한국기업법무협회", level: "전문", type: "민간자격",
    summary: "계약, 회사법, 지식재산, 분쟁관리 등 기업 법무 실무 역량을 검증합니다.",
    fitFor: ["법무팀 실무자", "계약 관리자", "컴플라이언스 담당자"], requiredFor: ["계약 검토", "기업 법무", "분쟁관리"],
    averagePrepWeeks: 10, officialUrl: "https://www.kcla.net", examFee: "기관 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "public-procurement-specialist", industryId: "public", name: "공공조달 실무교육 수료", issuer: "조달청", level: "실무", type: "민간자격",
    summary: "나라장터, 입찰, 계약, 공공조달 절차를 이해하는 구매·계약 실무 인증입니다.",
    fitFor: ["공공기관 계약 담당자", "입찰 담당자", "구매 담당자"], requiredFor: ["공공입찰 이해", "계약 절차", "나라장터 활용"],
    averagePrepWeeks: 3, officialUrl: "https://hrd.pps.go.kr", examFee: "과정별 상이", passingStandard: "교육 과정 이수 기준 충족"
  },
  {
    id: "archives-management-specialist", industryId: "public", name: "기록물관리 전문요원", issuer: "국가기록원", level: "전문", type: "국가자격",
    summary: "공공기록물 평가, 정리, 보존, 공개와 기록관리 체계 운영 역량을 인정합니다.",
    fitFor: ["기록물관리 담당자", "공공기관 행정 담당자", "아카이브 운영자"], requiredFor: ["기록물 평가", "보존 관리", "공공기록 법규"],
    averagePrepWeeks: 16, officialUrl: "https://www.archives.go.kr", examFee: "자격 기준별 상이", passingStandard: "관련 학위·과정·시험 기준 충족"
  },
  {
    id: "six-sigma-green-belt", industryId: "manufacturing", name: "Six Sigma Green Belt", issuer: "한국표준협회 등", level: "실무", type: "민간자격",
    summary: "공정 개선, 품질 데이터 분석, 문제 해결 방법론을 활용하는 제조 품질 자격입니다.",
    fitFor: ["품질관리 담당자", "공정개선 담당자", "생산관리자"], requiredFor: ["품질 개선", "통계적 문제해결", "공정 분석"],
    averagePrepWeeks: 6, officialUrl: "https://www.ksa.or.kr", examFee: "기관별 상이", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "six-sigma-black-belt", industryId: "manufacturing", name: "Six Sigma Black Belt", issuer: "한국표준협회 등", level: "고급", type: "민간자격",
    summary: "전사 품질 혁신 프로젝트를 이끌 수 있는 고급 통계 분석과 개선 리더십을 인증합니다.",
    fitFor: ["품질 혁신 리더", "공정개선 전문가", "제조 컨설턴트"], requiredFor: ["개선 프로젝트 리딩", "고급 통계 분석", "품질 전략"],
    averagePrepWeeks: 12, officialUrl: "https://www.ksa.or.kr", examFee: "기관별 상이", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "industrial-engineer", industryId: "manufacturing", name: "일반기계기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "기계재료, 열·유체, 기계설계와 제작법 등 기계 공학 실무 역량을 검증합니다.",
    fitFor: ["기계 설계자", "설비 엔지니어", "제조 기술자"], requiredFor: ["기계 설계", "설비 이해", "제작 공정"],
    averagePrepWeeks: 12, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 43,400원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "mechatronics-engineer", industryId: "manufacturing", name: "메카트로닉스기사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "기계, 전기전자, 제어, 자동화를 융합한 제조 설비 기술 역량을 평가합니다.",
    fitFor: ["자동화 설비 엔지니어", "스마트팩토리 담당자", "제어 기술자"], requiredFor: ["자동화 제어", "기계·전기 융합", "설비 진단"],
    averagePrepWeeks: 11, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 22,600원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "semiconductor-equipment-maintenance", industryId: "manufacturing", name: "반도체설비보전기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "반도체 제조 설비 점검, 유지보수, 안전관리 기초 역량을 평가합니다.",
    fitFor: ["반도체 설비 오퍼레이터", "설비보전 담당자", "제조 현장 기술자"], requiredFor: ["설비 점검", "예방보전", "반도체 공정 이해"],
    averagePrepWeeks: 7, officialUrl: "https://www.q-net.or.kr", examFee: "필기 14,500원 / 실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "renewable-energy-industrial", industryId: "energy", name: "신재생에너지발전설비산업기사", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "태양광 등 신재생 발전설비 설계, 시공, 운영과 안전관리 실무를 검증합니다.",
    fitFor: ["신재생 설비 담당자", "전기 시공 실무자", "에너지 운영자"], requiredFor: ["발전설비 운영", "전기 안전", "신재생 설비 시공"],
    averagePrepWeeks: 9, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 20,800원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "electric-industrial-engineer", industryId: "energy", name: "전기산업기사", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "전기설비, 회로, 전력공학과 전기기기 운영 실무 역량을 평가합니다.",
    fitFor: ["전기설비 운영자", "시설관리 담당자", "전기공사 실무자"], requiredFor: ["전기설비 관리", "회로 이해", "전기 안전"],
    averagePrepWeeks: 10, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 20,800원", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "video-editing-specialist", industryId: "media", name: "영상편집전문인", issuer: "민간 자격 시행기관", level: "실무", type: "민간자격",
    summary: "디지털 영상 편집, 색보정, 자막, 사운드와 콘텐츠 후반 제작 역량을 평가합니다.",
    fitFor: ["영상 편집자", "콘텐츠 제작자", "마케팅 영상 담당자"], requiredFor: ["영상 편집", "후반 제작", "콘텐츠 품질관리"],
    averagePrepWeeks: 6, officialUrl: "https://www.pqi.or.kr", examFee: "기관별 상이", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "adobe-premiere-professional", industryId: "media", name: "Adobe Certified Professional Premiere Pro", issuer: "Adobe", level: "실무", type: "국제자격",
    summary: "Premiere Pro 기반 영상 편집, 프로젝트 관리, 출력 워크플로 역량을 인증합니다.",
    fitFor: ["영상 편집자", "콘텐츠 크리에이터", "소셜 미디어 제작자"], requiredFor: ["영상 편집", "타임라인 관리", "영상 출력"],
    averagePrepWeeks: 6, officialUrl: "https://certifiedprofessional.adobe.com", examFee: "시험센터별 상이", passingStandard: "Adobe 인증시험 기준 충족"
  },
  {
    id: "tourism-interpreter-guide", industryId: "hospitality", name: "관광통역안내사", issuer: "한국산업인력공단", level: "전문", type: "국가자격",
    summary: "외국어 안내, 관광자원, 관광법규와 한국 문화 설명 역량을 검증합니다.",
    fitFor: ["관광 가이드", "여행사 담당자", "문화관광 해설 인력"], requiredFor: ["관광 안내", "외국어 설명", "관광 법규"],
    averagePrepWeeks: 12, officialUrl: "https://www.q-net.or.kr", examFee: "큐넷 공고 기준", passingStandard: "필기, 외국어, 면접 기준 충족"
  },
  {
    id: "hotel-service-specialist", industryId: "hospitality", name: "호텔서비스사", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "호텔 객실, 식음, 고객 응대, 서비스 매너와 관광 서비스 기초 역량을 평가합니다.",
    fitFor: ["호텔 서비스 직원", "리조트 운영 담당자", "관광 서비스 담당자"], requiredFor: ["고객 응대", "호텔 서비스", "서비스 매너"],
    averagePrepWeeks: 6, officialUrl: "https://www.q-net.or.kr", examFee: "큐넷 공고 기준", passingStandard: "필기 및 면접 기준 충족"
  },
  {
    id: "convention-planner", industryId: "hospitality", name: "컨벤션기획사 2급", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "전시, 회의, 이벤트 기획과 운영, 예산, 마케팅 실무 역량을 검증합니다.",
    fitFor: ["MICE 기획자", "행사 운영 담당자", "전시 컨벤션 실무자"], requiredFor: ["행사 기획", "컨벤션 운영", "예산·마케팅"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "toeic-listening-reading", industryId: "business", name: "TOEIC Listening & Reading", issuer: "ETS", level: "입문", type: "국제자격",
    summary: "비즈니스 영어 독해와 청해 능력을 객관식 시험으로 측정하는 대표 취업 어학 시험입니다.",
    fitFor: ["대기업 지원자", "공기업 지원자", "해외영업 지원자"], requiredFor: ["비즈니스 영어 이해", "공문서 독해", "기초 어학 역량"],
    averagePrepWeeks: 8, officialUrl: "https://www.toeic.co.kr", examFee: "정기접수 기준 공고 확인", passingStandard: "990점 만점 점수제"
  },
  {
    id: "toeic-speaking", industryId: "business", name: "TOEIC Speaking", issuer: "ETS", level: "실무", type: "국제자격",
    summary: "업무 상황에서의 영어 말하기, 의견 제시, 자료 설명 능력을 평가하는 스피킹 시험입니다.",
    fitFor: ["해외영업 지원자", "항공·호텔 지원자", "글로벌 직무 지원자"], requiredFor: ["영어 말하기", "자료 설명", "업무 커뮤니케이션"],
    averagePrepWeeks: 5, officialUrl: "https://www.toeicswt.co.kr", examFee: "정기접수 기준 공고 확인", passingStandard: "200점 만점 점수제"
  },
  {
    id: "opic-english", industryId: "business", name: "OPIc 영어", issuer: "ACTFL", level: "실무", type: "국제자격",
    summary: "상황별 영어 회화 능력과 즉흥적 의사소통 역량을 등급으로 평가하는 어학 시험입니다.",
    fitFor: ["대기업 지원자", "외국계 기업 지원자", "서비스 직무 지원자"], requiredFor: ["영어 회화", "상황 대응", "업무 커뮤니케이션"],
    averagePrepWeeks: 5, officialUrl: "https://www.opic.or.kr", examFee: "시험 공고 기준", passingStandard: "Novice부터 Advanced Low까지 등급제"
  },
  {
    id: "ielts-academic", industryId: "education", name: "IELTS Academic", issuer: "British Council·IDP·Cambridge", level: "전문", type: "국제자격",
    summary: "유학, 글로벌 인턴십, 해외 취업에서 활용되는 영어 읽기, 듣기, 쓰기, 말하기 시험입니다.",
    fitFor: ["해외 대학원 지원자", "글로벌 인턴 지원자", "외국계 지원자"], requiredFor: ["학술 영어", "영어 작문", "영어 인터뷰"],
    averagePrepWeeks: 12, officialUrl: "https://ieltskorea.org", examFee: "시험 유형별 상이", passingStandard: "9.0 밴드 점수제"
  },
  {
    id: "toefl-ibt", industryId: "education", name: "TOEFL iBT", issuer: "ETS", level: "전문", type: "국제자격",
    summary: "해외 대학, 교환학생, 글로벌 프로그램 지원에 쓰이는 학술 영어 능력 시험입니다.",
    fitFor: ["유학 준비생", "교환학생 지원자", "국제기구 인턴 지원자"], requiredFor: ["학술 독해", "영어 발표", "영어 작문"],
    averagePrepWeeks: 12, officialUrl: "https://www.ets.org/toefl", examFee: "국가별 상이", passingStandard: "120점 만점 점수제"
  },
  {
    id: "jlpt-n2", industryId: "business", name: "JLPT N2", issuer: "일본국제교류기금·일본국제교육지원협회", level: "실무", type: "국제자격",
    summary: "일본어 독해, 청해, 어휘 능력을 검증하는 취업 활용도가 높은 중상급 일본어 시험입니다.",
    fitFor: ["일본계 기업 지원자", "무역 사무원", "관광 서비스 지원자"], requiredFor: ["일본어 독해", "일본어 청해", "비즈니스 일본어 기초"],
    averagePrepWeeks: 14, officialUrl: "https://www.jlpt.jp", examFee: "시험지역별 상이", passingStandard: "180점 만점 중 등급별 기준 충족"
  },
  {
    id: "jpt", industryId: "business", name: "JPT", issuer: "YBM", level: "실무", type: "민간자격",
    summary: "실무 일본어 청해와 독해 능력을 점수로 평가해 일본계·무역 직무에서 활용됩니다.",
    fitFor: ["일본계 기업 지원자", "무역 사무원", "항공·관광 지원자"], requiredFor: ["일본어 청해", "일본어 독해", "비즈니스 일본어"],
    averagePrepWeeks: 8, officialUrl: "https://www.jpt.co.kr", examFee: "정기접수 기준 공고 확인", passingStandard: "990점 만점 점수제"
  },
  {
    id: "hsk-level5", industryId: "business", name: "HSK 5급", issuer: "중국교육부 중외언어교류협력센터", level: "실무", type: "국제자격",
    summary: "중국어 독해, 듣기, 쓰기 능력을 평가하는 중국어 대표 시험의 중상급 단계입니다.",
    fitFor: ["중국계 기업 지원자", "해외영업 지원자", "무역 사무원"], requiredFor: ["중국어 독해", "중국어 작문", "비즈니스 중국어"],
    averagePrepWeeks: 14, officialUrl: "https://www.hsk.or.kr", examFee: "급수별 상이", passingStandard: "300점 만점 점수제"
  },
  {
    id: "kbs-korean-language", industryId: "media", name: "KBS 한국어능력시험", issuer: "KBS한국어진흥원", level: "실무", type: "민간자격",
    summary: "국어 사용 능력, 문법, 이해, 표현 역량을 평가해 언론·공기업 지원에서 활용됩니다.",
    fitFor: ["언론사 지원자", "공기업 지원자", "홍보 직무 지원자"], requiredFor: ["국어 문법", "문서 이해", "표현 능력"],
    averagePrepWeeks: 6, officialUrl: "https://www.klt.or.kr", examFee: "시험 공고 기준", passingStandard: "등급제"
  },
  {
    id: "korean-history-advanced", industryId: "public", name: "한국사능력검정시험 심화", issuer: "국사편찬위원회", level: "입문", type: "국가자격",
    summary: "한국사 지식과 역사적 사고력을 평가하며 공기업, 공무원, 교원 임용 준비에 폭넓게 활용됩니다.",
    fitFor: ["공기업 지원자", "공무원 준비생", "교원 임용 준비생"], requiredFor: ["한국사 이해", "공공기관 가산점", "역사 자료 해석"],
    averagePrepWeeks: 5, officialUrl: "https://www.historyexam.go.kr", examFee: "급수별 상이", passingStandard: "심화 1·2·3급 등급제"
  },
  {
    id: "mos-excel-expert", industryId: "business", name: "MOS Excel Expert", issuer: "Microsoft", level: "실무", type: "국제자격",
    summary: "Excel 고급 함수, 데이터 분석, 피벗, 문서 자동화 등 사무 실무 역량을 인증합니다.",
    fitFor: ["사무직 지원자", "영업관리 지원자", "데이터 보조 담당자"], requiredFor: ["스프레드시트 활용", "데이터 정리", "보고서 작성"],
    averagePrepWeeks: 4, officialUrl: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview", examFee: "시험센터별 상이", passingStandard: "Microsoft 인증 기준 충족"
  },
  {
    id: "mos-powerpoint", industryId: "business", name: "MOS PowerPoint", issuer: "Microsoft", level: "입문", type: "국제자격",
    summary: "프레젠테이션 작성, 슬라이드 디자인, 도표 구성과 발표 자료 제작 역량을 인증합니다.",
    fitFor: ["기획 직무 지원자", "영업 지원자", "마케팅 지원자"], requiredFor: ["발표자료 제작", "문서 시각화", "프레젠테이션 구성"],
    averagePrepWeeks: 3, officialUrl: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview", examFee: "시험센터별 상이", passingStandard: "Microsoft 인증 기준 충족"
  },
  {
    id: "mos-word", industryId: "business", name: "MOS Word", issuer: "Microsoft", level: "입문", type: "국제자격",
    summary: "Word 문서 작성, 서식, 표, 참조 기능을 활용한 업무 문서 작성 능력을 인증합니다.",
    fitFor: ["사무직 지원자", "행정 지원자", "비서 직무 지원자"], requiredFor: ["문서 작성", "서식 관리", "보고서 편집"],
    averagePrepWeeks: 3, officialUrl: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview", examFee: "시험센터별 상이", passingStandard: "Microsoft 인증 기준 충족"
  },
  {
    id: "itq-excel", industryId: "business", name: "ITQ Excel", issuer: "한국생산성본부", level: "입문", type: "국가공인",
    summary: "엑셀 표 계산, 함수, 차트, 데이터 관리 능력을 평가하는 사무 자동화 입문 자격입니다.",
    fitFor: ["사무보조 지원자", "경영지원 지원자", "공기업 체험형 인턴"], requiredFor: ["엑셀 함수", "표 계산", "데이터 정리"],
    averagePrepWeeks: 4, officialUrl: "https://license.kpc.or.kr", examFee: "과목별 공고 기준", passingStandard: "A·B·C 등급제"
  },
  {
    id: "itq-hwp", industryId: "business", name: "ITQ 한글", issuer: "한국생산성본부", level: "입문", type: "국가공인",
    summary: "한글 문서 편집, 표 작성, 공문서 서식 구성 능력을 평가하는 문서 실무 자격입니다.",
    fitFor: ["행정 지원자", "공공기관 인턴", "사무보조 지원자"], requiredFor: ["한글 문서 작성", "공문서 편집", "표 구성"],
    averagePrepWeeks: 4, officialUrl: "https://license.kpc.or.kr", examFee: "과목별 공고 기준", passingStandard: "A·B·C 등급제"
  },
  {
    id: "itq-powerpoint", industryId: "business", name: "ITQ PowerPoint", issuer: "한국생산성본부", level: "입문", type: "국가공인",
    summary: "파워포인트 슬라이드 제작, 도형, 차트, 발표 자료 구성 능력을 평가합니다.",
    fitFor: ["기획 지원자", "영업 지원자", "교육 운영 지원자"], requiredFor: ["슬라이드 제작", "자료 시각화", "발표 문서 작성"],
    averagePrepWeeks: 4, officialUrl: "https://license.kpc.or.kr", examFee: "과목별 공고 기준", passingStandard: "A·B·C 등급제"
  },
  {
    id: "tat-accounting-level2", industryId: "business", name: "TAT 2급", issuer: "한국공인회계사회", level: "실무", type: "민간자격",
    summary: "더존 등 회계 프로그램 기반 재무회계, 부가세, 원천세 실무 능력을 평가합니다.",
    fitFor: ["회계 사무원", "세무 사무원", "경리 담당자"], requiredFor: ["회계 프로그램", "부가세 처리", "원천세 처리"],
    averagePrepWeeks: 7, officialUrl: "https://at.kicpa.or.kr", examFee: "시험 공고 기준", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "tat-accounting-level1", industryId: "business", name: "TAT 1급", issuer: "한국공인회계사회", level: "전문", type: "민간자격",
    summary: "법인세, 결산, 세무조정과 회계 프로그램 고급 실무 역량을 검증합니다.",
    fitFor: ["세무회계 담당자", "회계법인 지원자", "세무사무소 직원"], requiredFor: ["법인세 실무", "결산 처리", "세무조정"],
    averagePrepWeeks: 10, officialUrl: "https://at.kicpa.or.kr", examFee: "시험 공고 기준", passingStandard: "100점 만점 70점 이상"
  },
  {
    id: "ifrs-manager", industryId: "business", name: "IFRS관리사", issuer: "한국CFO협회", level: "전문", type: "민간자격",
    summary: "국제회계기준 기반 재무제표 작성, 회계처리, 공시 이해도를 검증합니다.",
    fitFor: ["회계 담당자", "재무팀 지원자", "회계법인 지원자"], requiredFor: ["IFRS 이해", "재무제표 작성", "회계 기준 적용"],
    averagePrepWeeks: 8, officialUrl: "https://www.cfoi.kr", examFee: "시험 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "tesat-level2", industryId: "finance", name: "TESAT", issuer: "한국경제신문", level: "실무", type: "민간자격",
    summary: "경제이론, 시사경제, 상황판단 능력을 평가해 금융권과 공기업 경제상식 준비에 활용됩니다.",
    fitFor: ["금융권 지원자", "공기업 지원자", "기획 직무 지원자"], requiredFor: ["경제상식", "시사 이해", "경제 의사결정"],
    averagePrepWeeks: 6, officialUrl: "https://www.tesat.or.kr", examFee: "시험 공고 기준", passingStandard: "등급제"
  },
  {
    id: "maekyung-test", industryId: "finance", name: "매경TEST", issuer: "매일경제신문", level: "실무", type: "민간자격",
    summary: "경제·경영 이해력과 시사 기반 의사결정 능력을 평가하는 취업 경제경영 시험입니다.",
    fitFor: ["금융권 지원자", "경영지원 지원자", "공기업 지원자"], requiredFor: ["경영 이해", "경제상식", "시사 판단"],
    averagePrepWeeks: 6, officialUrl: "https://exam.mk.co.kr", examFee: "시험 공고 기준", passingStandard: "등급제"
  },
  {
    id: "credit-manager", industryId: "finance", name: "신용관리사", issuer: "신용정보협회", level: "실무", type: "민간자격",
    summary: "채권관리, 신용정보, 여신관리와 신용 리스크 기초 역량을 평가합니다.",
    fitFor: ["금융 사무원", "채권관리 담당자", "여신 지원 담당자"], requiredFor: ["채권관리", "신용정보 이해", "여신 기초"],
    averagePrepWeeks: 8, officialUrl: "https://www.cica.or.kr", examFee: "시험 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "bank-teller", industryId: "finance", name: "은행텔러", issuer: "한국금융연수원", level: "입문", type: "민간자격",
    summary: "은행 창구 업무, 금융상품 기초, 고객 응대와 금융 규정 이해도를 평가합니다.",
    fitFor: ["은행권 지원자", "금융 창구 담당자", "고객 상담원"], requiredFor: ["창구 업무", "금융상품 기초", "고객 응대"],
    averagePrepWeeks: 6, officialUrl: "https://www.kbi.or.kr", examFee: "시험 공고 기준", passingStandard: "과목별 기준 충족"
  },
  {
    id: "linux-master-level2", industryId: "it", name: "리눅스마스터 2급", issuer: "한국정보통신진흥협회", level: "입문", type: "국가공인",
    summary: "리눅스 운영체제 명령어, 파일 시스템, 네트워크와 서버 운영 기초를 평가합니다.",
    fitFor: ["서버 운영 입문자", "인프라 지원자", "보안 입문자"], requiredFor: ["리눅스 명령어", "서버 운영", "네트워크 기초"],
    averagePrepWeeks: 6, officialUrl: "https://www.ihd.or.kr", examFee: "급수별 상이", passingStandard: "시험 기준 충족"
  },
  {
    id: "network-manager-level2", industryId: "it", name: "네트워크관리사 2급", issuer: "한국정보통신자격협회", level: "입문", type: "국가공인",
    summary: "TCP/IP, 네트워크 장비, 서버 설정과 네트워크 장애 대응 기초 역량을 평가합니다.",
    fitFor: ["네트워크 엔지니어 입문자", "전산 지원자", "인프라 운영자"], requiredFor: ["네트워크 기초", "장비 설정", "장애 대응"],
    averagePrepWeeks: 6, officialUrl: "https://www.icqa.or.kr", examFee: "급수별 상이", passingStandard: "필기·실기 기준 충족"
  },
  {
    id: "pc-maintenance-level2", industryId: "it", name: "PC정비사 2급", issuer: "한국정보통신자격협회", level: "입문", type: "민간자격",
    summary: "PC 하드웨어, 운영체제, 주변기기, 장애 진단과 유지보수 능력을 평가합니다.",
    fitFor: ["IT 헬프데스크", "전산 지원자", "PC 유지보수 담당자"], requiredFor: ["PC 정비", "장애 진단", "운영체제 설치"],
    averagePrepWeeks: 5, officialUrl: "https://www.icqa.or.kr", examFee: "급수별 상이", passingStandard: "필기·실기 기준 충족"
  },
  {
    id: "coding-specialist-level2", industryId: "it", name: "COS Pro 2급", issuer: "YBM", level: "입문", type: "민간자격",
    summary: "프로그래밍 문법, 알고리즘 사고, 문제 해결 능력을 실기형으로 평가하는 코딩 자격입니다.",
    fitFor: ["개발 직무 준비생", "비전공 개발 입문자", "SW 교육 이수자"], requiredFor: ["코딩 기초", "알고리즘 사고", "문제 해결"],
    averagePrepWeeks: 8, officialUrl: "https://www.ybmit.com", examFee: "시험 공고 기준", passingStandard: "급수별 기준 충족"
  },
  {
    id: "information-processing-industrial", industryId: "it", name: "정보처리산업기사", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "소프트웨어 개발, 데이터베이스, 시스템 분석과 정보처리 실무 능력을 평가합니다.",
    fitFor: ["개발 직무 지원자", "전산직 지원자", "SI 입문자"], requiredFor: ["소프트웨어 개발", "DB 활용", "시스템 분석"],
    averagePrepWeeks: 10, officialUrl: "https://www.q-net.or.kr", examFee: "필기 19,400원 / 실기 공고 기준", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "cs-leaders", industryId: "business", name: "CS Leaders 관리사", issuer: "한국정보평가협회", level: "실무", type: "민간자격",
    summary: "고객만족, 서비스 품질, 고객 응대와 조직 내 CS 운영 역량을 평가합니다.",
    fitFor: ["고객지원 지원자", "서비스 운영자", "영업지원 담당자"], requiredFor: ["고객 응대", "서비스 품질", "CS 운영"],
    averagePrepWeeks: 5, officialUrl: "https://www.kie.or.kr", examFee: "시험 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "secretary-level2", industryId: "business", name: "비서 2급", issuer: "대한상공회의소", level: "실무", type: "국가공인",
    summary: "일정 관리, 문서관리, 의전, 커뮤니케이션 등 비서·사무 지원 역량을 평가합니다.",
    fitFor: ["비서직 지원자", "총무 지원자", "임원지원 담당자"], requiredFor: ["일정 관리", "문서 관리", "의전 실무"],
    averagePrepWeeks: 6, officialUrl: "https://license.korcham.net", examFee: "시험 공고 기준", passingStandard: "과목별 기준 충족"
  },
  {
    id: "consumer-specialist", industryId: "business", name: "소비자전문상담사 2급", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "소비자 상담, 피해구제, 소비자 법규와 고객 커뮤니케이션 역량을 평가합니다.",
    fitFor: ["고객센터 지원자", "소비자 상담원", "서비스 운영 담당자"], requiredFor: ["소비자 상담", "분쟁 대응", "고객 커뮤니케이션"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "social-research-analyst-level2", industryId: "business", name: "사회조사분석사 2급", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "설문 설계, 통계 분석, 조사 보고서 작성 역량을 평가해 기획·마케팅 직무에서 활용됩니다.",
    fitFor: ["마케팅 리서처", "기획 지원자", "공공조사 담당자"], requiredFor: ["설문 설계", "통계 분석", "보고서 작성"],
    averagePrepWeeks: 9, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "project-management-associate", industryId: "business", name: "프로젝트경영사 2급", issuer: "한국프로젝트경영협회", level: "실무", type: "민간자격",
    summary: "프로젝트 일정, 범위, 원가, 리스크 관리와 협업 운영 기초 역량을 평가합니다.",
    fitFor: ["PMO 지원자", "기획 직무 지원자", "운영관리 담당자"], requiredFor: ["일정 관리", "리스크 관리", "프로젝트 문서화"],
    averagePrepWeeks: 6, officialUrl: "https://www.pmak.or.kr", examFee: "시험 공고 기준", passingStandard: "시행기관 합격 기준 충족"
  },
  {
    id: "gtq-graphic-technology", industryId: "design", name: "GTQ 그래픽기술자격 2급", issuer: "한국생산성본부", level: "입문", type: "국가공인",
    summary: "포토샵 기반 이미지 보정, 합성, 편집물 제작 능력을 평가하는 디자인 입문 자격입니다.",
    fitFor: ["마케팅 디자인 지원자", "콘텐츠 제작자", "디자인 입문자"], requiredFor: ["이미지 편집", "그래픽 제작", "콘텐츠 디자인"],
    averagePrepWeeks: 4, officialUrl: "https://license.kpc.or.kr", examFee: "등급별 상이", passingStandard: "100점 만점 60점 이상"
  },
  {
    id: "colorist-industrial", industryId: "design", name: "컬러리스트산업기사", issuer: "한국산업인력공단", level: "실무", type: "국가자격",
    summary: "색채 계획, 배색, 색채 심리와 제품·콘텐츠 색채 적용 능력을 평가합니다.",
    fitFor: ["디자인 지원자", "브랜드 마케터", "제품기획 지원자"], requiredFor: ["색채 계획", "배색", "브랜드 색상 관리"],
    averagePrepWeeks: 9, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 평균 60점, 실기 60점 이상"
  },
  {
    id: "acsm-cpt", industryId: "health", name: "ACSM Certified Personal Trainer", issuer: "ACSM", level: "실무", type: "국제자격",
    summary: "운동처방, 체력 평가, 고객 운동지도 역량을 인증하는 피트니스 분야 국제 자격입니다.",
    fitFor: ["퍼스널 트레이너", "헬스케어 서비스 지원자", "운동처방 입문자"], requiredFor: ["운동 지도", "체력 평가", "건강관리 상담"],
    averagePrepWeeks: 10, officialUrl: "https://www.acsm.org/certification", examFee: "회원 여부별 상이", passingStandard: "ACSM 인증 기준 충족"
  },
  {
    id: "first-aid-provider", industryId: "health", name: "응급처치 일반과정 수료", issuer: "대한적십자사", level: "입문", type: "민간자격",
    summary: "심폐소생술, 자동심장충격기, 기본 응급처치 절차를 익히는 안전·서비스 직무 보완 인증입니다.",
    fitFor: ["서비스 직무 지원자", "교육 보조", "현장 안전 담당자"], requiredFor: ["심폐소생술", "응급 상황 대응", "안전관리 기초"],
    averagePrepWeeks: 1, officialUrl: "https://www.redcross.or.kr", examFee: "과정별 상이", passingStandard: "교육 과정 이수 기준 충족"
  },
  {
    id: "sports-instructor-level2", industryId: "health", name: "생활스포츠지도사 2급", issuer: "국민체육진흥공단", level: "실무", type: "국가자격",
    summary: "생활체육 지도, 운동 프로그램 운영, 안전관리 능력을 평가하는 체육 분야 국가자격입니다.",
    fitFor: ["스포츠 강사", "체육시설 운영자", "헬스케어 서비스 지원자"], requiredFor: ["운동 지도", "프로그램 운영", "체육 안전"],
    averagePrepWeeks: 10, officialUrl: "https://sqms.kspo.or.kr", examFee: "시험 공고 기준", passingStandard: "필기·실기·구술 기준 충족"
  },
  {
    id: "caregiver-certificate", industryId: "health", name: "요양보호사", issuer: "한국보건의료인국가시험원", level: "입문", type: "국가자격",
    summary: "노인 돌봄, 신체활동 지원, 일상생활 지원과 요양 서비스 기본 역량을 평가합니다.",
    fitFor: ["요양기관 종사자", "돌봄 서비스 지원자", "복지 현장 입문자"], requiredFor: ["돌봄 서비스", "일상생활 지원", "노인 이해"],
    averagePrepWeeks: 8, officialUrl: "https://www.kuksiwon.or.kr", examFee: "국시원 공고 기준", passingStandard: "국가시험 합격 기준 충족"
  },
  {
    id: "fire-safety-manager-level2", industryId: "construction", name: "소방안전관리자 2급", issuer: "한국소방안전원", level: "입문", type: "국가자격",
    summary: "건축물 소방안전관리, 피난, 소방시설 점검과 초기 대응 능력을 확인합니다.",
    fitFor: ["시설관리 지원자", "안전관리 보조", "총무 담당자"], requiredFor: ["소방안전관리", "시설 점검", "피난 대응"],
    averagePrepWeeks: 3, officialUrl: "https://www.kfsi.or.kr", examFee: "교육·시험 공고 기준", passingStandard: "교육 및 시험 기준 충족"
  },
  {
    id: "hazardous-materials-functional", industryId: "construction", name: "위험물기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "위험물 성질, 취급, 저장, 안전관리 기초 역량을 평가하는 산업 현장 입문 자격입니다.",
    fitFor: ["화학 제조 지원자", "안전관리 보조", "시설관리 담당자"], requiredFor: ["위험물 취급", "저장 관리", "안전 법규"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "forklift-operator", industryId: "manufacturing", name: "지게차운전기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "물류·제조 현장에서 지게차 운전, 안전 점검, 하역 작업 역량을 평가합니다.",
    fitFor: ["물류센터 지원자", "제조 현장 지원자", "창고관리 담당자"], requiredFor: ["지게차 운전", "하역 작업", "장비 안전점검"],
    averagePrepWeeks: 4, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "welding-functional", industryId: "manufacturing", name: "용접기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "용접 재료, 장비, 도면 이해와 기본 용접 작업 능력을 평가하는 제조 현장 자격입니다.",
    fitFor: ["제조 현장 지원자", "설비 제작 지원자", "정비 보조"], requiredFor: ["용접 작업", "도면 이해", "작업 안전"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "computer-aided-mechanical-drawing", industryId: "manufacturing", name: "전산응용기계제도기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "CAD를 활용한 기계 도면 작성, 치수 기입, 투상도 이해 능력을 평가합니다.",
    fitFor: ["CAD 설계 보조", "제조 설계 지원자", "기계 도면 담당자"], requiredFor: ["기계 도면", "CAD 활용", "제도 규격"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "electronic-cad-functional", industryId: "manufacturing", name: "전자캐드기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "전자회로 도면 작성, PCB 설계 기초와 전자 CAD 활용 능력을 평가합니다.",
    fitFor: ["전자 설계 보조", "제조 기술 지원자", "하드웨어 입문자"], requiredFor: ["전자회로 도면", "PCB 기초", "CAD 활용"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "electric-functional", industryId: "energy", name: "전기기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "전기 설비 배선, 기초 회로, 전기 안전과 설비 시공 기초 역량을 평가합니다.",
    fitFor: ["시설관리 지원자", "전기공사 보조", "제조 설비 지원자"], requiredFor: ["전기 배선", "전기 안전", "설비 시공 기초"],
    averagePrepWeeks: 10, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "energy-management-functional", industryId: "energy", name: "에너지관리기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "보일러, 열설비, 에너지 설비 운전과 안전관리 기초 역량을 평가합니다.",
    fitFor: ["시설관리 지원자", "설비 운영 보조", "에너지 현장 입문자"], requiredFor: ["열설비 운전", "보일러 관리", "에너지 안전"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "craftsman-cook-western", industryId: "hospitality", name: "양식조리기능사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "양식 조리 재료 손질, 조리법, 위생관리와 메뉴 완성도를 평가합니다.",
    fitFor: ["외식업 지원자", "호텔 조리 지원자", "급식 조리원"], requiredFor: ["양식 조리", "위생 관리", "메뉴 조리"],
    averagePrepWeeks: 6, officialUrl: "https://www.q-net.or.kr", examFee: "필기·실기 공고 기준", passingStandard: "필기 60점, 실기 60점 이상"
  },
  {
    id: "coffee-barista-level1", industryId: "hospitality", name: "바리스타 1급", issuer: "한국커피협회", level: "실무", type: "민간자격",
    summary: "에스프레소 추출, 라떼아트, 커피 감별과 카페 운영 실무 능력을 평가합니다.",
    fitFor: ["카페 매니저", "식음료 서비스 지원자", "외식 창업 준비자"], requiredFor: ["커피 추출", "라떼아트", "매장 서비스"],
    averagePrepWeeks: 6, officialUrl: "https://www.kca-coffee.org", examFee: "필기·실기 공고 기준", passingStandard: "필기·실기 평가 기준 충족"
  },
  {
    id: "domestic-travel-guide", industryId: "hospitality", name: "국내여행안내사", issuer: "한국산업인력공단", level: "입문", type: "국가자격",
    summary: "국내 관광자원, 관광법규, 안내 실무와 고객 응대 역량을 평가합니다.",
    fitFor: ["여행사 지원자", "관광 안내원", "지역관광 운영자"], requiredFor: ["관광 안내", "국내 관광자원", "고객 응대"],
    averagePrepWeeks: 8, officialUrl: "https://www.q-net.or.kr", examFee: "큐넷 공고 기준", passingStandard: "필기 및 면접 기준 충족"
  }
];

industries.push(
  {
    id: "finance",
    name: "금융·보험",
    tagline: "투자, 신용, 보험, 리스크 분석 역량",
    description: "금융상품 상담, 투자분석, 보험설계, 리스크 관리와 재무 데이터 직무에 필요한 자격을 모았습니다."
  },
  {
    id: "education",
    name: "교육·상담",
    tagline: "학습 설계, 상담, 평생교육 운영",
    description: "교육 콘텐츠 기획, 직업상담, 평생교육, 학습 코칭과 에듀테크 운영에 연결되는 자격을 정리했습니다."
  },
  {
    id: "legal",
    name: "법무·컴플라이언스",
    tagline: "계약, 개인정보, 지식재산, 규정 관리",
    description: "조직의 법적 리스크를 줄이고 계약·개인정보·노무·지식재산 업무를 지원하는 자격을 살펴봅니다."
  },
  {
    id: "public",
    name: "공공·행정",
    tagline: "정책, 행정, 기록, 공공 데이터 실무",
    description: "공공기관 행정, 정책 자료 분석, 기록물 관리, 행정 문서 업무에 도움이 되는 자격을 모았습니다."
  },
  {
    id: "manufacturing",
    name: "제조·품질",
    tagline: "생산, 품질, 자동화, 설비 개선",
    description: "스마트팩토리, 품질관리, 기계설비, CAD/CAM, 생산 자동화 현장에 필요한 자격을 비교합니다."
  },
  {
    id: "energy",
    name: "전기·에너지",
    tagline: "전기 설비, 에너지 효율, 신재생 운영",
    description: "전기, 에너지, 가스, 신재생 설비와 시설 안전 관리 직무에 필요한 자격을 확인합니다."
  },
  {
    id: "media",
    name: "미디어·콘텐츠",
    tagline: "영상, 광고, 디지털 마케팅, 콘텐츠 제작",
    description: "콘텐츠 기획, 영상 제작, 디지털 광고, 분석 기반 마케팅 직무에 연결되는 자격을 정리했습니다."
  },
  {
    id: "hospitality",
    name: "관광·서비스",
    tagline: "호텔, 항공, 조리, 고객 경험 운영",
    description: "관광, 호텔, 외식, 항공 서비스와 고객 경험 관리 직무에 활용되는 자격을 탐색합니다."
  }
);

export const certifications: Certification[] = [
  {
    id: "adp",
    industryId: "it",
    name: "데이터 분석 전문가",
    issuer: "한국데이터산업진흥원",
    level: "전문",
    type: "국가공인",
    summary: "데이터 기획, 통계 분석, 모델링, 결과 해석 역량을 종합적으로 검증하는 분석 직무 대표 자격입니다.",
    fitFor: ["데이터 분석가", "BI 담당자", "마케팅 애널리스트"],
    requiredFor: ["데이터 기반 의사결정", "분석 프로젝트 리딩", "통계 모델 검증"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.dataq.or.kr",
    examFee: "필기 80,000원 / 실기 70,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-02-16", registrationEnd: "2026-02-22", examDate: "2026-03-21", resultDate: "2026-04-17", examType: "written" },
      { round: "2026년 2회", registrationStart: "2026-08-10", registrationEnd: "2026-08-16", examDate: "2026-09-12", resultDate: "2026-10-16", examType: "practical" }
    ]
  },
  {
    id: "cloud-architect",
    industryId: "it",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    level: "고급",
    type: "국제자격",
    summary: "AWS 기반의 비용·성능 최적화 아키텍처 설계 역량을 검증하는 클라우드 대표 국제 자격입니다.",
    fitFor: ["클라우드 엔지니어", "SRE", "백엔드 리드"],
    requiredFor: ["AWS 아키텍처 설계", "고가용성 구성", "클라우드 비용 관리"],
    averagePrepWeeks: 8,
    officialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    examFee: "150 USD",
    passingStandard: "AWS Certification 기준 점수 충족",
    schedules: [
      { round: "2026년 상반기", registrationStart: "2026-03-02", registrationEnd: "2026-03-13", examDate: "2026-04-04", resultDate: "2026-04-24", examType: "written" },
      { round: "2026년 하반기", registrationStart: "2026-09-01", registrationEnd: "2026-09-12", examDate: "2026-10-10", resultDate: "2026-10-30", examType: "practical" }
    ]
  },
  {
    id: "industrial-safety",
    industryId: "construction",
    name: "산업안전기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "산업 현장의 위험 요인을 분석하고 안전관리 체계를 운영하는 능력을 검증합니다.",
    fitFor: ["안전관리자", "현장소장", "설비 관리자"],
    requiredFor: ["법정 안전관리자 선임", "위험성 평가", "작업환경 개선"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 34,600원",
    passingStandard: "필기 과목별 40점 이상 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "practical" }
    ]
  },
  {
    id: "medical-admin",
    industryId: "health",
    name: "병원행정사",
    issuer: "대한병원행정관리자협회",
    level: "실무",
    type: "민간자격",
    summary: "원무, 보험청구, 병원 경영 지원 등 의료기관 행정 실무 이해도를 검증합니다.",
    fitFor: ["원무과 담당자", "의료기관 행정직", "보험청구 실무자"],
    requiredFor: ["환자 접수·수납", "의료보험 청구", "병원 행정 프로세스"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.kcha.or.kr/center/quali/info",
    examFee: "70,000원",
    passingStandard: "전 과목 평균 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-04-06", registrationEnd: "2026-04-17", examDate: "2026-05-17", resultDate: "2026-06-05", examType: "written" },
      { round: "2026년 2회", registrationStart: "2026-10-05", registrationEnd: "2026-10-16", examDate: "2026-11-15", resultDate: "2026-12-04", examType: "written" }
    ]
  },
  {
    id: "erp-accounting",
    industryId: "business",
    name: "ERP 정보관리사 회계",
    issuer: "한국생산성본부",
    level: "실무",
    type: "국가공인",
    summary: "ERP 시스템을 활용한 회계 처리, 자금 관리, 결산 실무 역량을 평가합니다.",
    fitFor: ["회계 담당자", "경영지원", "ERP 운영자"],
    requiredFor: ["전표 처리", "결산 보조", "ERP 기준정보 관리"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "37,000원",
    passingStandard: "이론 및 실무 평균 70점 이상",
    schedules: [
      { round: "2026년 3월", registrationStart: "2026-02-02", registrationEnd: "2026-02-09", examDate: "2026-03-14", resultDate: "2026-03-27", examType: "written" },
      { round: "2026년 6월", registrationStart: "2026-05-04", registrationEnd: "2026-05-11", examDate: "2026-06-13", resultDate: "2026-06-26", examType: "written" }
    ]
  },
  {
    id: "environment-engineer",
    industryId: "environment",
    name: "대기환경기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "대기오염 측정, 방지시설 운영, 환경 법규 대응 역량을 검증합니다.",
    fitFor: ["환경관리자", "ESG 담당자", "방지시설 운영자"],
    requiredFor: ["배출시설 관리", "환경 인허가", "오염물질 측정"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "colorist",
    industryId: "design",
    name: "컬러리스트 기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "색채 기획, 배색, 상품 및 공간 디자인에서 색채 전략을 수립하는 역량을 검증합니다.",
    fitFor: ["브랜드 디자이너", "공간 디자이너", "제품 기획자"],
    requiredFor: ["색채 기획", "브랜드 시스템", "디자인 품질 관리"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 33,000원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "information-security-engineer",
    industryId: "it",
    name: "정보보안기사",
    issuer: "한국방송통신전파진흥원",
    level: "전문",
    type: "국가자격",
    summary: "시스템, 네트워크, 애플리케이션 보안과 침해 대응 역량을 검증하는 보안 직무 핵심 자격입니다.",
    fitFor: ["보안 엔지니어", "침해대응 담당자", "인프라 운영자"],
    requiredFor: ["취약점 분석", "보안 정책 수립", "침해 사고 대응"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.cq.or.kr",
    examFee: "필기 18,800원 / 실기 21,900원",
    passingStandard: "필기 과목별 40점 이상 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-02-09", registrationEnd: "2026-02-13", examDate: "2026-03-14", resultDate: "2026-04-10", examType: "written" },
      { round: "2026년 2회", registrationStart: "2026-08-03", registrationEnd: "2026-08-07", examDate: "2026-09-05", resultDate: "2026-10-02", examType: "practical" }
    ]
  },
  {
    id: "sqld",
    industryId: "it",
    name: "SQL 개발자",
    issuer: "한국데이터산업진흥원",
    level: "실무",
    type: "국가공인",
    summary: "관계형 데이터베이스 모델링과 SQL 작성 능력을 검증하는 데이터 실무 입문 자격입니다.",
    fitFor: ["백엔드 개발자", "데이터 엔지니어", "데이터 분석가"],
    requiredFor: ["SQL 작성", "데이터 모델 이해", "쿼리 성능 기초"],
    averagePrepWeeks: 4,
    officialUrl: "https://www.dataq.or.kr",
    examFee: "50,000원",
    passingStandard: "100점 만점 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-02-23", registrationEnd: "2026-03-02", examDate: "2026-03-28", resultDate: "2026-04-17", examType: "written" },
      { round: "2026년 3회", registrationStart: "2026-08-24", registrationEnd: "2026-08-31", examDate: "2026-09-26", resultDate: "2026-10-16", examType: "written" }
    ]
  },
  {
    id: "nursing-assistant",
    industryId: "health",
    name: "간호조무사",
    issuer: "한국보건의료인국가시험원",
    level: "실무",
    type: "국가자격",
    summary: "의료기관과 돌봄 현장에서 간호 보조 업무를 수행하기 위한 기초 보건 역량을 검증합니다.",
    fitFor: ["간호조무 인력", "의원급 의료기관 스태프", "요양기관 종사자"],
    requiredFor: ["기초 간호 보조", "환자 응대", "감염관리 기본"],
    averagePrepWeeks: 16,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "37,000원",
    passingStandard: "매 과목 40점 이상, 전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 상반기", registrationStart: "2026-01-06", registrationEnd: "2026-01-13", examDate: "2026-03-14", resultDate: "2026-03-31", examType: "written" },
      { round: "2026년 하반기", registrationStart: "2026-07-07", registrationEnd: "2026-07-14", examDate: "2026-09-12", resultDate: "2026-09-29", examType: "written" }
    ]
  },
  {
    id: "care-worker",
    industryId: "health",
    name: "요양보호사",
    issuer: "한국보건의료인국가시험원",
    level: "입문",
    type: "국가자격",
    summary: "노인 돌봄, 신체활동 지원, 일상생활 지원 역량을 확인하는 장기요양 현장 필수 자격입니다.",
    fitFor: ["요양보호사", "방문요양 종사자", "노인복지시설 종사자"],
    requiredFor: ["신체활동 지원", "인지활동 지원", "돌봄 윤리"],
    averagePrepWeeks: 5,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "32,000원",
    passingStandard: "필기와 실기 각각 60점 이상",
    schedules: [
      { round: "2026년 2월", registrationStart: "2026-01-12", registrationEnd: "2026-01-19", examDate: "2026-02-14", resultDate: "2026-02-27", examType: "written" },
      { round: "2026년 8월", registrationStart: "2026-07-13", registrationEnd: "2026-07-20", examDate: "2026-08-15", resultDate: "2026-08-28", examType: "practical" }
    ]
  },
  {
    id: "health-records-analyst",
    industryId: "health",
    name: "보건의료정보관리사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "진료정보 관리, 의료 데이터 품질, 보건의료 통계 업무 수행 능력을 검증합니다.",
    fitFor: ["의무기록 담당자", "병원 데이터 관리자", "의료정보 분석 담당자"],
    requiredFor: ["진료정보 관리", "의무기록 검토", "보건의료 통계"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "110,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-05", resultDate: "2026-12-24", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-11", registrationEnd: "2026-05-18", examDate: "2026-06-13", resultDate: "2026-06-26", examType: "written" }
    ]
  },
  {
    id: "construction-engineer",
    industryId: "construction",
    name: "건축기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "건축 계획, 시공, 구조, 설비, 법규 지식을 종합적으로 검증하는 건축 분야 대표 자격입니다.",
    fitFor: ["건축 시공관리자", "건축 설계 보조", "공사관리 담당자"],
    requiredFor: ["건축 시공 관리", "공정 관리", "건축 법규 이해"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "civil-engineer",
    industryId: "construction",
    name: "토목기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "토목 구조물, 측량, 수리·수문, 지반 공학 등 사회기반시설 관리 역량을 평가합니다.",
    fitFor: ["토목 시공관리자", "공공 인프라 담당자", "측량·설계 보조"],
    requiredFor: ["토목 설계 이해", "공사 품질 관리", "측량 기초"],
    averagePrepWeeks: 13,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "fire-safety-engineer",
    industryId: "construction",
    name: "소방설비기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "소방 설비의 설계, 시공, 점검과 화재 안전 기준 이해도를 검증하는 안전 설비 자격입니다.",
    fitFor: ["소방시설 관리자", "설비 시공 담당자", "시설 안전 담당자"],
    requiredFor: ["소방설비 점검", "화재 안전 기준", "설비 유지보수"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "computerized-accounting",
    industryId: "business",
    name: "전산회계 1급",
    issuer: "한국세무사회",
    level: "실무",
    type: "국가공인",
    summary: "회계 원리, 부가가치세, 전표 입력 등 중소기업 회계 실무 능력을 검증합니다.",
    fitFor: ["회계 사무원", "세무사무소 직원", "경리 담당자"],
    requiredFor: ["전표 입력", "부가세 신고 보조", "회계 프로그램 활용"],
    averagePrepWeeks: 6,
    officialUrl: "https://license.kacpta.or.kr",
    examFee: "30,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 2월", registrationStart: "2026-01-08", registrationEnd: "2026-01-14", examDate: "2026-02-08", resultDate: "2026-02-26", examType: "written" },
      { round: "2026년 8월", registrationStart: "2026-07-09", registrationEnd: "2026-07-15", examDate: "2026-08-09", resultDate: "2026-08-27", examType: "written" }
    ]
  },
  {
    id: "logistics-manager",
    industryId: "business",
    name: "물류관리사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "물류관리, 화물운송, 보관하역, 국제물류 등 공급망 운영 역량을 검증합니다.",
    fitFor: ["물류 운영 담당자", "SCM 담당자", "유통 기획자"],
    requiredFor: ["재고 관리", "운송 계획", "공급망 운영"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "20,000원",
    passingStandard: "과목별 40점 이상, 평균 60점 이상",
    schedules: [
      { round: "2026년 정기", registrationStart: "2026-06-08", registrationEnd: "2026-06-12", examDate: "2026-08-01", resultDate: "2026-09-02", examType: "written" },
      { round: "2026년 추가", registrationStart: "2026-10-12", registrationEnd: "2026-10-16", examDate: "2026-11-21", resultDate: "2026-12-11", examType: "written" }
    ]
  },
  {
    id: "hr-specialist",
    industryId: "business",
    name: "공인노무사",
    issuer: "한국산업인력공단",
    level: "고급",
    type: "국가자격",
    summary: "노동관계법령, 인사노무관리, 노동분쟁 조정 역량을 검증하는 인사·노무 전문 자격입니다.",
    fitFor: ["노무사", "HR 매니저", "노사관계 담당자"],
    requiredFor: ["노동관계법 해석", "임금·근로시간 관리", "노무 리스크 자문"],
    averagePrepWeeks: 40,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "1차 30,000원 / 2차 45,000원",
    passingStandard: "시험 단계별 합격 기준 충족",
    schedules: [
      { round: "2026년 4월", registrationStart: "2026-03-09", registrationEnd: "2026-03-20", examDate: "2026-04-18", resultDate: "2026-05-01", examType: "written" },
      { round: "2026년 10월", registrationStart: "2026-09-14", registrationEnd: "2026-09-25", examDate: "2026-10-24", resultDate: "2026-11-06", examType: "interview" }
    ]
  },
  {
    id: "waste-treatment-engineer",
    industryId: "environment",
    name: "폐기물처리기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "폐기물의 수집, 운반, 처리, 재활용 공정과 관련 법규 이해도를 검증합니다.",
    fitFor: ["환경시설 운영자", "폐기물 처리 담당자", "환경 컨설턴트"],
    requiredFor: ["폐기물 처리 공정", "환경 법규 대응", "처리시설 관리"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "energy-manager",
    industryId: "environment",
    name: "에너지관리기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "열설비, 에너지 진단, 효율 개선과 설비 안전 관리 역량을 검증합니다.",
    fitFor: ["에너지 관리자", "설비 운영 담당자", "ESG 시설 담당자"],
    requiredFor: ["에너지 효율 관리", "열설비 운전", "설비 안전 점검"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "landscape-engineer",
    industryId: "environment",
    name: "조경기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "조경 계획, 설계, 식재, 시공 관리 능력을 검증하는 녹지·환경 설계 분야 자격입니다.",
    fitFor: ["조경 설계자", "공원 관리 담당자", "녹지 시공관리자"],
    requiredFor: ["조경 계획", "식재 설계", "현장 시공 관리"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 45,000원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "web-design-functional",
    industryId: "design",
    name: "웹디자인기능사",
    issuer: "한국산업인력공단",
    level: "입문",
    type: "국가자격",
    summary: "웹 화면 구성, HTML/CSS 기초, 그래픽 도구 활용 능력을 확인하는 디자인 입문 자격입니다.",
    fitFor: ["웹 디자이너", "퍼블리셔", "콘텐츠 운영자"],
    requiredFor: ["웹 시안 제작", "HTML/CSS 기초", "이미지 편집"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 14,500원 / 실기 20,100원",
    passingStandard: "필기 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 기능사 1회", registrationStart: "2026-01-05", registrationEnd: "2026-01-08", examDate: "2026-01-25", resultDate: "2026-02-13", examType: "written" },
      { round: "2026년 기능사 3회", registrationStart: "2026-06-15", registrationEnd: "2026-06-18", examDate: "2026-07-12", resultDate: "2026-08-07", examType: "practical" }
    ]
  },
  {
    id: "visual-communication-engineer",
    industryId: "design",
    name: "시각디자인기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "편집, 광고, 브랜드, 패키지 등 시각 커뮤니케이션 디자인 역량을 종합적으로 평가합니다.",
    fitFor: ["그래픽 디자이너", "브랜드 디자이너", "콘텐츠 디자이너"],
    requiredFor: ["시각 정보 구성", "브랜드 표현", "편집 디자인"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 29,900원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "ux-researcher",
    industryId: "design",
    name: "서비스경험디자인기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "사용자 조사, 서비스 콘셉트 개발, 경험 설계와 검증 역량을 평가하는 디자인 기사 자격입니다.",
    fitFor: ["UX 리서처", "프로덕트 디자이너", "서비스 기획자"],
    requiredFor: ["사용자 조사", "서비스 프로토타이핑", "경험 품질 검증"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 봄", registrationStart: "2026-03-02", registrationEnd: "2026-03-13", examDate: "2026-04-11", resultDate: "2026-04-24", examType: "portfolio" },
      { round: "2026년 가을", registrationStart: "2026-09-01", registrationEnd: "2026-09-12", examDate: "2026-10-17", resultDate: "2026-10-30", examType: "interview" }
    ]
  },
  {
    id: "azure-fundamentals",
    industryId: "it",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    level: "입문",
    type: "국제자격",
    summary: "Azure 클라우드 개념, 핵심 서비스, 관리·거버넌스 기초를 검증하는 Microsoft 입문 자격입니다.",
    fitFor: ["클라우드 입문자", "IT 운영자", "비즈니스 분석가"],
    requiredFor: ["클라우드 개념 이해", "Azure 서비스 기초", "거버넌스 기초"],
    averagePrepWeeks: 3,
    officialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    examFee: "99 USD",
    passingStandard: "Microsoft 인증시험 기준 점수 충족",
    schedules: [
      { round: "상시 1분기", registrationStart: "2026-01-02", registrationEnd: "2026-03-31", examDate: "2026-03-31", resultDate: "2026-03-31", examType: "written" },
      { round: "상시 3분기", registrationStart: "2026-07-01", registrationEnd: "2026-09-30", examDate: "2026-09-30", resultDate: "2026-09-30", examType: "written" }
    ]
  },
  {
    id: "google-cloud-architect",
    industryId: "it",
    name: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    level: "고급",
    type: "국제자격",
    summary: "Google Cloud 기반 솔루션 아키텍처 설계, 보안, 최적화 역량을 평가하는 전문 자격입니다.",
    fitFor: ["클라우드 아키텍트", "플랫폼 엔지니어", "기술 리드"],
    requiredFor: ["GCP 아키텍처 설계", "보안·컴플라이언스", "운영 최적화"],
    averagePrepWeeks: 10,
    officialUrl: "https://cloud.google.com/learn/certification/cloud-architect",
    examFee: "200 USD",
    passingStandard: "Google Cloud 인증시험 기준 충족",
    schedules: [
      { round: "상시 2분기", registrationStart: "2026-04-01", registrationEnd: "2026-06-30", examDate: "2026-06-30", resultDate: "2026-06-30", examType: "written" },
      { round: "상시 4분기", registrationStart: "2026-10-01", registrationEnd: "2026-12-31", examDate: "2026-12-31", resultDate: "2026-12-31", examType: "written" }
    ]
  },
  {
    id: "topcit",
    industryId: "it",
    name: "TOPCIT",
    issuer: "정보통신기획평가원",
    level: "실무",
    type: "민간자격",
    summary: "소프트웨어 개발, 데이터, 보안, 비즈니스 이해 등 ICT 실무역량을 종합 평가합니다.",
    fitFor: ["소프트웨어 개발자", "IT 기획자", "대학생"],
    requiredFor: ["SW 문제 해결", "데이터 이해", "기술 비즈니스 사고"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.topcit.or.kr",
    examFee: "응시 구분별 상이",
    passingStandard: "성적 등급 및 점수 산출",
    schedules: [
      { round: "2026년 상반기", registrationStart: "2026-04-06", registrationEnd: "2026-04-17", examDate: "2026-05-16", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 하반기", registrationStart: "2026-08-31", registrationEnd: "2026-09-11", examDate: "2026-10-10", resultDate: "2026-11-06", examType: "written" }
    ]
  },
  {
    id: "linux-master",
    industryId: "it",
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회",
    level: "실무",
    type: "국가공인",
    summary: "리눅스 운영체제 관리, 명령어, 네트워크 서비스 운영 기초 역량을 검증합니다.",
    fitFor: ["서버 운영자", "인프라 엔지니어", "백엔드 개발자"],
    requiredFor: ["리눅스 명령어", "서버 관리", "네트워크 서비스 기초"],
    averagePrepWeeks: 5,
    officialUrl: "https://www.ihd.or.kr",
    examFee: "1차 22,000원 / 2차 44,000원",
    passingStandard: "시험 단계별 합격 기준 충족",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-01-26", registrationEnd: "2026-02-06", examDate: "2026-03-14", resultDate: "2026-04-03", examType: "written" },
      { round: "2026년 3회", registrationStart: "2026-07-27", registrationEnd: "2026-08-07", examDate: "2026-09-12", resultDate: "2026-10-02", examType: "written" }
    ]
  },
  {
    id: "network-manager",
    industryId: "it",
    name: "네트워크관리사 2급",
    issuer: "한국정보통신자격협회",
    level: "실무",
    type: "국가공인",
    summary: "네트워크 구축, TCP/IP, 라우팅, 장비 설정과 운영 기초 역량을 검증합니다.",
    fitFor: ["네트워크 엔지니어", "전산 담당자", "보안 운영자"],
    requiredFor: ["TCP/IP 이해", "네트워크 장비 설정", "장애 대응"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.icqa.or.kr",
    examFee: "필기 43,000원 / 실기 78,000원",
    passingStandard: "필기 및 실기 합격 기준 충족",
    schedules: [
      { round: "2026년 2회", registrationStart: "2026-03-09", registrationEnd: "2026-03-13", examDate: "2026-04-12", resultDate: "2026-04-28", examType: "written" },
      { round: "2026년 4회", registrationStart: "2026-09-09", registrationEnd: "2026-09-11", examDate: "2026-10-11", resultDate: "2026-10-27", examType: "practical" }
    ]
  },
  {
    id: "pc-maintenance",
    industryId: "it",
    name: "PC정비사 2급",
    issuer: "한국정보통신자격협회",
    level: "입문",
    type: "국가공인",
    summary: "PC 하드웨어, 운영체제, 주변기기, 장애 진단과 정비 실무를 평가합니다.",
    fitFor: ["전산지원 담당자", "헬프데스크", "PC 유지보수 담당자"],
    requiredFor: ["PC 조립·정비", "운영체제 설치", "장애 진단"],
    averagePrepWeeks: 4,
    officialUrl: "https://www.icqa.or.kr",
    examFee: "필기 43,000원 / 실기 78,000원",
    passingStandard: "필기 및 실기 합격 기준 충족",
    schedules: [
      { round: "2026년 2회", registrationStart: "2026-03-09", registrationEnd: "2026-03-13", examDate: "2026-04-12", resultDate: "2026-04-28", examType: "written" },
      { round: "2026년 4회", registrationStart: "2026-09-09", registrationEnd: "2026-09-11", examDate: "2026-10-11", resultDate: "2026-10-27", examType: "practical" }
    ]
  },
  {
    id: "public-health-educator",
    industryId: "health",
    name: "보건교육사 3급",
    issuer: "한국보건의료인국가시험원",
    level: "실무",
    type: "국가자격",
    summary: "건강증진, 질병예방, 보건교육 프로그램 운영 역량을 검증합니다.",
    fitFor: ["보건교육 담당자", "건강증진센터 직원", "공공보건 실무자"],
    requiredFor: ["보건교육 기획", "건강행태 개선", "지역사회 보건"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "78,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-11-28", resultDate: "2026-12-18", examType: "written" },
      { round: "2026년 추가 접수", registrationStart: "2026-10-05", registrationEnd: "2026-10-07", examDate: "2026-11-28", resultDate: "2026-12-18", examType: "written" }
    ]
  },
  {
    id: "clinical-laboratory-technologist",
    industryId: "health",
    name: "임상병리사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "검체 검사, 임상화학, 혈액학, 미생물 검사 등 진단검사 실무 능력을 평가합니다.",
    fitFor: ["임상병리사", "검사실 실무자", "진단검사 담당자"],
    requiredFor: ["검체 처리", "진단검사 장비 운용", "검사 품질관리"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "110,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-13", resultDate: "2027-01-05", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-04", registrationEnd: "2026-05-11", examDate: "2026-06-07", resultDate: "2026-06-19", examType: "written" }
    ]
  },
  {
    id: "radiologic-technologist",
    industryId: "health",
    name: "방사선사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "방사선 촬영, 영상검사, 방사선 안전관리와 의료영상 품질 역량을 검증합니다.",
    fitFor: ["방사선사", "영상의학과 실무자", "검진센터 직원"],
    requiredFor: ["의료영상 촬영", "방사선 안전관리", "장비 품질관리"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "110,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-19", resultDate: "2027-01-08", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-11", registrationEnd: "2026-05-18", examDate: "2026-06-14", resultDate: "2026-06-26", examType: "written" }
    ]
  },
  {
    id: "physical-therapist",
    industryId: "health",
    name: "물리치료사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "운동치료, 물리적 인자치료, 재활 평가와 치료 계획 역량을 검증합니다.",
    fitFor: ["물리치료사", "재활센터 직원", "스포츠재활 실무자"],
    requiredFor: ["재활 평가", "운동치료", "환자 안전관리"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "110,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-20", resultDate: "2027-01-08", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-11", registrationEnd: "2026-05-18", examDate: "2026-06-14", resultDate: "2026-06-26", examType: "written" }
    ]
  },
  {
    id: "occupational-therapist",
    industryId: "health",
    name: "작업치료사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "일상생활 기능 회복, 감각·인지 재활, 작업 수행 평가 역량을 검증합니다.",
    fitFor: ["작업치료사", "재활병원 실무자", "발달재활 담당자"],
    requiredFor: ["작업 수행 평가", "재활 계획 수립", "인지·감각 훈련"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "110,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-06", resultDate: "2026-12-24", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-04", registrationEnd: "2026-05-11", examDate: "2026-06-07", resultDate: "2026-06-19", examType: "written" }
    ]
  },
  {
    id: "nutritionist",
    industryId: "health",
    name: "영양사",
    issuer: "한국보건의료인국가시험원",
    level: "전문",
    type: "국가자격",
    summary: "영양 관리, 급식 운영, 식품위생과 임상영양 기초 역량을 검증합니다.",
    fitFor: ["영양사", "급식 운영자", "건강관리 담당자"],
    requiredFor: ["영양 판정", "급식 관리", "식품위생"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.kuksiwon.or.kr",
    examFee: "90,000원",
    passingStandard: "전 과목 총점 60점 이상",
    schedules: [
      { round: "2026년 국가시험", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-12-12", resultDate: "2026-12-31", examType: "written" },
      { round: "2026년 모의평가", registrationStart: "2026-05-04", registrationEnd: "2026-05-11", examDate: "2026-06-07", resultDate: "2026-06-19", examType: "written" }
    ]
  },
  {
    id: "construction-safety-engineer",
    industryId: "construction",
    name: "건설안전기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "건설 현장의 위험성 평가, 안전관리계획, 재해예방 실무 역량을 검증합니다.",
    fitFor: ["건설 안전관리자", "현장소장", "공사관리 담당자"],
    requiredFor: ["건설 재해예방", "안전관리계획", "작업환경 점검"],
    averagePrepWeeks: 12,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 34,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "interior-architecture-engineer",
    industryId: "construction",
    name: "실내건축기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "실내공간 계획, 시공, 재료, 설비와 도면 작성 역량을 평가합니다.",
    fitFor: ["인테리어 디자이너", "실내건축 시공관리자", "공간기획자"],
    requiredFor: ["공간 계획", "실내 시공관리", "도면 이해"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 28,700원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "electric-engineer",
    industryId: "construction",
    name: "전기기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "전기설비 설계, 시공, 운전, 유지보수와 전기안전관리 역량을 검증합니다.",
    fitFor: ["전기 안전관리자", "시설관리자", "전기 시공 담당자"],
    requiredFor: ["전기설비 운용", "전기안전", "설비 유지보수"],
    averagePrepWeeks: 14,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "practical" }
    ]
  },
  {
    id: "architecture-equipment-engineer",
    industryId: "construction",
    name: "건축설비기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "공조, 급배수, 위생, 에너지 설비 등 건축설비 계획과 유지관리 역량을 평가합니다.",
    fitFor: ["설비 엔지니어", "시설관리 담당자", "건축설비 시공관리자"],
    requiredFor: ["공조설비", "급배수 설비", "설비 유지관리"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "surveyor-engineer",
    industryId: "construction",
    name: "측량및지형공간정보기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "측량, 지형공간정보 구축, 공간 데이터 처리와 현장 측량 실무 능력을 검증합니다.",
    fitFor: ["측량 기술자", "공간정보 담당자", "토목 설계 보조"],
    requiredFor: ["측량 장비 운용", "공간정보 처리", "지형 데이터 분석"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "construction-materials-engineer",
    industryId: "construction",
    name: "건설재료시험기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "콘크리트, 토질, 아스팔트 등 건설재료 시험과 품질관리 역량을 검증합니다.",
    fitFor: ["품질관리자", "토목 현장 담당자", "시험실 실무자"],
    requiredFor: ["재료 시험", "품질 기준 이해", "현장 품질관리"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "computer-literacy",
    industryId: "business",
    name: "컴퓨터활용능력 1급",
    issuer: "대한상공회의소",
    level: "실무",
    type: "국가자격",
    summary: "스프레드시트와 데이터베이스 활용 능력을 평가하는 사무 직무 대표 자격입니다.",
    fitFor: ["사무직", "데이터 운영 담당자", "경영지원"],
    requiredFor: ["스프레드시트 자동화", "데이터베이스 활용", "사무 생산성"],
    averagePrepWeeks: 8,
    officialUrl: "https://license.korcham.net",
    examFee: "필기 19,000원 / 실기 22,500원",
    passingStandard: "필기 과목별 40점 이상 평균 60점, 실기 70점 이상",
    schedules: [
      { round: "상시 1분기", registrationStart: "2026-01-02", registrationEnd: "2026-03-31", examDate: "2026-03-31", resultDate: "2026-04-03", examType: "written" },
      { round: "상시 3분기", registrationStart: "2026-07-01", registrationEnd: "2026-09-30", examDate: "2026-09-30", resultDate: "2026-10-03", examType: "practical" }
    ]
  },
  {
    id: "word-processor",
    industryId: "business",
    name: "워드프로세서",
    issuer: "대한상공회의소",
    level: "입문",
    type: "국가자격",
    summary: "문서 작성, 편집, 교정과 워드프로세싱 실무 능력을 평가합니다.",
    fitFor: ["사무보조", "행정 담당자", "문서관리 담당자"],
    requiredFor: ["문서 작성", "편집 기준 이해", "사무 문서 처리"],
    averagePrepWeeks: 4,
    officialUrl: "https://license.korcham.net",
    examFee: "필기 17,000원 / 실기 19,500원",
    passingStandard: "필기 60점, 실기 80점 이상",
    schedules: [
      { round: "상시 2분기", registrationStart: "2026-04-01", registrationEnd: "2026-06-30", examDate: "2026-06-30", resultDate: "2026-07-03", examType: "written" },
      { round: "상시 4분기", registrationStart: "2026-10-01", registrationEnd: "2026-12-31", examDate: "2026-12-31", resultDate: "2027-01-04", examType: "practical" }
    ]
  },
  {
    id: "trade-english",
    industryId: "business",
    name: "무역영어",
    issuer: "대한상공회의소",
    level: "실무",
    type: "국가공인",
    summary: "무역 실무 문서, 계약, 결제, 운송 관련 영어 커뮤니케이션 능력을 평가합니다.",
    fitFor: ["무역 사무원", "해외영업", "수출입 담당자"],
    requiredFor: ["무역 문서 이해", "수출입 커뮤니케이션", "계약·결제 용어"],
    averagePrepWeeks: 6,
    officialUrl: "https://license.korcham.net",
    examFee: "33,000원",
    passingStandard: "100점 만점 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-03-02", registrationEnd: "2026-03-08", examDate: "2026-04-05", resultDate: "2026-04-24", examType: "written" },
      { round: "2026년 3회", registrationStart: "2026-09-01", registrationEnd: "2026-09-07", examDate: "2026-10-04", resultDate: "2026-10-23", examType: "written" }
    ]
  },
  {
    id: "fat-accounting",
    industryId: "business",
    name: "FAT 1급",
    issuer: "한국공인회계사회",
    level: "실무",
    type: "국가공인",
    summary: "회계정보처리, 부가가치세, 재무회계 실무 처리 능력을 평가합니다.",
    fitFor: ["회계 담당자", "세무회계 사무원", "경영지원"],
    requiredFor: ["회계 전표 처리", "세무 자료 관리", "회계 프로그램 활용"],
    averagePrepWeeks: 5,
    officialUrl: "https://at.kicpa.or.kr",
    examFee: "39,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 2월", registrationStart: "2026-01-12", registrationEnd: "2026-01-19", examDate: "2026-02-21", resultDate: "2026-03-06", examType: "written" },
      { round: "2026년 8월", registrationStart: "2026-07-13", registrationEnd: "2026-07-20", examDate: "2026-08-22", resultDate: "2026-09-04", examType: "written" }
    ]
  },
  {
    id: "tax-accounting",
    industryId: "business",
    name: "전산세무 2급",
    issuer: "한국세무사회",
    level: "실무",
    type: "국가공인",
    summary: "세무회계, 원천징수, 부가가치세, 법인세 기초 실무를 평가합니다.",
    fitFor: ["세무회계 담당자", "경리 담당자", "세무사무소 직원"],
    requiredFor: ["세무 신고 보조", "원천세 처리", "부가세 관리"],
    averagePrepWeeks: 8,
    officialUrl: "https://license.kacpta.or.kr",
    examFee: "30,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 4월", registrationStart: "2026-03-12", registrationEnd: "2026-03-18", examDate: "2026-04-12", resultDate: "2026-04-30", examType: "written" },
      { round: "2026년 10월", registrationStart: "2026-09-10", registrationEnd: "2026-09-16", examDate: "2026-10-11", resultDate: "2026-10-29", examType: "written" }
    ]
  },
  {
    id: "distribution-manager",
    industryId: "business",
    name: "유통관리사 2급",
    issuer: "대한상공회의소",
    level: "실무",
    type: "국가자격",
    summary: "유통 경로, 매장 운영, 상품관리, 판매 촉진 등 유통 실무 역량을 검증합니다.",
    fitFor: ["유통 영업", "리테일 매니저", "MD 보조"],
    requiredFor: ["매장 운영", "상품관리", "유통 전략"],
    averagePrepWeeks: 6,
    officialUrl: "https://license.korcham.net",
    examFee: "29,700원",
    passingStandard: "과목별 40점 이상 평균 60점 이상",
    schedules: [
      { round: "2026년 1회", registrationStart: "2026-04-06", registrationEnd: "2026-04-12", examDate: "2026-05-17", resultDate: "2026-06-05", examType: "written" },
      { round: "2026년 3회", registrationStart: "2026-10-05", registrationEnd: "2026-10-11", examDate: "2026-11-15", resultDate: "2026-12-04", examType: "written" }
    ]
  },
  {
    id: "water-pollution-engineer",
    industryId: "environment",
    name: "수질환경기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "수질오염 측정, 처리공정, 수질관리와 환경 법규 대응 역량을 검증합니다.",
    fitFor: ["수질환경 관리자", "환경시설 운영자", "환경 컨설턴트"],
    requiredFor: ["수질 분석", "처리공정 관리", "환경 법규"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "greenhouse-gas-engineer",
    industryId: "environment",
    name: "온실가스관리기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "온실가스 배출량 산정, 검증, 감축 전략과 관련 제도 이해도를 평가합니다.",
    fitFor: ["ESG 담당자", "탄소관리 담당자", "환경 컨설턴트"],
    requiredFor: ["배출량 산정", "감축 전략", "탄소 제도 이해"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "soil-environment-engineer",
    industryId: "environment",
    name: "토양환경기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "토양오염 조사, 정화기술, 위해성 평가와 토양환경 법규 역량을 검증합니다.",
    fitFor: ["토양환경 담당자", "환경조사 실무자", "정화사업 담당자"],
    requiredFor: ["토양오염 조사", "정화기술 이해", "위해성 평가"],
    averagePrepWeeks: 11,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "forest-engineer",
    industryId: "environment",
    name: "산림기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "산림자원 조성, 산림보호, 임도, 산림경영과 생태 관리 역량을 평가합니다.",
    fitFor: ["산림 관리자", "조경·녹지 담당자", "생태복원 실무자"],
    requiredFor: ["산림 경영", "산림 보호", "생태 관리"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "organic-agriculture-engineer",
    industryId: "environment",
    name: "유기농업기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "유기농업 생산, 토양관리, 병해충 관리와 친환경 인증 실무를 검증합니다.",
    fitFor: ["스마트농업 담당자", "친환경 농업 컨설턴트", "농장 운영자"],
    requiredFor: ["유기재배 관리", "토양 관리", "친환경 인증"],
    averagePrepWeeks: 8,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "plant-protection-engineer",
    industryId: "environment",
    name: "식물보호기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "작물 병해충 진단, 방제, 농약 안전사용과 식물보호 실무 역량을 평가합니다.",
    fitFor: ["작물보호 담당자", "농업 컨설턴트", "스마트팜 운영자"],
    requiredFor: ["병해충 진단", "방제 계획", "농약 안전관리"],
    averagePrepWeeks: 9,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 22,600원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 2회", registrationStart: "2026-04-13", registrationEnd: "2026-04-16", examDate: "2026-05-10", resultDate: "2026-06-12", examType: "written" },
      { round: "2026년 정기 기사 4회", registrationStart: "2026-09-07", registrationEnd: "2026-09-10", examDate: "2026-10-11", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "gtq-photoshop",
    industryId: "design",
    name: "GTQ 포토샵 1급",
    issuer: "한국생산성본부",
    level: "실무",
    type: "국가공인",
    summary: "포토샵 기반 이미지 편집, 합성, 광고·홍보물 제작 능력을 평가합니다.",
    fitFor: ["그래픽 디자이너", "마케팅 콘텐츠 제작자", "웹 디자이너"],
    requiredFor: ["이미지 보정", "그래픽 합성", "콘텐츠 제작"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "31,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 3월", registrationStart: "2026-02-02", registrationEnd: "2026-02-09", examDate: "2026-03-28", resultDate: "2026-04-17", examType: "practical" },
      { round: "2026년 9월", registrationStart: "2026-08-03", registrationEnd: "2026-08-10", examDate: "2026-09-26", resultDate: "2026-10-16", examType: "practical" }
    ]
  },
  {
    id: "gtqi-illustrator",
    industryId: "design",
    name: "GTQi 일러스트 1급",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "벡터 그래픽, 로고, 편집 요소 제작 등 일러스트레이터 활용 능력을 평가합니다.",
    fitFor: ["브랜드 디자이너", "그래픽 디자이너", "편집 디자이너"],
    requiredFor: ["벡터 드로잉", "로고 제작", "그래픽 시스템"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "31,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 4월", registrationStart: "2026-03-02", registrationEnd: "2026-03-09", examDate: "2026-04-25", resultDate: "2026-05-15", examType: "practical" },
      { round: "2026년 10월", registrationStart: "2026-09-01", registrationEnd: "2026-09-08", examDate: "2026-10-24", resultDate: "2026-11-13", examType: "practical" }
    ]
  },
  {
    id: "gtqid-indesign",
    industryId: "design",
    name: "GTQid 인디자인",
    issuer: "한국생산성본부",
    level: "실무",
    type: "민간자격",
    summary: "인디자인을 활용한 편집 레이아웃, 인쇄물, 전자출판 제작 역량을 평가합니다.",
    fitFor: ["편집 디자이너", "출판 디자이너", "브랜드 콘텐츠 제작자"],
    requiredFor: ["편집 레이아웃", "출판물 제작", "타이포그래피"],
    averagePrepWeeks: 5,
    officialUrl: "https://license.kpc.or.kr",
    examFee: "31,000원",
    passingStandard: "100점 만점 70점 이상",
    schedules: [
      { round: "2026년 5월", registrationStart: "2026-04-06", registrationEnd: "2026-04-13", examDate: "2026-05-23", resultDate: "2026-06-12", examType: "practical" },
      { round: "2026년 11월", registrationStart: "2026-10-05", registrationEnd: "2026-10-12", examDate: "2026-11-28", resultDate: "2026-12-18", examType: "practical" }
    ]
  },
  {
    id: "product-design-engineer",
    industryId: "design",
    name: "제품디자인기사",
    issuer: "한국산업인력공단",
    level: "전문",
    type: "국가자격",
    summary: "제품 기획, 조형, 재료, 설계 프로세스와 디자인 개발 역량을 검증합니다.",
    fitFor: ["제품 디자이너", "산업 디자이너", "디자인 기획자"],
    requiredFor: ["제품 콘셉트 개발", "조형 설계", "사용성 검토"],
    averagePrepWeeks: 10,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 19,400원 / 실기 29,900원",
    passingStandard: "필기 평균 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 정기 기사 1회", registrationStart: "2026-01-19", registrationEnd: "2026-01-22", examDate: "2026-02-15", resultDate: "2026-03-18", examType: "written" },
      { round: "2026년 정기 기사 3회", registrationStart: "2026-07-20", registrationEnd: "2026-07-23", examDate: "2026-08-16", resultDate: "2026-09-18", examType: "practical" }
    ]
  },
  {
    id: "computer-graphics-operation",
    industryId: "design",
    name: "컴퓨터그래픽스운용기능사",
    issuer: "한국산업인력공단",
    level: "입문",
    type: "국가자격",
    summary: "컴퓨터 그래픽 도구를 활용한 2D 그래픽 제작과 출력 실무 능력을 평가합니다.",
    fitFor: ["그래픽 작업자", "디자인 보조", "콘텐츠 제작자"],
    requiredFor: ["그래픽 편집", "출력 데이터 제작", "디자인 툴 활용"],
    averagePrepWeeks: 6,
    officialUrl: "https://www.q-net.or.kr",
    examFee: "필기 14,500원 / 실기 23,700원",
    passingStandard: "필기 60점, 실기 60점 이상",
    schedules: [
      { round: "2026년 기능사 2회", registrationStart: "2026-03-16", registrationEnd: "2026-03-19", examDate: "2026-04-12", resultDate: "2026-05-08", examType: "written" },
      { round: "2026년 기능사 4회", registrationStart: "2026-08-24", registrationEnd: "2026-08-27", examDate: "2026-09-20", resultDate: "2026-10-16", examType: "practical" }
    ]
  },
  {
    id: "adobe-photoshop-professional",
    industryId: "design",
    name: "Adobe Certified Professional Photoshop",
    issuer: "Adobe",
    level: "실무",
    type: "국제자격",
    summary: "Photoshop을 활용한 이미지 제작, 편집 워크플로와 디지털 콘텐츠 제작 역량을 인증합니다.",
    fitFor: ["디지털 디자이너", "콘텐츠 크리에이터", "마케팅 디자이너"],
    requiredFor: ["이미지 편집", "레이어 워크플로", "디지털 콘텐츠 제작"],
    averagePrepWeeks: 6,
    officialUrl: "https://certifiedprofessional.adobe.com",
    examFee: "시험센터별 상이",
    passingStandard: "Adobe 인증시험 기준 충족",
    schedules: [
      { round: "상시 1분기", registrationStart: "2026-01-02", registrationEnd: "2026-03-31", examDate: "2026-03-31", resultDate: "2026-03-31", examType: "practical" },
      { round: "상시 3분기", registrationStart: "2026-07-01", registrationEnd: "2026-09-30", examDate: "2026-09-30", resultDate: "2026-09-30", examType: "practical" }
    ]
  }
];

certifications.push(
  ...additionalCertifications.map((certification, index) => ({
    ...certification,
    schedules: generatedSchedules(
      index,
      certification.type === "국제자격" || certification.id.includes("photoshop") ? "practical" : "written"
    )
  }))
);
