import pg from "pg";
import type { Certification, Industry } from "./types.js";
import { certifications, industries } from "./seed.js";

const { Pool } = pg;

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

export async function listIndustries(): Promise<Industry[]> {
  if (!pool) return industries;

  const { rows } = await pool.query<Industry>(
    "select id, name, tagline, description from industries order by name"
  );
  return rows;
}

export async function listCertifications(): Promise<Certification[]> {
  if (!pool) return certifications;

  const { rows } = await pool.query<Certification>(
    `
      select
        c.id,
        c.industry_id as "industryId",
        c.name,
        c.issuer,
        c.level,
        c.type,
        c.summary,
        c.fit_for as "fitFor",
        c.required_for as "requiredFor",
        c.average_prep_weeks as "averagePrepWeeks",
        c.official_url as "officialUrl",
        c.exam_fee as "examFee",
        c.passing_standard as "passingStandard",
        coalesce(json_agg(s.* order by s.exam_date) filter (where s.id is not null), '[]') as schedules
      from certifications c
      left join exam_schedules s on s.certification_id = c.id
      group by c.id
      order by c.name
    `
  );
  return rows;
}
