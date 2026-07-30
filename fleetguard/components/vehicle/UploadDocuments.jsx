"use client";

import { Upload, FileText } from "lucide-react";

const documentTypes = [
  {
    key: "INSURANCE",
    title: "Insurance Document",
  },
  {
    key: "RC",
    title: "Registration Certificate",
  },
  {
    key: "EMISSION",
    title: "Emission Certificate",
  },
];

export default function UploadDocuments({
  documents,
  setDocuments,
}) {
  return (
    <section className="p-8 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Upload className="text-purple-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Upload Documents
          </h2>

          <p className="text-gray-500 text-sm">
            Upload compliance documents.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {documentTypes.map((doc) => (
          <div
            key={doc.key}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8"
          >
            <div className="flex flex-col items-center">
              <FileText
                className="text-blue-600"
                size={28}
              />

              <h3 className="mt-4 font-semibold">
                {doc.title}
              </h3>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="mt-5"
                onChange={(e) =>
                  setDocuments({
                    ...documents,
                    [doc.key]: e.target.files[0],
                  })
                }
              />

              {documents[doc.key] && (
                <p className="text-sm text-green-600 mt-3">
                  {documents[doc.key].name}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}