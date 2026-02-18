import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/app/components/navBar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hernandezimper.com"),
  title: "Hernández Impermeabilizaciones y Poliuretano",
  description:
    "Servicio especializado en impermeabilización y aislamiento con espuma de poliuretano para techos, naves y cámaras frías.",
  keywords: [
    "impermeabilización",
    "poliuretano",
    "aislamiento térmico",
    "impermeabilización de techos",
    "impermeabilización en Chihuahua",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/techoBlanco.png",
  },
  openGraph: {
    title: "Hernández Impermeabilizaciones y Poliuretano",
    description:
      "Impermeabilización, sellado y aislamiento térmico profesional para hogares, comercios y naves industriales.",
    url: "https://hernandezimper.com",
    siteName: "Hernández Impermeabilizaciones y Poliuretano",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/brand/Hernandez.png",
        width: 1200,
        height: 630,
        alt: "Hernández Impermeabilizaciones y Poliuretano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernández Impermeabilizaciones y Poliuretano",
    description:
      "Soluciones de impermeabilización y poliuretano para techos, bodegas y superficies industriales.",
    images: ["/brand/Hernandez.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hernández Impermeabilizaciones y Poliuretano",
  url: "https://hernandezimper.com",
  telephone: "+52 614 131 4603",
  areaServed: "Chihuahua, México",
  openingHours: "Mo-Sa 08:00-18:00",
  image: "https://hernandezimper.com/brand/Hernandez.png",
  description:
    "Empresa especializada en impermeabilización, recubrimientos y aislamiento térmico con poliuretano para techos y bodegas.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950`}>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
