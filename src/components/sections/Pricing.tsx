"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Pricing"
            title="Simple, Transparent"
            highlight="Pricing"
            description="Choose the plan that fits your call volume. All plans include setup, training, and ongoing support."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-blue-500/40 bg-gradient-to-b from-blue-500/5 to-surface ring-1 ring-blue-500/20"
                    : "border-border bg-surface"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>

                <div className="mt-6 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted">Setup</span>
                    <span className="text-2xl font-semibold text-white">{plan.setupFee}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted">Monthly</span>
                    <span className="text-2xl font-semibold text-white">{plan.monthlyFee}</span>
                    {plan.monthlyFee !== "Custom" && (
                      <span className="text-sm text-muted">/mo</span>
                    )}
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
