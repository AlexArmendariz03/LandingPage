"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";


export function HeroCarousel() {
  const slides = useMemo(
    () => [
      { src: "/brand/Hernandez.png", alt: "Logo Hernández Impermeabilizaciones & Poliuretano" },
      { src: "/brand/aplicador.png", alt: "Impermeabilización profesional de techos" },
      { src: "/brand/pinturaPoli.png", alt: "Impermeabilización pinutra de techos" },
      { src: "/brand/aplicadorBodega.png", alt: "Impermeabilización pinutra de bodega" },
    ],
    []
  );

  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Duraciones: logo más tiempo, fotos normal
  const logoMs = 7000;  // logo: 7s
  const photoMs = 4500; // fotos: 4.5s

  useEffect(() => {
    if (total <= 1) return;
    if (paused) return;

    const isLogoSlide = index === 0;
    const delay = isLogoSlide ? logoMs : photoMs;

    const id = window.setTimeout(() => {
      setIndex((x) => (x + 1) % total);
    }, delay);

    return () => window.clearTimeout(id);
  }, [index, paused, total]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30 shadow-2xl">
        <div className="relative aspect-[4/3] w-full">
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={[
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={[
                  "object-cover",
                  i === 0 ? "object-contain p-10 md:p-12" : "object-cover",
                ].join(" ")}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-3 py-2 backdrop-blur transition"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-3 py-2 backdrop-blur transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full transition border border-white/20",
                i === index ? "bg-white/80" : "bg-white/20 hover:bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
