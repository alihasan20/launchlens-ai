"use client";

const steps = [
  {
    title: "Submit Idea",
    description: "Describe your startup idea in detail.",
  },
  {
    title: "AI Analysis",
    description: "LaunchLens analyzes your idea using AI.",
  },
  {
    title: "Review Report",
    description: "Receive business insights and recommendations.",
  },
  {
    title: "Build Faster",
    description: "Improve your startup using AI suggestions.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}