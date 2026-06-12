import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Demo {
  id: string;
  title: string;
  description: string;
  video: string;
  category: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface PricingPlan {
  name: string;
  setupFee: string;
  monthlyFee: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ROIMetric {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
