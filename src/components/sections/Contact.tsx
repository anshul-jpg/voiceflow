"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              badge="Contact"
              title="Book Your"
              highlight="Free Demo"
              description="See how VoiceFlow can transform your call handling. We'll walk you through a live demo tailored to your industry."
              align="left"
            />

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white transition-colors hover:text-blue-400"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-white transition-colors hover:text-blue-400"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12 text-center">
                <CheckCircle className="h-12 w-12 text-green-400" />
                <h3 className="mt-4 text-xl font-semibold text-white">Thank you!</h3>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ll be in touch within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-2 block text-sm text-muted">
                      Business
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Smile Dental Clinic"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="john@smiledental.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={inputClass}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn(inputClass, "resize-none")}
                    placeholder="Tell us about your business and call volume..."
                  />
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full">
                  Book Demo
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30";
