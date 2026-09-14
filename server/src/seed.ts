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
    name: "클라우드 아키텍트 프로",
    issuer: "CertiMap 가상평가원",
    level: "고급",
    type: "민간자격",
    summary: "클라우드 설계, 비용 최적화, 장애 대응, 보안 아키텍처 역량을 검증하는 가상 자격입니다.",
    fitFor: ["클라우드 엔지니어", "SRE", "백엔드 리드"],
    requiredFor: ["멀티 리전 설계", "서비스 복구 전략", "클라우드 비용 관리"],
    averagePrepWeeks: 8,
    officialUrl: "https://example.com/certimap/cloud-architect",
    examFee: "120,000원",
    passingStandard: "100점 만점 70점 이상",
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
    officialUrl: "https://www.kcha.or.kr",
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
  }
];
