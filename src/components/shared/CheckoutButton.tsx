"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X, ArrowRight, Loader2 } from "lucide-react";

interface CheckoutButtonProps {
  label: string;
  stripeUrl: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function CheckoutButton({ label, stripeUrl, className, size = "default" }: CheckoutButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetch("/api/save-email", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = stripeUrl;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <Button size={size} className={className} onClick={() => setOpen(true)}>
        {label}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              className="absolute top-4 right-4 transition-colors"
              style={{ color: "oklch(0.65 0.01 250)" }}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "oklch(0.20 0.05 250)" }}
              >
                Almost there!
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.45 0.012 250)" }}>
                Enter your email to continue to checkout.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.30 0.05 250)" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all",
                    "border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                  )}
                  style={{ color: "oklch(0.20 0.05 250)" }}
                />
                {error && (
                  <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-5 rounded-xl transition-all"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 mr-2" />
                )}
                {loading ? "Processing..." : "Continue to Checkout"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
