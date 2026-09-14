import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { listCertifications, listIndustries } from "./db.js";
dotenv.config();
const app = express();
const port = Number(process.env.PORT ?? 4178);
app.use(cors());
app.use(express.json());
app.get("/api/health", (_request, response) => {
    response.json({ ok: true, service: "certimap-api" });
});
app.get("/api/catalog", async (_request, response, next) => {
    try {
        const [industries, certifications] = await Promise.all([
            listIndustries(),
            listCertifications()
        ]);
        response.json({ industries, certifications });
    }
    catch (error) {
        next(error);
    }
});
app.use((error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({
        message: "자격증 정보를 불러오지 못했습니다."
    });
});
app.listen(port, () => {
    console.log(`CertiMap API listening on http://localhost:${port}`);
});
