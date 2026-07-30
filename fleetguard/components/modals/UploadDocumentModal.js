"use client";

import { useState } from "react";

export default function UploadDocumentModal({
  isOpen,
  onClose,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    vehicle: "Toyota Innova (KA 01 EQ 4589)",
    docType: "Insurance Policy",
    expiryDate: "",
    file: null,
  });

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PDF, JPG and PNG files are allowed.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("Maximum file size is 10MB.");
      return;
    }

    setFormData({
      ...formData,
      file: selectedFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.expiryDate) {
      alert("Please select an expiry date.");
      return;
    }

    if (!formData.file) {
      alert("Please upload a document.");
      return;
    }

    console.log("Uploaded Data:", formData);

    if (onSubmit) {
      onSubmit(formData);
    }

    alert("Document uploaded successfully!");

    setFormData({
      vehicle: "Toyota Innova (KA 01 EQ 4589)",
      docType: "Insurance Policy",
      expiryDate: "",
      file: null,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-[#e2e8f0]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#004ac6] flex items-center justify-center">
              <span className="material-symbols-outlined">
                upload_file
              </span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">
                Upload Compliance Document
              </h2>

              <p className="text-xs text-[#565e74]">
                Upload permits, insurance policies, or fitness certificates
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#565e74] hover:text-[#0b1c30]"
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5"
        >
          {/* Vehicle */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Vehicle
            </label>

            <select
              value={formData.vehicle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  vehicle: e.target.value,
                })
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>
                Toyota Innova (KA 01 EQ 4589)
              </option>

              <option>
                Tata Ace Gold (MH 12 AB 1234)
              </option>

              <option>
                Mahindra Bolero Pickup (DL 04 C 9876)
              </option>
            </select>
          </div>

          {/* Document Type + Date */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium mb-2">
                Document Type
              </label>

              <select
                value={formData.docType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    docType: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Insurance Policy</option>
                <option>Pollution Under Control (PUC)</option>
                <option>National Route Permit</option>
                <option>Vehicle Fitness Certificate</option>
                <option>Registration Certificate (RC)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Expiration Date
              </label>

              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expiryDate: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

          </div>

          {/* Upload Area */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Attach File (PDF, JPG, PNG)
            </label>

            <label
              htmlFor="file-upload"
              className="border-2 border-dashed border-[#c3c6d7] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#f8f9ff] hover:bg-[#eef4ff] cursor-pointer transition"
            >

              <span className="material-symbols-outlined text-4xl text-[#004ac6]">
                cloud_upload
              </span>

              <p className="font-semibold mt-3">
                Click to upload or drag & drop
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Maximum file size: 10MB
              </p>

              {formData.file && (
                <p className="mt-4 text-green-600 font-medium">
                  📄 {formData.file.name}
                </p>
              )}

            </label>

            <input
              id="file-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />

          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t pt-5">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8]"
            >
              Upload Document
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}