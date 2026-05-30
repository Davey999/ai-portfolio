import type { Metadata } from "next";
import { Syne, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["100"],
});

const inter = Inter({
  variable: "--font-prose",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "David Merry | Practical AI for Finance",
  description:
    "Practical AI techniques and tools for finance professionals. Workflows, case studies, and articles from a Director of Finance and Chartered Accountant.",
  openGraph: {
    title: "David Merry | Practical AI for Finance",
    description:
      "Practical AI techniques and tools for finance professionals.",
    type: "website",
    url: "https://davidmerry.me",
  },
  twitter: {
    card: "summary",
    title: "David Merry | Practical AI for Finance",
    description:
      "Practical AI techniques and tools for finance professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-body antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="pb-[10vh]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
