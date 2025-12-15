"use client";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-[#0c5ce6]/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-hernandez.svg"
            alt="Hernández Impermeabilizaciones"
            width={44}
            height={44}
            className="rounded"
          />
          <div className="leading-tight">
            <p className="text-white font-bold">Hernández</p>
            <p className="text-xs text-[#cfe4ff]">
              Impermeabilizaciones &amp; Poliuretano
            </p>
          </div>
        </Link>

        {/* MENÚ */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/80">
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#beneficios" className="hover:text-white transition">Beneficios</a>
          <a href="#proceso" className="hover:text-white transition">Proceso</a>
          <a href="#galeria" className="hover:text-white transition">Galería</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center rounded-lg bg-[#f3992e] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
        >
          Cotiza ahora
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
