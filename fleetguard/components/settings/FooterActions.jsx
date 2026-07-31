"use client";

export default function FooterActions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row justify-end gap-4">
      <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition font-medium">
        Cancel
      </button>

      <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
        Save Changes
      </button>
    </div>
  );
}