import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmy Studio",
  description:
    "Professional Video Editor, Motion Graphics Designer & Graphic Designer.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Jimmy Studio",
    description:
      "Professional Video Editor, Motion Graphics Designer & Graphic Designer.",
    url: "https://jimmystudio.vercel.app",
    siteName: "Jimmy Studio",
    images: [
      {
        url: "/images/ahmed.jpg",
        width: 1200,
        height: 630,
        alt: "Jimmy Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jimmy Studio",
    description:
      "Professional Video Editor, Motion Graphics Designer & Graphic Designer.",
    images: ["/images/ahmed.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}