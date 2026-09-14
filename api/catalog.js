import { listCertifications, listIndustries } from "../server/src/db.js";
export default async function handler(_request, response) {
    try {
        const [industries, certifications] = await Promise.all([
            listIndustries(),
            listCertifications()
        ]);
        response.status(200).json({ industries, certifications });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            message: "자격증 정보를 불러오지 못했습니다."
        });
    }
}
