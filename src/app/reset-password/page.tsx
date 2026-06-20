"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or missing password recovery token.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setError(data.message || "Failed to reset password. The link may have expired.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] relative">
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
          Choose new password
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mb-8">
          Please enter your new password below.
        </p>

        {!token ? (
          <div className="bg-destructive/10 border border-destructive/25 rounded-lg p-4 text-[13px] text-destructive text-center">
            Missing or invalid reset token. Please request a new password reset link.
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-foreground">
                New Password
              </label>
              <input
                id="reset-password-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors duration-200 focus:border-ring font-sans w-full"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-foreground">
                Confirm New Password
              </label>
              <input
                id="reset-confirm-password-input"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors duration-200 focus:border-ring font-sans w-full"
              />
            </div>

            {/* Error Info */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/25 rounded-lg px-3.5 py-2.5 text-[13px] text-destructive">
                {error}
              </div>
            )}

            {/* Success Info */}
            {success && (
              <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-lg px-3.5 py-2.5 text-[13px] text-emerald-400">
                Password successfully updated! Redirecting to login page…
              </div>
            )}

            {/* Submit */}
            <button
              id="reset-submit"
              type="submit"
              disabled={loading || success}
              className={`border-none rounded-lg px-6 py-3.5 text-sm font-semibold cursor-pointer transition-opacity duration-200 font-sans tracking-wide ${
                loading || success
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              {loading ? "Updating password…" : "Reset Password"}
            </button>
          </form>
        )}
      </div>

      {/* Footer link */}
      <p className="text-center mt-6 text-sm text-muted-foreground">
        Back to{" "}
        <Link href="/login" className="text-foreground font-medium no-underline hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <MagneticCursor magneticFactor={0.3} cursorSize={28} blendMode="exclusion">
      <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-x-hidden">
        {/* Background glow */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(115,115,115,0.12)_0%,transparent_70%)] pointer-events-none" />
        <Suspense fallback={
          <div className="text-muted-foreground text-sm">
            Loading password reset form…
          </div>
        }>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </MagneticCursor>
  );
}
