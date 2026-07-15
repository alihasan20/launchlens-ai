"use client";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-full border border-white/10 p-3">
          <Bell />
        </button>

        <Avatar>
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}