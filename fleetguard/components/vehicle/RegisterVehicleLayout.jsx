"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import Breadcrumb from "./Breadcrumb";
import BasicInfo from "./BasicInfo";
import OperationalInfo from "./OperationalInfo";
import ComplianceSection from "./ComplianceSection";
import UploadDocuments from "./UploadDocuments";
import RegistrationTips from "./RegistrationTips";
import FormButtons from "./FormButtons";

export default function RegisterVehicleLayout() {
  return (
    <DashboardLayout>

      <div className="flex gap-8">

        {/* LEFT */}

        <div className="flex-1">

          <Breadcrumb />

          <div className="flex items-center justify-between mt-6">

            <div>

              <h1 className="text-4xl font-bold text-gray-900">
                Register New Vehicle
              </h1>

              <p className="text-gray-500 mt-2">
                Add a new vehicle to your fleet and configure its compliance information.
              </p>

            </div>

            <div className="flex gap-3">

              <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100">
                Cancel
              </button>

              <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                Save Vehicle
              </button>

            </div>

          </div>

        <form
  className="mt-8 bg-white rounded-3xl border border-gray-200 overflow-hidden"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Vehicle Registered Successfully!");
  }}
>

  <BasicInfo />

  <OperationalInfo />

  <ComplianceSection />

  <UploadDocuments />

  <FormButtons />

</form>

        </div>

        {/* RIGHT */}

        <RegistrationTips />

      </div>

    </DashboardLayout>
  );
}