"use client";

import Image from "next/image";
import Link from "next/link";

const primaryWhatsappHref =
  "https://wa.me/5216147464430?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[#0c5ce6]/20 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image src="/brand/techo2.png" alt="Hernández Impermeabilizaciones" width={64} height={64} />
          <div className="min-w-0 leading-tight">
            <p className="font-bold text-white">Hernández</p>
            <p className="truncate text-xs text-[#cfe4ff]">Impermeabilizaciones &amp; Poliuretano</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-white/80 md:flex">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#beneficios" className="transition hover:text-white">
            Beneficios
          </a>
          <a href="#proceso" className="transition hover:text-white">
            Proceso
          </a>
          <a href="#impacto" className="transition hover:text-white">
            Valor
          </a>
          <a href="#galeria" className="transition hover:text-white">
            Galería
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={primaryWhatsappHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-500/20 px-3 py-2 text-xs font-bold text-emerald-100 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-500/30 sm:hidden"
          >
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="hidden items-center rounded-lg bg-[#f3992e] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] sm:inline-flex"
          >
            Cotiza ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
