import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from "gt-next/server";
import { GTProvider } from "gt-next";

export const metadata: Metadata = {
  title: "GT Demo",
  description: "General Translation library demo"
};

export default async function RootLayout({
  children


}: {children: React.ReactNode;}) {
  return (
  <html lang={await getLocale()}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased"><GTProvider>
        {children}
      </GTProvider></body>
    </html>
  );
}