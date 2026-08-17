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
    <nav className="sticky top-0 z-20 glass-panel !border-x-0 !border-t-0 !bg-ink-950/80">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/brand/techo2.png" alt="Hernández Impermeabilizaciones" width={64} height={64} className="drop-shadow-[0_4px_12px_rgba(12,92,230,0.35)]" />
          <div className="leading-tight">
            <p className="text-white font-bold tracking-tight">Hernández</p>
            <p className="text-[11px] uppercase tracking-wide text-brand-blueSoft/80">Impermeabilizaciones &amp; Poliuretano</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 transition hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-brand-blueSoft to-brand-orange transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a href="#contacto" className="btn-primary hidden md:inline-flex !px-4 !py-2 !text-sm">
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
        <div className="border-t border-white/10 bg-ink-950/95 px-6 py-4 space-y-1 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Cotiza ahora
          </a>
        </div>
      )}
    </nav>
  );
}
