import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReelDrop",
  description: "A film recommendation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="h-screen dark:bg-gray-950">{children}</body>
    </html>
  );
}
