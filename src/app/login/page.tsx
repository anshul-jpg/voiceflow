"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/dashboards");
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MagneticCursor magneticFactor={0.3} cursorSize={28} blendMode="exclusion">
      <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-x-hidden">
        {/* Background glow */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(115,115,115,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-[440px] relative z-10">
          {/* Logo */}
          <div className="text-center mb-8 sm:mb-10">
            <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
              <Image src="/logo.svg" alt="Voxora" width={28} height={28} />
              <span className="text-xl font-semibold text-foreground">Voxora</span>
            </Link>
          </div>

          {/* Card */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-xl">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Welcome back
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8">
              Sign in to your Voxora dashboard
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-foreground">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors duration-200 focus:border-ring font-sans w-full"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-medium text-foreground">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-muted-foreground no-underline hover:text-foreground transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors duration-200 focus:border-ring font-sans w-full"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="bg-destructive/10 border border-destructive/25 rounded-lg px-3.5 py-2.5 text-[13px] text-destructive">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={loading}
                className={`border-none rounded-lg px-6 py-3.5 text-sm font-semibold cursor-pointer transition-opacity duration-200 font-sans tracking-wide ${
                  loading
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>

          {/* Footer link */}
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-foreground font-medium no-underline hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </MagneticCursor>
  );
}
