"use client";

export default function SaveAlert() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
      <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-green-700">
          check_circle
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-green-800">
          Your settings are automatically saved.
        </h3>

        <p className="text-sm text-green-700 mt-1">
          Changes are stored securely and applied immediately across FleetGuard.
        </p>
      </div>
    </div>
  );
}