"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { ConversationUI } from "@/components/mockups/ConversationUI";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { StatCard } from "@/components/mockups/StatCard";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge className="mb-6 border-blue-500/20 bg-blue-500/10 text-blue-300">
              AI Receptionists for Business
            </Badge>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Never Miss Another{" "}
              <GradientText>Customer Call</GradientText>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              AI voice agents that answer calls, book appointments, qualify leads,
              and support customers 24/7.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Book Demo
              </Button>
              <Button href="#demo" variant="secondary" size="lg">
                <Play className="h-4 w-4" />
                Watch Live Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative z-10">
              <ConversationUI />
            </div>

            <div className="absolute -top-6 -right-4 z-20 hidden md:block">
              <StatCard
                label={HERO_STATS[0].label}
                value={HERO_STATS[0].value}
                icon={HERO_STATS[0].icon}
                delay={0.6}
              />
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 hidden md:block">
              <StatCard
                label={HERO_STATS[1].label}
                value={HERO_STATS[1].value}
                icon={HERO_STATS[1].icon}
                delay={0.8}
              />
            </div>

            <div className="mt-6 hidden lg:block">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
