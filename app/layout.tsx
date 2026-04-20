import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_STORE_URL ?? "https://paragonn.com.br"
  ),
  title: "Paragonn — Servidor Minecraft Brasileiro",
  description: "Junte-se ao Paragonn, o melhor servidor de Minecraft do Brasil. Aventura épica, comunidade incrível e experiências únicas esperando por você.",
  keywords: ["minecraft", "servidor", "paragonn", "brasil", "pvp", "survival"],
  openGraph: {
    title: "Paragonn — Servidor Minecraft Brasileiro",
    description: "Junte-se ao Paragonn, o melhor servidor de Minecraft do Brasil.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
