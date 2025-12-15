import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hernández Impermeabilizaciones y Poliuretano",
  description:
    "Servicio especializado en impermeabilización y aislamiento con espuma de poliuretano para techos, naves y cámaras frías.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
