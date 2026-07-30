"use client";

import { RotateCcw, Save } from "lucide-react";

export default function FormButtons() {
  return (
    <div className="flex items-center justify-between p-8 bg-gray-50">

      <button
        type="reset"
        className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
      >
        <RotateCcw size={18} />
        Reset Form
      </button>

      <div className="flex gap-4">

        <button
          type="button"
          className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Save size={18} />
          Register Vehicle
        </button>

      </div>

    </div>
  );
}