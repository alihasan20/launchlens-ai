"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Sparkles,
  FolderOpen,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Workspace",
    href: "/dashboard",
    icon: Sparkles,
  },
  {
    title: "My Startups",
    href: "/dashboard/startups",
    icon: FolderOpen,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-white/10 bg-slate-950 lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-6">
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
          LaunchLens AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Founder Workspace
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all hover:bg-indigo-600 hover:text-white"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-5">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10">
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}