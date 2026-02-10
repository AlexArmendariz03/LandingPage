import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/app/components/navBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hernández Impermeabilizaciones y Poliuretano",
  description:
    "Servicio especializado en impermeabilización y aislamiento con espuma de poliuretano para techos, naves y cámaras frías.",
  icons: {
    icon: "/brand/techoBlanco.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
