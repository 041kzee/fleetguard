"use client";

import { useState } from "react";

export default function RegisterVehicleModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    vin: "",
    make: "",
    model: "",
    year: "2024",
    licensePlate: "",
    odometer: "",
    type: "Truck",
    status: "ACTIVE",
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
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">Register New Vehicle</h2>
              <p className="text-xs text-[#565e74]">Add a vehicle to your fleet registry</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#565e74] hover:text-[#0b1c30]">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Make</label>
              <input
                type="text"
                required
                placeholder="e.g. Toyota"
                value={formData.make}
                onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Model</label>
              <input
                type="text"
                required
                placeholder="e.g. Innova Hycross"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">VIN Number</label>
              <input
                type="text"
                required
                placeholder="17-digit VIN"
                value={formData.vin}
                onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">License Plate</label>
              <input
                type="text"
                required
                placeholder="e.g. KA 01 EQ 4589"
                value={formData.licensePlate}
                onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#434655] font-medium mb-1">Initial Odometer (km)</label>
              <input
                type="number"
                required
                placeholder="e.g. 15400"
                value={formData.odometer}
                onChange={(e) => setFormData({ ...formData, odometer: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-[#434655] font-medium mb-1">Vehicle Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
              >
                <option value="Truck">Delivery Truck</option>
                <option value="Van">Cargo Van</option>
                <option value="Passenger">Passenger SUV / Sedan</option>
                <option value="Heavy">Heavy Transport</option>
              </select>
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
              Save Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
