import "./globals.css";
import Navbar from "@/app/components/navBar";

export const metadata = {
  title: "Hernández Impermeabilizaciones y Poliuretano",
  description:
    "Servicio especializado en impermeabilización y aislamiento con espuma de poliuretano para techos, naves y cámaras frías.",
  title: "PolyProtect | Soluciones en Poliuretano",
  description: "Aislamiento térmico, impermeabilización y protección con espuma de poliuretano profesional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 font-sans">
      <body className={`${inter.className} bg-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
