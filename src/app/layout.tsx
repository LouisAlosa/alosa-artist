import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, fredoka } from "@/ui/fonts";
import { createMetadata, SITE_DESCRIPTION } from "@/lib/seo";
import SeoJsonLd from "@/app/components/seo/SeoJsonLd";

export const metadata: Metadata = createMetadata({
  title: undefined,
  description: SITE_DESCRIPTION,
  path: "/",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable} antialiased`}>
      <head>
        {/* JSON-LD: Organization + WebSite */}
        <SeoJsonLd type="localBusiness" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
};