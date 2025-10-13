import type { Metadata } from "next";
import "./globals.css";
import { inter, fredoka } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Alosa Arts",
  description: "Cartoon artist based in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
