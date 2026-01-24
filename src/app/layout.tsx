import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trivara.in"),
  title: "Trivara | Cutting-Edge Software for Traditional Industries",
  description:
    "Trivara builds modern enterprise software for traditional industries worldwide. We digitize operations, automate workflows, and transform businesses with scalable technology solutions.",
  keywords: [
    "enterprise software",
    "fleet management",
    "transportation software",
    "logistics automation",
    "digital transformation",
    "SaaS",
    "business automation",
    "workflow automation",
    "custom software development",
    "Trivara",
  ],
  authors: [{ name: "Trivara Enterprises" }],
  creator: "Trivara Enterprises",
  publisher: "Trivara Enterprises",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trivara.in",
    siteName: "Trivara",
    title: "Trivara | Cutting-Edge Software for Traditional Industries",
    description:
      "Trivara builds modern enterprise software for traditional industries. Transform your business with scalable technology solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trivara - Modernizing Traditional Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivara | Cutting-Edge Software for Traditional Industries",
    description:
      "Trivara builds modern enterprise software for traditional industries. Transform your business with scalable technology solutions.",
    images: ["/images/og-image.png"],
    creator: "@trivara_in",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
