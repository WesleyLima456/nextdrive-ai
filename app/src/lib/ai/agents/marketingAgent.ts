import { automotiveBasePrompt } from "../prompts/automotive";

export function createMarketingPrompt(vehicle: {
  brand: string;
  model: string;
  year: string;
  km: string;
  price: string;
  features: string;
}) {

  return `
${automotiveBasePrompt}


Você é o Diretor de Marketing da NextDrive Multimarcas.

Analise o veículo abaixo:

Marca:
${vehicle.brand}

Modelo:
${vehicle.model}

Ano:
${vehicle.year}

Quilometragem:
${vehicle.km}

Preço:
${vehicle.price}

Diferenciais:
${vehicle.features}


Sua missão é criar uma campanha completa de venda.


Responda exatamente:

# Estratégia de Venda

- Público alvo
- Posicionamento
- Principais argumentos


# Legenda Instagram

Crie uma legenda no padrão NextDrive.


# Roteiro Reels / TikTok

Crie:
- cenas
- duração
- texto na tela
- narração


# Prompt TikTok Create Studio

Crie um prompt profissional para geração do vídeo.


# Stories

Crie 5 ideias.


# WhatsApp

Crie a primeira abordagem para o cliente.
`;
}