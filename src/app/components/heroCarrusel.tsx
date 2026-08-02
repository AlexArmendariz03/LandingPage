"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

const logoMs = 7000;
const photoMs = 4500;

export function getSlideDelay(index: number): number {
  return index === 0 ? logoMs : photoMs;
}

export function HeroCarousel() {
  const slides = useMemo<Slide[]>(
    () => [
      { src: "/trabajos/12mayoPapel.jpeg", alt: "Logo Hernández Impermeabilizaciones & Poliuretano" },
      { src: "/trabajos/12mayoChapopote.jpeg", alt: "Impermeabilización profesional de techos" },
      { src: "/trabajos/12mayo.jpeg", alt: "Impermeabilización y pintura en bodega" },
      { src: "/trabajos/12mayopoluretano.jpeg", alt: "Impermeabilización y pintura en bodega" },
      { src: "/trabajos/12papelRojo.jpeg", alt: "Impermeabilización y pintura en bodega" },
    ],
    []
  );

  const total = slides.length;
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const goTo = (slideIndex: number) => setIndex((slideIndex + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (total <= 1 || paused) return;

    const id = window.setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % total);
    }, getSlideDelay(index));

    return () => window.clearTimeout(id);
  }, [index, paused, total]);

  return (
    <div className="relative w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-white/10 via-[#0c5ce6]/10 to-[#f3992e]/10 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 shadow-xl shadow-slate-950/30 ring-1 ring-white/5">
        <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="relative aspect-[16/11] w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.10),transparent_28%)]" />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/25 px-2.5 py-1.5 text-base leading-none text-white shadow-lg backdrop-blur-md transition hover:bg-white/20"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/25 px-2.5 py-1.5 text-base leading-none text-white shadow-lg backdrop-blur-md transition hover:bg-white/20"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={[
                "h-2 rounded-full border border-white/25 transition-all",
                i === index ? "w-6 bg-white/80" : "w-2 bg-white/25 hover:bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
