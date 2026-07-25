import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { createCampaignPrompt } from "@/lib/ai/agents/campaignAgent";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const vehicle = await request.json();

    const prompt = createCampaignPrompt(vehicle);

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return new NextResponse(
      JSON.stringify({
        campaign: response.choices[0].message.content,
      }),
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error?.message ?? "Erro desconhecido",
      },
      {
        status: 500,
      }
    );
  }
}