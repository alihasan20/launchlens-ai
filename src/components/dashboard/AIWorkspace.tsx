"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function AIWorkspace() {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("IDEA");

  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState<any>(null);

  async function handleGenerate() {
    if (!title || !problem || !solution || !industry) {
      toast.error("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          problem,
          solution,
          industry,
          stage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return;
      }

      setReport(data);
      toast.success("AI Report Generated!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h2 className="text-4xl font-bold">
          AI Startup Validator
        </h2>

        <p className="mt-3 text-slate-400">
          Describe your startup idea and let AI analyze it.
        </p>

        <div className="mt-8 space-y-5">

          <Input
            placeholder="Startup Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="What problem are you solving?"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />

          <Textarea
            placeholder="Describe your solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
          />

          <Input
            placeholder="Industry (FinTech, EdTech, HealthTech...)"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />

          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-slate-900 p-3 text-white"
          >
            <option value="IDEA">Idea</option>
            <option value="MVP">MVP</option>
            <option value="EARLY_STAGE">Early Stage</option>
            <option value="GROWTH">Growth</option>
          </select>

          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500"
          >
            {loading
              ? "Generating AI Report..."
              : "✨ Generate Business Report"}
          </Button>

        </div>
      </div>
        {report && (
    <div className="mt-10 grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          📊 Validation Score
        </h3>

        <p className="mt-4 text-4xl font-bold text-cyan-400">
          {report.validationScore}/100
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          📈 Market Analysis
        </h3>

        <p className="mt-4 text-slate-300">
          {report.marketAnalysis}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          🏆 Competitor Analysis
        </h3>

        <p className="mt-4 text-slate-300">
          {report.competitorAnalysis}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          💼 Business Model
        </h3>

        <p className="mt-4 text-slate-300">
          {report.businessModel}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          ⚠️ SWOT Analysis
        </h3>

        <p className="mt-4 text-slate-300">
          {report.swotAnalysis}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          🚀 MVP Plan
        </h3>

        <p className="mt-4 text-slate-300">
          {report.mvpPlan}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          📣 Go To Market Strategy
        </h3>

        <p className="mt-4 text-slate-300">
          {report.goToMarketStrategy}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold">
          ⚠️ Risks
        </h3>

        <p className="mt-4 text-slate-300">
          {report.risks}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
        <h3 className="text-xl font-bold">
          🗺️ Roadmap
        </h3>

        <p className="mt-4 text-slate-300 whitespace-pre-line">
          {report.roadmap}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
        <h3 className="text-xl font-bold">
          🎤 Investor Pitch
        </h3>

        <p className="mt-4 text-slate-300 whitespace-pre-line">
          {report.investorPitch}
        </p>
      </div>

    </div>
  )}
    </div>
  );
}