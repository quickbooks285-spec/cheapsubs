"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "oklch(0.97 0.02 250)" }}>
      <div className="bg-white rounded-2xl p-10 max-w-sm w-full shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-1" style={{ color: "oklch(0.20 0.05 250)" }}>
            Dashboard
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.45 0.012 250)" }}>
            Enter your password to continue
          </p>
        </div>

        <form action={action} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "oklch(0.30 0.05 250)" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
              style={{ color: "oklch(0.20 0.05 250)" }}
            />
            {state?.error && (
              <p className="text-xs text-red-500 mt-1.5">{state.error}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={pending}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-5 rounded-xl transition-all"
          >
            {pending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            {pending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
