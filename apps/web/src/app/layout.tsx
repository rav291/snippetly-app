import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snippetly — Turn Your Content Into Viral Tweets in Seconds",
  description:
    "Stop manually repurposing content. Snippetly analyzes your long-form content and generates authentic, engagement-ready tweets that sound like you. Join 50,000+ creators.",
  keywords: [
    "tweet generator",
    "content repurposing",
    "AI tweets",
    "social media",
    "creator tools",
    "snippetly",
  ],
  authors: [{ name: "Snippetly" }],
  openGraph: {
    title: "Snippetly — Turn Your Content Into Viral Tweets",
    description:
      "AI-powered tweet generation from transcripts, articles, and notes. Save 3+ hours per week on content creation.",
    type: "website",
    siteName: "Snippetly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snippetly — Turn Your Content Into Viral Tweets",
    description:
      "AI-powered tweet generation from transcripts, articles, and notes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
