import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leetrix",
  description: "Indie Pixel Games • Retro Vibes • Modern Fun",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-800 text-gray-200 min-h-screen">{children}</body>
    </html>
  );
}
