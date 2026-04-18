import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getSlideDelay, HeroCarousel } from "@/app/components/heroCarrusel";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} alt={"imagen test"} />;
    },
}));

const getSlides = () => screen.getAllByAltText("imagen test");

describe("getSlideDelay", () => {
    it("regresa 7000 para index 0 y 4500 para los demás", () => {
        expect(getSlideDelay(0)).toBe(7000);
        expect(getSlideDelay(1)).toBe(4500);
        expect(getSlideDelay(999)).toBe(4500);
    });
});

describe("HeroCarousel", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it("renderiza botones y muestra el primer slide", () => {
        render(<HeroCarousel />);

        expect(screen.getByRole("button", { name: "Anterior" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Siguiente" })).toBeInTheDocument();
        expect(getSlides()).toHaveLength(4);
    });

    it("avanza con el botón Siguiente (cambia la opacidad del slide activo)", () => {
        render(<HeroCarousel />);

        const [s0, s1] = getSlides();
        const s0Wrapper = s0.parentElement;
        const s1Wrapper = s1.parentElement;

        expect(s0Wrapper).toHaveClass("opacity-100");
        expect(s1Wrapper).toHaveClass("opacity-0");

        fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));

        expect(s0Wrapper).toHaveClass("opacity-0");
        expect(s1Wrapper).toHaveClass("opacity-100");
    });

    it("retrocede con Anterior (wrap al final)", () => {
        render(<HeroCarousel />);

        const slides = getSlides();
        const s0Wrapper = slides[0].parentElement;
        const s3Wrapper = slides[3].parentElement;

        expect(s0Wrapper).toHaveClass("opacity-100");

        fireEvent.click(screen.getByRole("button", { name: "Anterior" }));

        expect(s0Wrapper).toHaveClass("opacity-0");
        expect(s3Wrapper).toHaveClass("opacity-100");
    });

    it("permite ir a una imagen con los bullets", () => {
        render(<HeroCarousel />);

        const bullet3 = screen.getByRole("button", { name: "Ir a la imagen 3" });
        fireEvent.click(bullet3);

        const slides = getSlides();
        expect(slides[2].parentElement).toHaveClass("opacity-100");
    });

    it("auto-avanza después del delay y se pausa con hover", () => {
        render(<HeroCarousel />);

        const root = screen.getByRole("button", { name: "Anterior" }).closest("div.relative.w-full") as HTMLElement;

        act(() => {
            jest.advanceTimersByTime(7000);
        });
        let slides = getSlides();
        expect(slides[1].parentElement).toHaveClass("opacity-100");

        fireEvent.mouseEnter(root);

        act(() => {
            jest.advanceTimersByTime(4500);
        });

        slides = getSlides();
        expect(slides[2].parentElement).toHaveClass("opacity-0");

        fireEvent.mouseLeave(root);
        act(() => {
            jest.advanceTimersByTime(4500);
        });
        slides = getSlides();
        expect(slides[2].parentElement).toHaveClass("opacity-100");
    });
});
