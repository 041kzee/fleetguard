"use client";

import { useState } from "react";

export default function LogServiceModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    vehicle: "Toyota Innova (KA 01 EQ 4589)",
    serviceType: "Routine Inspection & Oil Change",
    cost: "4500",
    odometer: "48200",
    serviceCenter: "Bosch Authorized Service Center",
    date: new Date().toISOString().split("T")[0],
    description: "",
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
              <span className="material-symbols-outlined">build</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">Log Vehicle Service</h2>
              <p className="text-xs text-[#565e74]">Record maintenance or repair work</p>
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
              <option value="Eicher Pro 2049 (KA 05 M 6543)">Eicher Pro 2049 (KA 05 M 6543)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Service Type</label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
              >
                <option value="Routine Inspection & Oil Change">Routine Inspection & Oil Change</option>
                <option value="Brake Pad Replacement">Brake Pad Replacement</option>
                <option value="Tire Rotation / Replacement">Tire Rotation / Replacement</option>
                <option value="Engine Diagnostics">Engine Diagnostics</option>
                <option value="Body Repair / Painting">Body Repair / Painting</option>
              </select>
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Service Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Cost (₹)</label>
              <input
                type="number"
                required
                placeholder="4500"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Odometer Reading (km)</label>
              <input
                type="number"
                required
                placeholder="48200"
                value={formData.odometer}
                onChange={(e) => setFormData({ ...formData, odometer: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#434655] font-medium mb-1">Service Provider / Garage</label>
            <input
              type="text"
              required
              placeholder="e.g. Bosch Authorized Workshop"
              value={formData.serviceCenter}
              onChange={(e) => setFormData({ ...formData, serviceCenter: e.target.value })}
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
              Save Service Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
