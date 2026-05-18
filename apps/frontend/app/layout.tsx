import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIMBUS | Enterprise Infrastructure OS",
  description: "Plateforme autonome pour infrastructure, données, sécurité, DevOps et IA."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
