import { createMarketingPrompt } from "./marketingAgent";
import { createCopywriterPrompt } from "./copywriterAgent";


export function createCampaignPrompt(vehicle: {
  brand: string;
  model: string;
  year: string;
  km: string;
  price: string;
  features: string;
}) {

const marketing = createMarketingPrompt(vehicle);

const copywriter = createCopywriterPrompt(vehicle);


return `

Você é o Gerente de Marketing da NextDrive Multimarcas.

Você coordena uma equipe de especialistas.

Sua equipe:

1. Diretor de Marketing:
Responsável pela estratégia de venda.

2. Copywriter Automotivo:
Responsável pelos anúncios e comunicação.


Analise os trabalhos abaixo:


========== ESTRATÉGIA DE MARKETING ==========

${marketing}


========== COPYWRITER ==========

${copywriter}


Agora consolide tudo em uma campanha profissional.


Entregue:


# Plano de Venda

Resumo da estratégia.


# Instagram

Legenda final.


# Facebook Marketplace

Título e descrição.


# OLX

Título e descrição.


# Roteiro TikTok/Reels

Cenas:
- abertura
- detalhes
- fechamento


# Prompt TikTok Create Studio

Prompt profissional para gerar vídeo.


# Stories

Sequência de 5 stories.


# WhatsApp

Mensagem inicial para cliente.


Pense como uma agência de marketing automotivo completa.
`;

}