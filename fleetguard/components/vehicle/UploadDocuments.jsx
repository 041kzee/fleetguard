"use client";

import { Upload, FileText } from "lucide-react";

const documents = [
  {
    title: "Insurance Document",
    description: "PDF, JPG or PNG (Max 10MB)",
  },
  {
    title: "Inspection Certificate",
    description: "PDF, JPG or PNG (Max 10MB)",
  },
  {
    title: "Emission Certificate",
    description: "PDF, JPG or PNG (Max 10MB)",
  },
];

export default function UploadDocuments() {
  return (
    <section className="p-8 border-b border-gray-200">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="bg-purple-100 p-2 rounded-lg">
          <Upload className="text-purple-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Upload Documents
          </h2>

          <p className="text-gray-500 text-sm">
            Upload all required compliance documents for this vehicle.
          </p>
        </div>

      </div>

      {/* Upload Cards */}

      <div className="space-y-6">

        {documents.map((doc, index) => (
          <div
            key={index}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-blue-500 transition cursor-pointer"
          >

            <div className="flex flex-col items-center justify-center text-center">

              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <FileText className="text-blue-600" size={28} />
              </div>

              <h3 className="font-semibold text-gray-800">
                {doc.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {doc.description}
              </p>

              <button className="mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Choose File
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}