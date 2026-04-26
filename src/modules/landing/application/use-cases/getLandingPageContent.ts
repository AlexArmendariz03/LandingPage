import type { LandingPageContent } from "@/modules/landing/domain/entities/landing";
import type { LandingContentRepository } from "@/modules/landing/domain/ports/landingContentRepository";
import { StaticLandingContentRepository } from "@/modules/landing/infrastructure/repositories/staticLandingContentRepository";

const repository: LandingContentRepository = new StaticLandingContentRepository();

export function getLandingPageContent(): LandingPageContent {
  return repository.getLandingPageContent();
}
