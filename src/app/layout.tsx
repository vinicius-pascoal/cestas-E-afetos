import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cestas E Afetos",
  description: "Loja de cestas de cafe da manha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
