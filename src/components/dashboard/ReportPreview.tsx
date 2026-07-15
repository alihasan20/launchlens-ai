import { Card } from "@/components/ui/card";

const sections = [
  "Market Analysis",
  "Competitor Research",
  "Business Model",
  "SWOT Analysis",
  "MVP Roadmap",
  "Investor Pitch",
];

export default function ReportPreview() {
  return (
    <div className="mt-10">
      <h2 className="mb-6 text-3xl font-bold">
        Recent AI Report
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <Card
            key={section}
            className="rounded-3xl border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-semibold">
              {section}
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              AI generated analysis will appear here.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}