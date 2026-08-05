import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avnue Dev | Topup & Rekber Terpercaya",
  description: "Platform topup game dan rekber transaksi aman dengan sistem realtime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
        <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
