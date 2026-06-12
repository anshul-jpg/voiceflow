import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-white">
          &larr; Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: June 12, 2026</p>

        <div className="prose-invert mt-12 space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using {SITE.name} services, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Service Description</h2>
            <p className="mt-3 leading-relaxed">
              {SITE.name} provides AI-powered voice agent and receptionist services for businesses.
              Services include call answering, appointment scheduling, lead qualification, and related features
              as described in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Payment Terms</h2>
            <p className="mt-3 leading-relaxed">
              Setup fees and monthly subscription fees are billed as described in your selected pricing plan.
              All fees are non-refundable unless otherwise stated in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms? Reach us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
