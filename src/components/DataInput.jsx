import { useState } from "react";
import { Sprout, Droplets, FlaskConical, Calendar } from "lucide-react";

function DataInput({ onSubmit }) {
  const [form, setForm] = useState({
    cropType: "Maize",
    soilType: "Loam",
    irrigationPerWeek: 3,
    fertilizerKgPerAcre: 15,
    sowingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-xl bg-green-100 text-green-700 grid place-items-center">
          <Sprout className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Field Data</h2>
      </div>

      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Crop Type</span>
          <select
            name="cropType"
            value={form.cropType}
            onChange={handleChange}
            className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
          >
            <option>Maize</option>
            <option>Wheat</option>
            <option>Rice</option>
            <option>Soybean</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Soil Type</span>
          <select
            name="soilType"
            value={form.soilType}
            onChange={handleChange}
            className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
          >
            <option>Loam</option>
            <option>Clay</option>
            <option>Sandy</option>
            <option>Silt</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 flex items-center gap-2"><Droplets className="h-4 w-4" /> Irrigation/Week</span>
          <input
            type="number"
            min={0}
            name="irrigationPerWeek"
            value={form.irrigationPerWeek}
            onChange={handleChange}
            className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 flex items-center gap-2"><FlaskConical className="h-4 w-4" /> Fertilizer (kg/acre)</span>
          <input
            type="number"
            min={0}
            name="fertilizerKgPerAcre"
            value={form.fertilizerKgPerAcre}
            onChange={handleChange}
            className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 flex items-center gap-2"><Calendar className="h-4 w-4" /> Sowing Date</span>
          <input
            type="date"
            name="sowingDate"
            value={form.sowingDate}
            onChange={handleChange}
            className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </label>

        <div className="sm:col-span-2 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Run Prediction
          </button>
        </div>
      </form>
    </section>
  );
}

export default DataInput;
