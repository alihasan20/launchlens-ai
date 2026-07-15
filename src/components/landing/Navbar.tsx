"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            LaunchLens AI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#how"
            className="transition-colors hover:text-cyan-400"
          >
            How it Works
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-cyan-400"
          >
            Contact
          </a>

          <Link href="/login">
            <Button
              variant="outline"
              className="w-28"
            >
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button variant="outline" className="w-28">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Link href="/register">
            <Button size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}