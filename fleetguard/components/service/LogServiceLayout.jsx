"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import LogServiceHeader from "./LogServiceHeader";
import VehicleInfoForm from "./VehicleInfoForm";
import ServiceDetailsForm from "./ServiceDetailsForm";
import CostMileageForm from "./CostMileageForm";
import UploadInvoice from "./UploadInvoice";
import LogServiceButtons from "./LogServiceButtons";

export default function LogServiceLayout() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        
        <LogServiceHeader />

        <VehicleInfoForm />

        <ServiceDetailsForm />

        <CostMileageForm />

        <UploadInvoice />

        <LogServiceButtons />
      </div>
    </DashboardLayout>
  );
}