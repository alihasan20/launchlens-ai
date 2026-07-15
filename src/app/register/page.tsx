"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border bg-transparent p-3"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border bg-transparent p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border bg-transparent p-3"
          />

          <button
            className="w-full rounded-lg bg-indigo-600 p-3"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}