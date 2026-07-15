"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-36">

      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <motion.span
          initial={{ opacity:0,y:20 }}
          animate={{ opacity:1,y:0 }}
          className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm"
        >
          🚀 AI Powered Founder Workspace
        </motion.span>

        <motion.h1
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.2 }}
          className="mx-auto mt-8 max-w-5xl text-7xl font-black leading-tight"
        >
          Validate Startup Ideas
          <br />

          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Before You Build Them
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.4 }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300"
        >
          LaunchLens AI analyzes your startup idea,
          identifies competitors,
          creates a business model,
          estimates market demand,
          generates an MVP roadmap,
          and prepares an investor pitch in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.6 }}
          className="mt-12 flex justify-center gap-5"
        >
          <Button size="lg">
            Validate Startup
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Live Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.8 }}
          className="mt-16 flex justify-center gap-10 text-slate-400"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">500+</h2>
            Founders
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">1200+</h2>
            Reports
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">94%</h2>
            Accuracy
          </div>
        </motion.div>

      </div>

    </section>
  );
}