"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import Breadcrumb from "./Breadcrumb";
import BasicInfo from "./BasicInfo";
import OperationalInfo from "./OperationalInfo";
import ComplianceSection from "./ComplianceSection";
import UploadDocuments from "./UploadDocuments";
import RegistrationTips from "./RegistrationTips";
import FormButtons from "./FormButtons";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterVehicleLayout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
  vehicle_number: "",
  brand: "",
  model: "",
  vehicle_type: "",
  manufacturing_year: "",
  fuel_type: "",
  capacity: "",
  chassis_number: "",
  engine_number: "",
  registration_date: "",
  insurance_expiry: "",
  emission_expiry: "",
});
const [documents, setDocuments] = useState({
  INSURANCE: null,
  RC: null,
  EMISSION: null,
});
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Form Data:", formData);
    const response = await fetch("/api/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    const vehicleId = data.vehicle.id;

await uploadAllDocuments(vehicleId);

// Reset all input fields
resetForm();

// Reset uploaded files
setDocuments({
  INSURANCE: null,
  RC: null,
  EMISSION: null,
});

// Success popup
alert("Vehicle registered successfully!");

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

const [loading, setLoading] = useState(false);

const resetForm = () => {
  setFormData({
    vehicle_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    manufacturing_year: "",
    fuel_type: "",
    capacity: "",
    chassis_number: "",
    engine_number: "",
    registration_date: "",
    insurance_expiry: "",
    emission_expiry: "",
  });

  setDocuments({
    INSURANCE: null,
    RC: null,
    EMISSION: null,
  });
};

const uploadAllDocuments = async (vehicleId) => {
  const uploads = [
    {
      type: "INSURANCE",
      file: documents.INSURANCE,
      expiry: formData.insurance_expiry,
      issue: formData.registration_date,
    },
    {
      type: "RC",
      file: documents.RC,
      expiry: null,
      issue: formData.registration_date,
    },
    {
      type: "EMISSION",
      file: documents.EMISSION,
      expiry: formData.emission_expiry,
      issue: formData.registration_date,
    },
  ];

  for (const doc of uploads) {
    if (!doc.file) continue;

    const fd = new FormData();

fd.append("vehicle_id", vehicleId);
fd.append("document_type", doc.type);
fd.append("document_number", "");

if (doc.issue) {
  fd.append("issue_date", doc.issue);
}

if (doc.expiry) {
  fd.append("expiry_date", doc.expiry);
}

fd.append("file", doc.file);

    const response = await fetch("/api/documents", {
      method: "POST",
      body: fd,
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }
  }
};
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

              <button
  type="submit"
  className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
>
  Save Vehicle
</button>

            </div>

          </div>

        <form
  className="mt-8 bg-white rounded-3xl border border-gray-200 overflow-hidden"
  onSubmit={handleSubmit}
>

 <BasicInfo
  formData={formData}
  setFormData={setFormData}
/>

<OperationalInfo
  formData={formData}
  setFormData={setFormData}
/>

<ComplianceSection
  formData={formData}
  setFormData={setFormData}
/>

<UploadDocuments
  documents={documents}
  setDocuments={setDocuments}
/>

  <FormButtons
  loading={loading}
  onReset={resetForm}
  onCancel={() => router.back()}
/>
</form>

        </div>

        {/* RIGHT */}

        <RegistrationTips />

      </div>

    </DashboardLayout>
  );
}