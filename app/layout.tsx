import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leetrix",
  description: "Indie Pixel Games • Retro Vibes • Modern Fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-dark-800 text-gray-200 min-h-screen ${pressStart.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
