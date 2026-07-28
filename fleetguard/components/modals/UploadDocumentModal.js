"use client";

import { useState } from "react";

export default function UploadDocumentModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    vehicle: "Toyota Innova (KA 01 EQ 4589)",
    docType: "Insurance Policy",
    expiryDate: "",
    file: null,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-up">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-[#e2e8f0]">
        <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#004ac6] flex items-center justify-center">
              <span className="material-symbols-outlined">upload_file</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">Upload Compliance Document</h2>
              <p className="text-xs text-[#565e74]">Upload permits, insurance policies, or fitness certificates</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#565e74] hover:text-[#0b1c30]">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          <div>
            <label className="block text-[#434655] font-medium mb-1">Select Vehicle</label>
            <select
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
            >
              <option value="Toyota Innova (KA 01 EQ 4589)">Toyota Innova (KA 01 EQ 4589)</option>
              <option value="Tata Ace Gold (MH 12 AB 1234)">Tata Ace Gold (MH 12 AB 1234)</option>
              <option value="Mahindra Bolero Pickup (DL 04 C 9876)">Mahindra Bolero Pickup (DL 04 C 9876)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Document Type</label>
              <select
                value={formData.docType}
                onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
              >
                <option value="Insurance Policy">Insurance Policy</option>
                <option value="Pollution Under Control (PUC)">Pollution Under Control (PUC)</option>
                <option value="National Route Permit">National Route Permit</option>
                <option value="Vehicle Fitness Certificate">Vehicle Fitness Certificate</option>
                <option value="Registration Certificate (RC)">Registration Certificate (RC)</option>
              </select>
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Expiration Date</label>
              <input
                type="date"
                required
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          {/* Drag & Drop File Zone */}
          <div>
            <label className="block text-[#434655] font-medium mb-1">Attach File (PDF, JPG, PNG)</label>
            <div className="border-2 border-dashed border-[#c3c6d7] rounded-xl p-6 text-center bg-[#f8f9ff] hover:bg-[#eff4ff] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[32px] text-[#004ac6] mb-1">cloud_upload</span>
              <p className="text-xs font-semibold text-[#0b1c30]">Click to upload or drag & drop</p>
              <p className="text-[11px] text-[#565e74] mt-0.5">Maximum file size: 10MB</p>
              <input type="file" className="hidden" id="file-upload" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-[#e2e8f0] pt-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[#565e74] hover:bg-[#eff4ff] rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#2563eb] text-white rounded-lg font-semibold shadow-md shadow-[#2563eb]/20 hover:bg-[#004ac6]"
            >
              Upload Document
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
