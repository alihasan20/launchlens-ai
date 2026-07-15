"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold">
            LaunchLens AI
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#contact">Contact</a>
        </nav>

        <Button>Get Started</Button>
      </div>
    </header>
  );
}