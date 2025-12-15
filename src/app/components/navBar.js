"use client";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/FictiCorp.webp" alt="PolyProtect" width={36} height={36} className="rounded" />
          <div className="leading-tight">
            <p className="text-white font-bold">PolyProtect</p>
            <p className="text-xs text-emerald-200">Espuma de poliuretano</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/80">
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#beneficios" className="hover:text-white transition">Beneficios</a>
          <a href="#proceso" className="hover:text-white transition">Proceso</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>
        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] transition"
        >
          Cotiza ahora
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
