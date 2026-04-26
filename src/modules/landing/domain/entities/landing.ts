export type HighlightIcon = "thermometer" | "shield" | "tools";

export type Highlight = {
  title: string;
  description: string;
  icon: HighlightIcon;
};

export type Service = {
  title: string;
  detail: string;
};

export type ValueItem = {
  title: string;
  detail: string;
};

export type ProjectPhoto = {
  src: string;
  alt: string;
  label: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type NavLinkItem = {
  label: string;
  href: string;
};

export type LandingPageContent = {
  highlights: Highlight[];
  services: Service[];
  steps: string[];
  valueSection: ValueItem[];
  projectGallery: ProjectPhoto[];
  businessImpact: string[];
  heroSlides: HeroSlide[];
  navLinks: NavLinkItem[];
};
