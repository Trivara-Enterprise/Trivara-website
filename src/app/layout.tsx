import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";

const leaner = localFont({
  src: [
    
    {
      path: "../font/LeanerBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-leaner",
});

const Pertili = localFont({
  src:[
    {
      path : "../font/pertili.ttf"
    }
  ],
  variable : "--font-pertili"
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trivara - Coming Soon | Scalable Software Solutions",
  description:
    "Trivara is building scalable software solutions that transform how businesses operate. Sign up to be notified when we launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${leaner.variable} ${outfit.variable} ${Pertili.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
