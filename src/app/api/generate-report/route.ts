import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      problem,
      solution,
      industry,
      stage,
    } = body;

    if (!title || !problem || !solution) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const prompt = [
      "You are an expert startup advisor and venture capitalist.",
      "Analyze the following startup idea realistically.",
      "",
      `Startup Name: ${title}`,
      `Problem: ${problem}`,
      `Solution: ${solution}`,
      `Industry: ${industry}`,
      `Stage: ${stage}`,
      "",
      "Return ONLY valid JSON.",
      "Do not include explanations.",
      "Do not include markdown.",
      "Do not include code fences.",
      "",
      "The validationScore MUST be an integer between 0 and 100.",
      "",
      "Scoring Guide:",
      "- 90-100 = Excellent startup with high market potential and strong execution.",
      "- 75-89 = Good startup with a few manageable risks.",
      "- 50-74 = Average idea that needs improvement.",
      "- 0-49 = Weak or unrealistic startup idea.",
      "",
      "Be realistic and use the scoring guide above.",
      "",
      "Return exactly this JSON structure:",
      `{
  "validationScore": 85,
  "marketAnalysis": "",
  "competitorAnalysis": "",
  "swotAnalysis": "",
  "businessModel": "",
  "mvpPlan": "",
  "goToMarketStrategy": "",
  "risks": "",
  "roadmap": "",
  "investorPitch": ""
}`
    ].join("\n");

    const result = await model.generateContent(prompt);

    let text = result.response.text();

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const report = JSON.parse(text);

// Get logged in user
const token = req.cookies.get("token")?.value;

if (!token) {
  return NextResponse.json(
    { message: "Unauthorized" },
    { status: 401 }
  );
}

const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET!
) as { id: string };

// Save Startup Idea
const startupIdea = await prisma.startupIdea.create({
  data: {
    title,
    description: solution,
    problem,
    solution,
    industry,
    stage,
    tags: [],
    userId: decoded.id,
  },
});

// Save AI Report
await prisma.aIReport.create({
  data: {
    validationScore: report.validationScore,
    marketAnalysis: report.marketAnalysis,
    competitorAnalysis: report.competitorAnalysis,
    swotAnalysis: report.swotAnalysis,
    businessModel: report.businessModel,
    mvpPlan: report.mvpPlan,
    goToMarketStrategy: report.goToMarketStrategy,
    risks: report.risks,
    roadmap: report.roadmap,
    investorPitch: report.investorPitch,
    startupIdeaId: startupIdea.id,
  },
});

return NextResponse.json(report);

  } catch (error) {
    console.error("GEMINI ERROR:", error);

    return NextResponse.json(
      {
        message: "AI generation failed.",
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}