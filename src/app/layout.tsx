import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahman Arts | Professional Painting Services",
  description: "Specializing in expert painting services for buildings, pillars, roofs, elevations, interiors, exteriors, furniture, and automobiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
