import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props}  alt={"imagen test"}/>;
    },
}));

jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ href, children, ...rest }: any) => (
        <a href={href} {...rest}>
            {children}
        </a>
    ),
}));

import Navbar from "@/app/components/navBar";

describe("Navbar", () => {
    it("renderiza el logo y textos principales", () => {
        render(<Navbar />);

        expect(screen.getByAltText("Hernández Impermeabilizaciones")).toBeInTheDocument();
        expect(screen.getByText("Hernández")).toBeInTheDocument();
        expect(screen.getByText("Impermeabilizaciones & Poliuretano")).toBeInTheDocument();
    });

    it("tiene el link principal a home '/'", () => {
        render(<Navbar />);

        const homeLink = screen.getByRole("link", { name: /Hernández/i });
        expect(homeLink).toHaveAttribute("href", "/");
    });

    it("renderiza los links de navegación con sus anchors", () => {
        render(<Navbar />);

        const items: Array<[string, string]> = [
            ["Servicios", "#servicios"],
            ["Beneficios", "#beneficios"],
            ["Proceso", "#proceso"],
            ["Galería", "#galeria"],
            ["Contacto", "#contacto"],
        ];

        for (const [label, href] of items) {
            const link = screen.getByRole("link", { name: label });
            expect(link).toHaveAttribute("href", href);
        }
    });

    it('renderiza el CTA "Cotiza ahora" apuntando a #contacto', () => {
        render(<Navbar />);

        const cta = screen.getByRole("link", { name: "Cotiza ahora" });
        expect(cta).toHaveAttribute("href", "#contacto");
    });
});
