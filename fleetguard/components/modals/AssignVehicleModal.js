"use client";

import { useState } from "react";

export default function AssignVehicleModal({ isOpen, onClose, onSubmit, vehicleName = "Toyota Innova" }) {
  const [formData, setFormData] = useState({
    driverName: "Rajesh Kumar",
    startDate: new Date().toISOString().split("T")[0],
    expectedReturn: "",
    notes: "",
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
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">Assign Vehicle</h2>
              <p className="text-xs text-[#565e74]">Assign {vehicleName} to an authorized driver</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#565e74] hover:text-[#0b1c30]">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          <div>
            <label className="block text-[#434655] font-medium mb-1">Select Driver</label>
            <select
              value={formData.driverName}
              onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
            >
              <option value="Rajesh Kumar">Rajesh Kumar (ID: DRV-802)</option>
              <option value="Anita Sharma">Anita Sharma (ID: DRV-419)</option>
              <option value="Vikram Singh">Vikram Singh (ID: DRV-305)</option>
              <option value="Mohammed Ali">Mohammed Ali (ID: DRV-912)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Assignment Start Date</label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Expected Return Date</label>
              <input
                type="date"
                value={formData.expectedReturn}
                onChange={(e) => setFormData({ ...formData, expectedReturn: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#434655] font-medium mb-1">Assignment Notes / Route Details</label>
            <textarea
              rows={3}
              placeholder="Add route assignment or vehicle condition notes..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
            />
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
              Confirm Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
