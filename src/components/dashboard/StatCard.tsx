import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-slate-400">
        {title}
      </p>
    </Card>
  );
}