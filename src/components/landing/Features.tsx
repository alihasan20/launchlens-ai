"use client";

import { Card } from "@/components/ui/card";
import {
  Brain,
  BarChart3,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    title: "AI Validation",
    description:
      "Analyze startup ideas using AI and receive an overall validation score.",
    icon: Brain,
  },
  {
    title: "Market Analysis",
    description:
      "Understand market demand, trends, and potential opportunities.",
    icon: TrendingUp,
  },
  {
    title: "Competitor Research",
    description:
      "Identify competitors and discover what makes your idea stand out.",
    icon: Target,
  },
  {
    title: "Business Model",
    description:
      "Generate a sustainable revenue model tailored to your startup.",
    icon: BarChart3,
  },
  {
    title: "Roadmap",
    description:
      "Receive a step-by-step roadmap from MVP to product launch.",
    icon: Rocket,
  },
  {
    title: "Investor Pitch",
    description:
      "Generate a compelling investor pitch powered by AI.",
    icon: Lightbulb,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          LaunchLens AI gives founders every tool needed to validate,
          improve, and launch their startup.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-indigo-500/30 hover:shadow-2xl"
              >
                <Icon className="mb-6 h-10 w-10 text-indigo-500" />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}