"use client";

import SaveAlert from "./SaveAlert";
import GeneralSettingsSection from "./GeneralSettingsSection";
import CompanyProfileCard from "./CompanyProfileCard";
import FleetPreferenceCard from "./FleetPreferenceCard";

export default function SettingsContent({ activeTab }) {
  return (
    <div className="space-y-6">
      <SaveAlert />

      {activeTab === "General" && (
        <>
          <GeneralSettingsSection />
          <CompanyProfileCard />
          <FleetPreferenceCard />
        </>
      )}

      {activeTab !== "General" && (
        <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
          <span className="material-symbols-outlined text-5xl text-blue-600">
            settings
          </span>

          <h2 className="text-2xl font-bold mt-4">
            {activeTab}
          </h2>

          <p className="text-gray-500 mt-2">
            This section will be implemented later.
          </p>
        </div>
      )}
    </div>
  );
}