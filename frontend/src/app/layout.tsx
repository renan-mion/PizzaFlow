import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "PizzaFlow",
  description: "A melhor solução para a sua pizzaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
