"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DEMOS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DemoSection() {
  const [activeId, setActiveId] = useState(DEMOS[0].id);
  const activeDemo = DEMOS.find((d) => d.id === activeId) ?? DEMOS[0];

  return (
    <section id="demo" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Live Demos"
            title="See Your AI Receptionist"
            highlight="In Action"
            description="Watch real conversations across industries. Upload your own demo videos to /public/videos and they'll appear automatically."
          />
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl ring-1 ring-white/5">
            <div className="relative aspect-video bg-surface-elevated">
              <video
                key={activeDemo.id}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={activeDemo.video} type="video/mp4" />
              </video>
            </div>
            <div className="border-t border-border px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-blue-400 uppercase">
                    {activeDemo.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{activeDemo.title}</h3>
                  <p className="mt-2 text-sm text-muted">{activeDemo.description}</p>
                </div>
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 sm:flex">
                  <Play className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEMOS.map((demo, i) => (
            <FadeIn key={demo.id} delay={0.1 * i}>
              <button
                onClick={() => setActiveId(demo.id)}
                className={cn(
                  "w-full rounded-xl border p-5 text-left transition-all duration-200",
                  activeId === demo.id
                    ? "border-blue-500/40 bg-blue-500/5 ring-1 ring-blue-500/20"
                    : "border-border bg-surface hover:border-white/15 hover:bg-surface-elevated"
                )}
              >
                <p className="text-xs font-medium text-blue-400">{demo.category}</p>
                <h4 className="mt-2 text-sm font-semibold text-white">{demo.title}</h4>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                  {demo.description}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
