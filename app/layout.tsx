/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import NavRail, { MobileNavBar } from "@/components/nav-rail";
import { MaterialInit } from "@/components/material-init";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Tianwei Du · Clinical Psychology",
  description:
    "Culturally responsive clinical psychology, research, and community engagement led by Dr. Tianwei Du.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)]`}
      >
        <MaterialInit />
        <div className="flex min-h-screen bg-[var(--md-sys-color-surface)]">
          <NavRail />
          <div className="flex min-h-screen flex-1 flex-col bg-[var(--md-sys-color-surface)]">
            <MobileNavBar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
