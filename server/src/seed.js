export const industries = [
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
export const certifications = [
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
