import { useMemo, useState } from "react";
import Header from "./components/Header";
import DataInput from "./components/DataInput";
import PredictionCard from "./components/PredictionCard";
import Insights from "./components/Insights";

function App() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([
    { label: "2019", value: 3.2 },
    { label: "2020", value: 3.6 },
    { label: "2021", value: 3.1 },
    { label: "2022", value: 3.9 },
    { label: "2023", value: 4.2 },
  ]);

  const recommendation = useMemo(() => {
    if (!prediction) return "Increase irrigation slightly during flowering and apply nitrogen top-dressing in week 5 for optimal yield.";
    if (prediction.yield < 3.5)
      return "Low yield expected. Consider improving soil moisture and split nitrogen application over two weeks.";
    if (prediction.yield < 4.5)
      return "Stable yield. Maintain current irrigation schedule and monitor pests after rainfall events.";
    return "High yield forecast. Plan harvest in the suggested window and schedule storage logistics early.";
  }, [prediction]);

  const runPrediction = async (form) => {
    setLoading(true);
    // Simulate a backend AI call. In a full app, call FastAPI endpoint here.
    await new Promise((r) => setTimeout(r, 900));

    // Simple heuristic to keep prototype self-contained
    const base = 3.2;
    const irrigationBoost = Math.min(0.8, Number(form.irrigationPerWeek) * 0.1);
    const fertBoost = Math.min(1, Number(form.fertilizerKgPerAcre) * 0.03);
    const cropAdj = { Maize: 0.7, Wheat: 0.4, Rice: 0.6, Soybean: 0.5 }[form.cropType] || 0.5;
    const yieldVal = Number((base + irrigationBoost + fertBoost + cropAdj).toFixed(2));

    const newPrediction = {
      yield: yieldVal,
      confidence: Math.min(95, Math.round(60 + irrigationBoost * 20 + fertBoost * 10)),
      harvestWindow: "Late Sep - Early Oct",
    };

    setPrediction(newPrediction);
    setHistory((h) => [...h.slice(-4), { label: "2024", value: yieldVal }]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50">
      <Header onNotifyClick={() => alert("Weather alert: Rain expected in 48h")}/>

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DataInput onSubmit={runPrediction} />
          <Insights history={history} recommendation={recommendation} />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <PredictionCard prediction={prediction} loading={loading} />
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Tips</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Water early morning to reduce evaporation.</li>
              <li>Use soil tests to fine-tune fertilizer plans.</li>
              <li>Watch wind forecasts before spraying.</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 pb-8 text-center text-xs text-gray-500">
        Built with love for farmers. Offline-ready UI, cloud AI model coming soon.
      </footer>
    </div>
  );
}

export default App;
