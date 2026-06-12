import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VoiceFlow AI | AI Receptionists & Voice Agents for Business",
    template: "%s | VoiceFlow AI",
  },
  description:
    "Never miss another customer call. AI voice agents that answer calls, book appointments, qualify leads, and support customers 24/7.",
  keywords: [
    "AI receptionist",
    "AI voice agent",
    "appointment booking",
    "dental AI",
    "law firm AI",
    "real estate AI",
    "call answering service",
  ],
  authors: [{ name: "VoiceFlow AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VoiceFlow AI",
    title: "VoiceFlow AI | Never Miss Another Customer Call",
    description:
      "AI voice agents that answer calls, book appointments, qualify leads, and support customers 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceFlow AI | AI Receptionists for Business",
    description:
      "Never miss another customer call. AI voice agents for dental clinics, law firms, real estate, and more.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "VoiceFlow AI",
      url: "https://voiceflowai.com",
      description:
        "AI receptionists and voice agents for dental clinics, law firms, real estate agencies, and local service businesses.",
    },
    {
      "@type": "SoftwareApplication",
      name: "VoiceFlow AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI voice agents that answer calls, book appointments, qualify leads, and support customers 24/7.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
