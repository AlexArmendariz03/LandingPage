"use client";

import Image from "next/image";
import Link from "next/link";
import { getNavigationLinks } from "@/modules/landing/application/use-cases/getNavigationLinks";

const navigationLinks = getNavigationLinks();

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-[#0c5ce6]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3 sm:gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image src="/brand/techo2.png" alt="Hernández Impermeabilizaciones" width={80} height={80} />
          <div className="leading-tight min-w-0">
            <p className="text-white font-bold truncate">Hernández</p>
            <p className="text-xs text-[#cfe4ff] truncate">Impermeabilizaciones &amp; Poliuretano</p>
          </div>
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm font-semibold text-white/80">
          {navigationLinks.map((linkItem) => (
            <a key={linkItem.href} href={linkItem.href} className="hover:text-white transition">
              {linkItem.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="ml-auto inline-flex items-center whitespace-nowrap rounded-lg bg-[#f3992e] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
        >
          Cotiza ahora
        </a>
      </div>
    </nav>
  );
}
