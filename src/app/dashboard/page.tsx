import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import AIWorkspace from "@/components/dashboard/AIWorkspace";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="space-y-8 p-8">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Startup Ideas"
              value="12"
            />

            <StatCard
              title="AI Reports"
              value="12"
            />

            <StatCard
              title="Average Score"
              value="91%"
            />

            <StatCard
              title="Success Rate"
              value="82%"
            />

          </div>

          <AIWorkspace />

        </main>

      </div>

    </div>
  );
}