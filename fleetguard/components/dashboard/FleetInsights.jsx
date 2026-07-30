"use client";

import { TrendingUp } from "lucide-react";

export default function FleetInsights() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 mt-6 text-white">

      <div className="flex items-center gap-3">

        <div className="bg-white/20 p-3 rounded-xl">
          <TrendingUp size={26} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Fleet Insights
          </h2>

          <p className="text-blue-100 text-sm">
            AI-powered recommendations
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-4">

        <div className="bg-white/10 rounded-xl p-4">
          <h3 className="font-medium">
            Compliance Score
          </h3>

          <p className="text-3xl font-bold mt-2">
            91%
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <p className="leading-7 text-blue-100">
            Your fleet compliance improved by <strong>8%</strong> this
            month. Scheduling emissions tests for the remaining vehicles
            could raise compliance above <strong>95%</strong>.
          </p>
        </div>

      </div>

    </div>
  );
}