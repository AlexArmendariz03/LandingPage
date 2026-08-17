"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

const photoMs = 4500;

export function getSlideDelay(_index: number): number {
  return photoMs;
}

export function HeroCarousel() {
  const slides = useMemo<Slide[]>(
    () => [
      { src: "/trabajos/12mayoPapel.jpeg", alt: "Impermeabilización terminada en azotea" },
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
      <div className="glass-panel relative overflow-hidden rounded-3xl shadow-card">
        <div className="relative aspect-[4/3] w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={[
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={["object-cover", i === index ? "animate-kenburns" : ""].join(" ")}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/45 hover:bg-slate-950/70 border border-white/20 px-3 py-2 backdrop-blur-md shadow-md transition"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/45 hover:bg-slate-950/70 border border-white/20 px-3 py-2 backdrop-blur-md shadow-md transition"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/40 px-3 py-1.5 backdrop-blur-md">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition border border-white/20",
                  i === index ? "bg-white/90" : "bg-white/30 hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
