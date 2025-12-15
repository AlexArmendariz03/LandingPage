import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PolyProtect | Soluciones en Poliuretano",
  description: "Aislamiento térmico, impermeabilización y protección con espuma de poliuretano profesional.",
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
