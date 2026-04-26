import type { ReactNode } from "react";
import { FaShieldAlt, FaThermometerHalf, FaTools } from "react-icons/fa";
import type { HighlightIcon } from "@/modules/landing/domain/entities/landing";

export const highlightIcons: Record<HighlightIcon, ReactNode> = {
  thermometer: <FaThermometerHalf className="text-[#f3992e] text-2xl" />,
  shield: <FaShieldAlt className="text-[#0c5ce6] text-2xl" />,
  tools: <FaTools className="text-[#f3992e] text-2xl" />,
};
