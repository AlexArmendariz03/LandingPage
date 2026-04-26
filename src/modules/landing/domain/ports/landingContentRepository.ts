import type { LandingPageContent, NavLinkItem } from "@/modules/landing/domain/entities/landing";

export interface LandingContentRepository {
  getLandingPageContent(): LandingPageContent;
  getNavigationLinks(): NavLinkItem[];
}
