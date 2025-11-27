import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, fredoka } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Alosa Arts",
  description: "Cartoon artist based in Nairobi, Kenya.",
  keywords: ["caricature", "cartoon", "artist", "Nairobi", "Kenya", "digital art", "illustration"],
  authors: [{ name: "Alosa Arts" }],
  creator: "Alosa Arts",
};

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
        {/* You can add additional meta tags here if needed */}
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}