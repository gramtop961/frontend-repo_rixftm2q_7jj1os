import { Lightbulb } from "lucide-react";

function MiniLineChart({ points }) {
  if (!points || points.length === 0) return null;
  const width = 520;
  const height = 160;
  const padding = 24;

  const xs = points.map((_, i) => i);
  const ys = points.map((p) => p.value);
  const xMin = 0;
  const xMax = xs.length - 1 || 1;
  const yMin = Math.min(...ys) - 0.2;
  const yMax = Math.max(...ys) + 0.2;

  const xScale = (i) => padding + (i - xMin) * ((width - padding * 2) / (xMax - xMin || 1));
  const yScale = (v) => height - padding - (v - yMin) * ((height - padding * 2) / (yMax - yMin || 1));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${xScale(i)},${yScale(p.value)}`)
    .join(" ");

  // Area under the line
  const areaD = `${pathD} L${xScale(points.length - 1)},${height - padding} L${xScale(0)},${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#86efac" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="white" />
      <g>
        <path d={areaD} fill="url(#grad)" />
        <path d={pathD} fill="none" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <circle key={i} cx={xScale(i)} cy={yScale(p.value)} r="3.5" fill="#16a34a" />
        ))}
      </g>
      <g>
        {points.map((p, i) => (
          <text key={i} x={xScale(i)} y={height - padding + 16} textAnchor="middle" className="fill-gray-500 text-[10px]">
            {p.label}
          </text>
        ))}
      </g>
    </svg>
  );
}

function Insights({ history = [], recommendation }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
          <Lightbulb className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Insights & Trends</h2>
      </div>

      <MiniLineChart points={history} />

      {recommendation && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900 text-sm">
          {recommendation}
        </div>
      )}
    </section>
  );
}

export default Insights;
