import { createCampaignPrompt } from "../agents/campaignAgent";
import { createVideoPrompt } from "../agents/videoAgent";
import { createTikTokPrompt } from "../agents/tiktokAgent";
import { createContentCalendarPrompt } from "../agents/contentCalendarAgent";
import { createTrendPrompt } from "../agents/trendAgent";

export function buildWorkflow(vehicle: {
  brand: string;
  model: string;
  year: string;
  km: string;
  price: string;
  features: string;
}) {
  return {
    campaign: createCampaignPrompt(vehicle),

    video: createVideoPrompt(vehicle),

    tiktok: createTikTokPrompt(vehicle),

    calendar: createContentCalendarPrompt({
      objective: "Vender este veículo e aumentar a audiência da NextDrive.",
      vehicles: `${vehicle.brand} ${vehicle.model}`,
    }),

    trends: createTrendPrompt({
      niche: "Veículos seminovos",
      objective: "Aumentar seguidores e gerar vendas",
    }),
  };
}