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
        {/* Favicon */}
        <link rel="icon" href="/assets/alosa-logo.png" />
        <link rel="apple-touch-icon" href="/assets/alosa-logo.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Alosa Arts | Custom Caricatures & Live Events" />
        <meta property="og:description" content="Get personalized caricatures from photos or live events by Louis Alosa, Nairobi, Kenya." />
        <meta property="og:image" content="/assets/alosa-logo.png" />
        <meta property="og:url" content="https://www.alosaarts.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alosa Arts | Custom Caricatures & Live Events" />
        <meta name="twitter:description" content="Get personalized caricatures from photos or live events by Louis Alosa, Nairobi, Kenya." />
        <meta name="twitter:image" content="/assets/alosa-logo.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alosa Arts",
              "url": "https://www.alosaarts.com",
              "logo": "https://www.alosaarts.com/assets/alosa-logo.png",
              "sameAs": [
                "https://www.instagram.com/mrlouisalosa",
                "http://www.x.com/mrlouisalosa",
                "https://www.tiktok.com/@mrlouisalosa?_t=ZM-9064uX9IM8G&_r=1",
                "https://www.youtube.com/louisalosa",
                "https://www.facebook.com/alosaarts"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
};