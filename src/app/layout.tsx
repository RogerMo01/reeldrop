import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/ThemeProvider";

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
    <html lang="en" className="bg-background-light dark:bg-background-dark" suppressHydrationWarning>
      <body className="h-dvh">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
