"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import VehicleBreadcrumb from "./VehicleBreadcrumb";
import VehicleHeader from "./VehicleHeader";
import VehicleStatusCards from "./VehicleStatusCards";
import VehicleHero from "./VehicleHero";
import VehicleTabs from "./VehicleTabs";
import VehicleOverview from "./VehicleOverview";

import QuickActions from "./QuickActions";
import ComplianceHealth from "./ComplianceHealth";
import PredictiveRisk from "./PredictiveRisk";
import RecentActivity from "./RecentActivity";

import ComplianceCards from "./ComplianceCards";
import ServiceHistory from "./ServiceHistory";
import SimilarVehicles from "./SimilarVehicles";

export default function VehicleDetailsLayout() {
  return (
    <DashboardLayout>

      <VehicleBreadcrumb />

      <VehicleHeader />

      <VehicleStatusCards />

      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="col-span-2 space-y-6">

          <VehicleHero />

          <VehicleTabs />

          <VehicleOverview />

          <ComplianceCards />

          <ServiceHistory />

          <SimilarVehicles />

        </div>

        <div className="space-y-6">

          <QuickActions />

          <ComplianceHealth />

          <PredictiveRisk />

          <RecentActivity />

        </div>

      </div>

    </DashboardLayout>
  );
}