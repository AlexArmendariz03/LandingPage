"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const whatsappOptions = [
  {
    label: "+52 614 746 4430",
    href: "https://wa.me/5216147464430?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.",
  },
  {
    label: "+52 614 131 4603",
    href: "https://wa.me/5216141314603?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.",
  },
];

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById("contacto");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setNearContact(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (nearContact) setOpen(false);
  }, [nearContact]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={[
        "fixed bottom-5 right-5 z-40 transition-opacity duration-300",
        nearContact ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
    >
      {open && (
        <div className="glass-panel absolute bottom-16 right-0 w-64 overflow-hidden rounded-2xl !bg-ink-900/95 shadow-card">
          <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-white/50">Elige un número</p>
          {whatsappOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/40 ring-1 ring-white/10 hover:scale-105 hover:shadow-emerald-500/55 transition"
      >
        <AiOutlineWhatsApp className="text-3xl" />
      </button>
    </div>
  );
}
