import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Cauan Aguiar | Desenvolvedor .NET",
  description: "Portfolio de Cauan Aguiar — Desenvolvedor .NET com experiência em C#, ASP.NET Core, WebForms, SQL Server, migração de legados e IA aplicada ao desenvolvimento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
