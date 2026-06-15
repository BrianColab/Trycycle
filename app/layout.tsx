import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TryCycle — Innovative Solutions. Stronger Communities.",
    template: "%s | TryCycle",
  },
  description:
    "TryCycle delivers culturally responsive digital health tools — supporting Indigenous communities, veterans, youth, and healthcare organizations across Canada.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://trycycle.ca"),
  openGraph: {
    type: "website",
    siteName: "TryCycle",
    title: "TryCycle — Innovative Solutions. Stronger Communities.",
    description:
      "TryCycle delivers culturally responsive digital health tools — supporting Indigenous communities, veterans, youth, and healthcare organizations across Canada.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="section-light">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
