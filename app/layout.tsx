import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavbarDemo } from "@/components/navbar";
import ScrollReset from "@/components/scroll-reset";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milpitas Xtreme Robotics",
  description: "Milpitas High School's official VEX, FTC, and FRC robotics club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
          <ScrollReset />
          <div id="header" className="relative w-full z-50">
            <NavbarDemo />
          </div>
          <div id="content">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
