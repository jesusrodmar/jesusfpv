import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JESUS FPV — Drones FPV Cinemáticos en Español",
    template: "%s | JESUS FPV",
  },
  description:
    "El hub de referencia para FPV cinemático en español. Guías técnicas, reviews honestas, normativa AESA y tienda de afiliados.",
  keywords: ["drones FPV", "FPV España", "cinewhoop", "betaflight", "AESA", "drones cinemáticos"],
  authors: [{ name: "Jesús FPV" }],
  creator: "Jesús FPV",
  metadataBase: new URL("https://jesusfpv.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "JESUS FPV",
    title: "JESUS FPV — Drones FPV Cinemáticos en Español",
    description:
      "El hub de referencia para FPV cinemático en español. Guías técnicas, reviews honestas, normativa AESA y tienda de afiliados.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "JESUS FPV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JESUS FPV — Drones FPV Cinemáticos en Español",
    description: "El hub de referencia para FPV cinemático en español.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon150x150.png",
    shortcut: "/favicon150x150.png",
    apple: "/favicon150x150.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${exo2.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-negro">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
