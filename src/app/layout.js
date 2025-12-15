import "./globals.css";
import Navbar from "@/app/components/navBar";

export const metadata = {
  title: "Hernández Impermeabilizaciones y Poliuretano",
  description:
    "Servicio especializado en impermeabilización y aislamiento con espuma de poliuretano para techos, naves y cámaras frías.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
