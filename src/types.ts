export type IndustryId =
  | "it"
  | "health"
  | "construction"
  | "business"
  | "environment"
  | "design"
  | "finance"
  | "education"
  | "legal"
  | "public"
  | "manufacturing"
  | "energy"
  | "media"
  | "hospitality";

export type ExamType = "written" | "practical" | "portfolio" | "interview";

export interface Industry {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
}

export interface ExamSchedule {
  round: string;
  registrationStart: string;
  registrationEnd: string;
  examDate: string;
  resultDate: string;
  examType: ExamType;
}

export interface Certification {
  id: string;
  industryId: IndustryId;
  name: string;
  issuer: string;
  level: "입문" | "실무" | "전문" | "고급";
  type: "국가자격" | "국가공인" | "민간자격" | "국제자격";
  summary: string;
  fitFor: string[];
  requiredFor: string[];
  averagePrepWeeks: number;
  officialUrl: string;
  examFee: string;
  passingStandard: string;
  schedules: ExamSchedule[];
}

export interface CatalogResponse {
  industries: Industry[];
  certifications: Certification[];
}
