import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acme Corp — We Build Solutions That Matter",
  description:
    "A trusted partner for digital transformation, innovation, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
