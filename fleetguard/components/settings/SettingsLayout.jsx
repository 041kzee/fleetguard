"use client";

import { useState } from "react";

import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import SystemStatus from "./SystemStatus";
import SupportCard from "./SupportCard";
import QuickLinks from "./QuickLinks";
import FooterActions from "./FooterActions";

export default function SettingsLayout() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">

        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <SettingsSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Center */}
        <div className="col-span-12 lg:col-span-6">
          <SettingsContent activeTab={activeTab} />
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <SystemStatus />
          <SupportCard />
          <QuickLinks />
        </div>

      </div>

      <FooterActions />
    </div>
  );
}