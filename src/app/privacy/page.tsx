import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-white">
          &larr; Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-4 text-muted">Last updated: June 20, 2026</p>

        <div className="prose-invert mt-12 space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We collect information you provide directly, such as your name, business name,
              email address, phone number, and any messages you send through our contact form.
            </p>
            <p className="mt-2 leading-relaxed">
              In addition, our AI voice agents process conversational data on behalf of your business, which includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 leading-relaxed">
              <li>Audio recordings of calls handled by the receptionist.</li>
              <li>Text transcripts of call conversations.</li>
              <li>Call logs (caller phone numbers, timestamps, duration, and routing status).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. How We Use and Process Data</h2>
            <p className="mt-3 leading-relaxed">
              We act as a data processor for the call records we capture on behalf of your business (the data controller). We use your information to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 leading-relaxed">
              <li>Operate and improve our AI receptionist voice models and conversation quality.</li>
              <li>Extract appointment bookings and qualify caller intent for your dashboard.</li>
              <li>Send lead alerts to your configured developer notification channels.</li>
              <li>Comply with security audits and legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Third-Party Sub-processors</h2>
            <p className="mt-3 leading-relaxed">
              To deliver high-performance conversational voice services, we transmit data to select sub-processors:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 leading-relaxed">
              <li><strong>Vapi Inc.</strong>: Telephony infrastructure and real-time audio routing.</li>
              <li><strong>OpenAI LLC / Anthropic PBC</strong>: Audio transcription and large language model parsing.</li>
              <li><strong>MongoDB Atlas</strong>: Secure cloud database hosting and data persistence.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. GDPR and CCPA Privacy Rights</h2>
            <p className="mt-3 leading-relaxed">
              Depending on your location, you and your callers may have the following data privacy rights:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 leading-relaxed">
              <li><strong>Right to Access</strong>: Request copies of the call logs and transcripts we hold.</li>
              <li><strong>Right to Deletion (Right to be Forgotten)</strong>: Request that we purge historical audio recordings or transcripts.</li>
              <li><strong>Right to Opt-Out</strong>: Disable recording consent mechanisms on standard inbound lines.</li>
            </ul>
            <p className="mt-2 leading-relaxed">
              To submit a data access or deletion request, please email our privacy team at <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:underline">{SITE.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Data Security & Encryption</h2>
            <p className="mt-3 leading-relaxed">
              We protect your data using industry-standard measures:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 leading-relaxed">
              <li><strong>In-Transit</strong>: All traffic is encrypted using Transport Layer Security (TLS 1.3).</li>
              <li><strong>At-Rest</strong>: Data stored in MongoDB Atlas is encrypted using AES-256 standards.</li>
              <li><strong>Access Control</strong>: Multi-factor authentication is required for all administrative access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              For privacy-related questions, contact us at{" "}
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
