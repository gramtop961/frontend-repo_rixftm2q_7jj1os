import { BarChart3, TrendingUp } from "lucide-react";

function PredictionCard({ prediction, loading }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-xl bg-blue-100 text-blue-700 grid place-items-center">
          <BarChart3 className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Yield Prediction</h2>
      </div>

      {loading ? (
        <div className="animate-pulse h-24 rounded-xl bg-gray-100" />
      ) : prediction ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-green-50 border border-green-100">
            <p className="text-xs text-green-700">Expected Yield</p>
            <p className="text-2xl font-semibold text-green-800">{prediction.yield} t/ha</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-xs text-blue-700">Confidence</p>
            <p className="text-2xl font-semibold text-blue-800">{prediction.confidence}%</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
            <p className="text-xs text-amber-700">Best Harvest</p>
            <p className="text-2xl font-semibold text-amber-800">{prediction.harvestWindow}</p>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No prediction yet. Enter your field data to get started.</div>
      )}

      {prediction && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="h-4 w-4 text-green-600" />
          Model factors: rainfall, soil moisture, temperature, fertilizer usage
        </div>
      )}
    </section>
  );
}

export default PredictionCard;
