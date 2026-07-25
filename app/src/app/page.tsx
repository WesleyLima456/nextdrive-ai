"use client";

import { useState } from "react";

export default function Home() {
  const [vehicle, setVehicle] = useState({
    brand: "",
    model: "",
    year: "",
    km: "",
    price: "",
    features: "",
  });

  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState("");

  async function generateCampaign() {
    setLoading(true);

    try {
      const response = await fetch("/api/campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicle),
      });

      const data = await response.json();

      setCampaign(data.campaign || data.error);
    } catch {
      setCampaign("Erro ao gerar campanha.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h1>🚗 NextDrive AI</h1>

      <p>Seu funcionário de marketing automotivo.</p>

      <div
        style={{
          display: "grid",
          gap: 12,
        }}
      >
        <input
          placeholder="Marca"
          value={vehicle.brand}
          onChange={(e) =>
            setVehicle({ ...vehicle, brand: e.target.value })
          }
        />

        <input
          placeholder="Modelo"
          value={vehicle.model}
          onChange={(e) =>
            setVehicle({ ...vehicle, model: e.target.value })
          }
        />

        <input
          placeholder="Ano"
          value={vehicle.year}
          onChange={(e) =>
            setVehicle({ ...vehicle, year: e.target.value })
          }
        />

        <input
          placeholder="Quilometragem"
          value={vehicle.km}
          onChange={(e) =>
            setVehicle({ ...vehicle, km: e.target.value })
          }
        />

        <input
          placeholder="Preço"
          value={vehicle.price}
          onChange={(e) =>
            setVehicle({ ...vehicle, price: e.target.value })
          }
        />

        <textarea
          rows={5}
          placeholder="Diferenciais do veículo"
          value={vehicle.features}
          onChange={(e) =>
            setVehicle({ ...vehicle, features: e.target.value })
          }
        />

        <button onClick={generateCampaign} disabled={loading}>
          {loading ? "Gerando..." : "Gerar Campanha"}
        </button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f4f4f4",
          padding: 20,
          borderRadius: 8,
        }}
      >
        {campaign}
      </pre>
    </main>
  );
}