import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ScrollToTop } from "@/components/ScrollToTop";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitin Kanzariya | Full Stack Developer & AI Platform Engineer",
  description:
    "Nitin Kanzariya — Full Stack Developer & AI Platform Engineer based in Ahmedabad, India. I build production SaaS platforms with React, Next.js, Node.js, Python FastAPI, and LangGraph-powered RAG pipelines. View my projects, including Aegis — a multi-tenant AI customer support platform.",
  keywords:
    "Nitin Kanzariya, Full Stack Developer, AI Platform Engineer, React, Next.js, Node.js, Python FastAPI, LangGraph, RAG Pipeline, LangChain, Aegis, SaaS, Portfolio",
  authors: [{ name: "Nitin Kanzariya" }],
  openGraph: {
    title: "Nitin Kanzariya | Full Stack Developer & AI Platform Engineer",
    description:
      "Engineering AI-Powered SaaS Platforms from Zero to Production. Full Stack Developer specializing in React, Next.js, Node.js, Python FastAPI, and LangGraph RAG pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Kanzariya | Full Stack Developer & AI Platform Engineer",
    description:
      "Engineering AI-Powered SaaS Platforms from Zero to Production.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#0a0a0f] text-white">
        <CursorSpotlight />
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
