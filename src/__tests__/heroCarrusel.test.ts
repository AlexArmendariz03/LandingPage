import { getSlideDelay } from "@/app/components/heroCarrusel";

describe("getSlideDelay", () => {
  it("usa un delay más largo para el logo", () => {
    expect(getSlideDelay(0)).toBe(7000);
  });

  it("usa delay estándar para el resto de imágenes", () => {
    expect(getSlideDelay(1)).toBe(4500);
    expect(getSlideDelay(2)).toBe(4500);
  });
});
