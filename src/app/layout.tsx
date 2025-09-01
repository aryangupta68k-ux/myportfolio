import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vedant",
  description: "interaction designer",
  keywords: ["vedant", "interaction designer", "portfolio", "ciid", "bergamo"],
  authors: [{ name: "vedant" }],
  openGraph: {
    title: "vedant",
    description: "interaction designer",
    url: "https://vedantja.in",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 2700,
        height: 1440,
        alt: "vedant - interaction designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vedant",
    description: "interaction designer",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-base">
        <main className="text-base">
          {children}
        </main>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6cca06cd-9605-4ce0-9b93-7c0ef0222812"
        />
      </body>
    </html>
  );
}
