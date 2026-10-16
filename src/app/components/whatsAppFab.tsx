"use client";

import { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const whatsappHref =
  "https://wa.me/5216141314603?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20impermeabilizaci%C3%B3n.";

export default function WhatsAppFab() {
  const [nearContact, setNearContact] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contacto");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setNearContact(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={[
        "fixed bottom-5 right-5 z-40 transition-opacity duration-300",
        nearContact ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/40 ring-1 ring-white/10 hover:scale-105 hover:shadow-emerald-500/55 transition"
      >
        <AiOutlineWhatsApp className="text-3xl" />
      </a>
    </div>
  );
}
