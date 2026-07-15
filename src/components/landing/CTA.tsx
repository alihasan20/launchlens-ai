"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-10 py-20 text-center text-white">
        <h2 className="text-5xl font-bold">
          Ready to Validate Your Startup?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Stop guessing. Let AI analyze your startup idea and help
          you build something investors will love.
        </p>

        <Button
          size="lg"
          variant="secondary"
          className="mt-10"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}