import type { Metadata } from "next";
import { Toaster } from "sonner";
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
        <Toaster
          position="bottom-right"
          duration={5000}
          richColors
          toastOptions={{
            style: {
              fontSize: '1.2rem',
            }
          }} />
        {children}
      </body>
    </html>
  );
}
