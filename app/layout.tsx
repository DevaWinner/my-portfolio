import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aniekan Winner Anietie | Software Engineer",
  description:
    "Portfolio of Aniekan Winner Anietie - Software Engineer focused on healthcare and fintech engineering, high-performance backend systems, and product delivery outcomes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='theme';var t=localStorage.getItem(k);if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`}
        </Script>
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
