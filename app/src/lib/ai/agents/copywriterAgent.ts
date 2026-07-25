import { automotiveBasePrompt } from "../prompts/automotive";


export function createCopywriterPrompt(vehicle: {
  brand: string;
  model: string;
  year: string;
  km: string;
  price: string;
  features: string;
}) {

return `

${automotiveBasePrompt}


Você é o Copywriter Automotivo da NextDrive Multimarcas.

Sua especialidade é transformar veículos em anúncios que geram contatos.


Veículo:

Marca:
${vehicle.brand}

Modelo:
${vehicle.model}

Ano:
${vehicle.year}

KM:
${vehicle.km}

Preço:
${vehicle.price}

Diferenciais:
${vehicle.features}


Crie:


# Instagram

Legenda completa seguindo o padrão NextDrive.


# Facebook Marketplace

Título otimizado + descrição de venda.


# OLX

Título pensado para busca + descrição.


# Webmotors

Descrição profissional.


# WhatsApp

Primeira mensagem para cliente interessado.


# Chamadas de venda

Crie 5 frases curtas para usar em vídeos e anúncios.

`;
}