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
        <p className="mt-4 text-muted">Last updated: June 12, 2026</p>

        <div className="prose-invert mt-12 space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We collect information you provide directly, such as your name, business name,
              email address, phone number, and any messages you send through our contact form.
              We also collect call data processed by our AI voice agents on behalf of your business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed">
              We use your information to provide and improve our AI receptionist services,
              respond to inquiries, send service-related communications, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement industry-standard security measures including encryption in transit and at rest,
              access controls, and regular security audits to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
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
