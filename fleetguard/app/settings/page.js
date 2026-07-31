"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Navbar";
import SettingsLayout from "@/components/settings/SettingsLayout";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#f4f6fa] text-[#0b1c30]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeTab="Settings"
          actionLabel="New Vehicle"
          onActionClick={() => {}}
        />

        <main className="flex-1 p-6 md:p-8 max-w-[1700px] w-full mx-auto animate-fade-up">
          <SettingsLayout />
        </main>
      </div>
    </div>
  );
}