"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#impacto", label: "Valor" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-[#0c5ce6]/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/brand/techo2.png" alt="Hernández Impermeabilizaciones" width={80} height={80} />
          <div className="leading-tight">
            <p className="text-white font-bold">Hernández</p>
            <p className="text-xs text-[#cfe4ff]">Impermeabilizaciones &amp; Poliuretano</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-lg bg-[#f3992e] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
        >
          Cotiza ahora
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white/90 hover:bg-white/10 transition md:hidden"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 space-y-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#f3992e] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
          >
            Cotiza ahora
          </a>
        </div>
      )}
    </nav>
  );
}
