import { listPublicJobs } from "../server/src/jobs.js";

export default async function handler(_request: any, response: any) {
  try {
    response.status(200).json({
      source: "ALIO 공공기관 채용정보",
      updatedAt: new Date().toISOString(),
      jobs: await listPublicJobs()
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "공기업 채용 공고를 불러오지 못했습니다."
    });
  }
}
