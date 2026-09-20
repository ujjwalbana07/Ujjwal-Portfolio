import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujjwal Bana | Data Engineering & Applied AI",
  openGraph: {
    title: "Ujjwal Bana | Data Engineering & Applied AI",
    description: "Data pipelines, distributed systems, and applied AI. Explore my projects and engineering experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ujjwal Bana | Data Engineering & Applied AI",
    description: "Data pipelines, distributed systems, and applied AI.",
  },
  description: "Ujjwal Bana, MS-MIS student at Texas A&M and former Oracle consultant. Explore projects in data engineering, distributed systems, RAG, and agentic AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
