export default function PredictiveRisk() {
  return (
    <div className="rounded-2xl bg-slate-800 text-white p-6">

      <p className="text-sm text-gray-300">
        Predictive Risk
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Medium
      </h2>

      <p className="text-yellow-400 font-semibold mt-1">
        Requires Attention
      </p>

      <p className="text-sm text-gray-300 mt-5 leading-6">
        Transmission temperature variance detected in the last
        500 km. Schedule preventive maintenance.
      </p>

      <button className="mt-6 w-full rounded-xl bg-white text-slate-800 py-3 font-semibold">
        Schedule Diagnostics
      </button>

    </div>
  );
}