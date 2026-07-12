import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const monaSans = Mona_Sans({
  axes: ["wdth"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mona-sans",
  weight: "variable"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aniekanwinner.dev"),
  title: {
    default: "Aniekan Winner Anietie | Full-Stack Software Engineer",
    template: "%s | Aniekan Winner"
  },
  description:
    "Full-stack software engineer and technical founder building secure multi-tenant platforms, AI systems, and production products with Go, Python, React, and TypeScript.",
  keywords: ["Full-Stack Engineer", "Go", "Python", "Next.js", "AI Engineer", "Multi-tenant Platforms", "Nigeria"],
  openGraph: {
    title: "Aniekan Winner Anietie | Full-Stack Software Engineer",
    description: "Secure multi-tenant platforms, AI systems, and product engineering.",
    type: "website",
    url: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='theme';var t=localStorage.getItem(k);if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`}
        </Script>
      </head>
      <body className={`${monaSans.variable} bg-background text-foreground antialiased`}>
        <div className="relative flex min-h-screen flex-col pb-24 xl:pb-0">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
