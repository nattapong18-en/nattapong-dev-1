import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nattpong-Dev",
  description: "A minimal foundation for a future interactive portfolio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
