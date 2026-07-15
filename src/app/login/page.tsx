"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      setLoading(false);
      return;
    }

    toast.success(data.message);

    router.push("/dashboard");
    router.refresh();
  } catch {
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
}
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border bg-transparent p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg border bg-transparent p-3"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 p-3 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}