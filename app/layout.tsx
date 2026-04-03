import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studies Learning | L'avant-garde de l'apprentissage",
  description:
    "Rejoignez l'élite digitale. Plus de distractions. Uniquement un savoir pur et condensé pour accélérer votre trajectoire.",
  openGraph: {
    title: "Studies Learning",
    description:
      "Rejoignez l'élite digitale. Uniquement un savoir pur et condensé.",
    images: [
      {
        url: "/assets/working-people.png",
        width: 1200,
        height: 630,
        alt: "Studies Learning - Mode Switching",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studies Learning | L'avant-garde de l'apprentissage",
    description: "Plus de distractions. Uniquement un savoir pur et condensé.",
    images: ["/assets/working-people.png"],
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
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
