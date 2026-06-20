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
        <p className="mt-4 text-muted">Last updated: June 20, 2026</p>

        <div className="prose-invert mt-12 space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using {SITE.name} services, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Service Description</h2>
            <p className="mt-3 leading-relaxed">
              {SITE.name} provides AI-powered voice agent and receptionist services for businesses.
              Services include call answering, appointment scheduling, lead qualification, and related features
              as described in your service agreement. We reserve the right to modify, suspend, or discontinue any part of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Call Recording and Consent (Wiretapping Laws)</h2>
            <p className="mt-3 leading-relaxed">
              Our AI voice receptionists record and transcribe calls to handle booking, take messages, and improve dialogue quality. 
              **You are solely responsible for complying with all applicable local, state, federal, and international wiretapping and recording consent laws.**
            </p>
            <p className="mt-2 leading-relaxed">
              In jurisdictions requiring two-party or all-party consent (such as California, Florida, Massachusetts, etc.), you must ensure that our AI agent explicitly states at the beginning of the call that the conversation is being recorded or monitored (e.g. \"Hi, I am an AI assistant. This call is recorded for quality purposes\"). You agree to defend, indemnify, and hold harmless {SITE.name} from any claims arising from your failure to obtain required caller consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. HIPAA and Medical Data Disclaimer</h2>
            <p className="mt-3 leading-relaxed">
              If you utilize {SITE.name} to receive calls for healthcare, medical, dental, or clinical services, you acknowledge that transmission of Protected Health Information (PHI) is subject to HIPAA regulations. 
            </p>
            <p className="mt-2 leading-relaxed">
              Our default service tier is not configured to act as a HIPAA Business Associate. You must not input, process, or allow our AI agents to capture PHI unless you have executed a formal Business Associate Agreement (BAA) with us. Contact our support team at <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:underline">{SITE.email}</a> to request a BAA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Account Registration and Security</h2>
            <p className="mt-3 leading-relaxed">
              To manage call logs and leads, you must register for an admin account. You are responsible for safeguarding your credentials (including passwords) and agree to notify us immediately of any unauthorized use or security breaches.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Subscription Billing and Payments</h2>
            <p className="mt-3 leading-relaxed">
              Setup fees and monthly subscription fees are billed as described in your selected pricing plan. Billing is conducted in advance, and all charges are non-refundable unless explicitly stated otherwise in your separate service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Data Retention</h2>
            <p className="mt-3 leading-relaxed">
              We retain call transcripts, recording files, and lead information for the duration of your active subscription. Upon account termination, we delete data in accordance with our standard retention policies, unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Governing Law and Disputes</h2>
            <p className="mt-3 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any dispute arising from these terms shall be resolved exclusively through binding arbitration in our designated jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Contact</h2>
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
