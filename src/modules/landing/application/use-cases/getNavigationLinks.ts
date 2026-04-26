import type { NavLinkItem } from "@/modules/landing/domain/entities/landing";
import type { LandingContentRepository } from "@/modules/landing/domain/ports/landingContentRepository";
import { StaticLandingContentRepository } from "@/modules/landing/infrastructure/repositories/staticLandingContentRepository";

const repository: LandingContentRepository = new StaticLandingContentRepository();

export function getNavigationLinks(): NavLinkItem[] {
  return repository.getNavigationLinks();
}
