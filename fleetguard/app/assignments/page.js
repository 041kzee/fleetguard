"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Navbar";

export default function HistoryPage() {
  // Navigation / View state: 'flow' shows the assignment workflow card (reference image), 'table' shows complete history log table
  const [activeView, setActiveView] = useState("flow"); 

  // Form State matching reference screenshot
  const [driverSearch, setDriverSearch] = useState("");
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState({
    name: "Marcus Chen",
    empId: "FG-9921-MC",
    license: "Class A (CDL)",
    status: "Available",
    avatar: "MC",
  });
  const [selectedVehicle, setSelectedVehicle] = useState({
    registration: "FG-782-X",
    model: "Fuso eCanter 2024",
    mileage: "12,450 km",
  });
  const [startDate, setStartDate] = useState("2023-11-15");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSavedAlert, setIsSavedAlert] = useState(false);

  // Table Filter & Search State for Full History Log
  const [historySearch, setHistorySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedLog, setSelectedLog] = useState(null);

  // Historical Records Data
  const [historyRecords, setHistoryRecords] = useState([
    {
      id: "ASN-2023-991",
      driver: "Marcus Chen",
      empId: "FG-9921-MC",
      license: "Class A (CDL)",
      vehicle: "FG-782-X",
      model: "Fuso eCanter 2024",
      startDate: "2023-11-15",
      endDate: "Indefinite",
      status: "ACTIVE",
      region: "North Region",
      mileage: "12,450 km",
      compliance: "Valid",
      notes: "Standard express delivery route #402 North Region",
    },
    {
      id: "ASN-2023-882",
      driver: "Sara Miller",
      empId: "FG-4412-SM",
      license: "Class B (CDL)",
      vehicle: "FG-201-B",
      model: "Volvo FH16 Truck",
      startDate: "2023-11-01",
      endDate: "Active",
      status: "ACTIVE",
      region: "North Region",
      mileage: "45,210 km",
      compliance: "Valid",
      notes: "Intercity freight route from Depot A to Hub B",
    },
    {
      id: "ASN-2023-774",
      driver: "James Wilson",
      empId: "FG-3310-JW",
      license: "Class C Standard",
      vehicle: "FG-092-S",
      model: "Mercedes Sprinter Van",
      startDate: "2023-10-20",
      endDate: "Active",
      status: "ACTIVE",
      region: "East Region",
      mileage: "28,900 km",
      compliance: "Valid",
      notes: "Local parcel distribution",
    },
    {
      id: "ASN-2023-612",
      driver: "Elena Lopez",
      empId: "FG-1129-EL",
      license: "Class A (CDL)",
      vehicle: "FG-551-M",
      model: "MAN TGX Hauler",
      startDate: "2023-09-10",
      endDate: "2023-11-10",
      status: "ENDED",
      region: "West Region",
      mileage: "62,100 km",
      compliance: "Valid",
      notes: "Seasonal haulage contract completed",
    },
    {
      id: "ASN-2023-505",
      driver: "David Kim",
      empId: "FG-8823-DK",
      license: "Class B (CDL)",
      vehicle: "FG-118-K",
      model: "Scania R-Series",
      startDate: "2023-08-01",
      endDate: "2023-10-15",
      status: "ENDED",
      region: "North Region",
      mileage: "78,400 km",
      compliance: "Expired Renewal",
      notes: "Returned to depot for routine 80k overhaul",
    },
    {
      id: "ASN-2023-401",
      driver: "Ray Baxter",
      empId: "FG-2291-RB",
      license: "Class C Standard",
      vehicle: "FG-303-T",
      model: "Ford Transit Custom",
      startDate: "2023-06-15",
      endDate: "2023-09-01",
      status: "ENDED",
      region: "South Region",
      mileage: "19,850 km",
      compliance: "Valid",
      notes: "Short-term regional distribution",
    },
  ]);

  const handleConfirmAssignment = (e) => {
    e.preventDefault();
    const newRecord = {
      id: `ASN-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      driver: selectedDriver.name,
      empId: selectedDriver.empId,
      license: selectedDriver.license,
      vehicle: selectedVehicle.registration,
      model: selectedVehicle.model,
      startDate: startDate || "2023-11-15",
      endDate: endDate || "Indefinite",
      status: "ACTIVE",
      region: "North Region",
      mileage: selectedVehicle.mileage,
      compliance: "Valid",
      notes: notes || "Newly confirmed assignment via Operations Hub",
    };

    setHistoryRecords([newRecord, ...historyRecords]);
    setIsSavedAlert(true);
    setTimeout(() => setIsSavedAlert(false), 4000);
  };

  const filteredRecords = historyRecords.filter((rec) => {
    const matchesSearch =
      rec.driver.toLowerCase().includes(historySearch.toLowerCase()) ||
      rec.vehicle.toLowerCase().includes(historySearch.toLowerCase()) ||
      rec.id.toLowerCase().includes(historySearch.toLowerCase()) ||
      rec.model.toLowerCase().includes(historySearch.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ? true : rec.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#f4f6fa] text-[#0b1c30]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Navbar */}
        <Header
          activeTab="Assignments"
          onActionClick={() => setActiveView("flow")}
          actionLabel="New Assignment"
        />

        <main className="p-6 md:p-8 flex-1 animate-fade-up max-w-[1600px] w-full mx-auto space-y-6">
          {/* Top Breadcrumb & View Toggle Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#565e74] font-medium mb-1">
                <span>Dashboard</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-[#004ac6] font-semibold">Driver Assignments & History</span>
              </div>
              <h1 className="text-xl font-bold text-[#0b1c30]">Driver Assignments</h1>
            </div>

            {/* View Mode Toggle Switch */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-[#e2e8f0] shadow-xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveView("flow")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeView === "flow"
                    ? "bg-[#004ac6] text-white shadow-sm"
                    : "text-[#565e74] hover:text-[#0b1c30]"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
                <span>Assignment Form</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView("table")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeView === "table"
                    ? "bg-[#004ac6] text-white shadow-sm"
                    : "text-[#565e74] hover:text-[#0b1c30]"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">history</span>
                <span>Full History Log ({historyRecords.length})</span>
              </button>
            </div>
          </div>

          {/* Success Notification Alert */}
          {isSavedAlert && (
            <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-[#065f46] text-xs font-medium flex items-center justify-between shadow-xs animate-fade-up">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#10b981]">check_circle</span>
                <span>Assignment confirmed successfully! Added to operational history log.</span>
              </div>
              <button onClick={() => setIsSavedAlert(false)} className="text-[#065f46] hover:underline font-bold">
                Dismiss
              </button>
            </div>
          )}

          {/* VIEW MODE 1: ASSIGNMENT FORM & SUMMARY SIDEBAR (EXACT MATCH TO REFERENCE SCREENSHOT) */}
          {activeView === "flow" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT FORM CONTAINER (Lg: 8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 shadow-xs space-y-8">
                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-5">
                  <h2 className="text-base font-bold text-[#0b1c30]">New Driver Assignment</h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9ff] text-[#004ac6] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">info</span>
                    <span>Step 1 of 3</span>
                  </span>
                </div>

                <form onSubmit={handleConfirmAssignment} className="space-y-8 text-xs">
                  {/* STEP 1: SELECT DRIVER */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0b1c30]">
                      <div className="w-6 h-6 rounded-full bg-[#004ac6] text-white flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <span>Select Driver</span>
                    </div>

                    {/* Driver Search Input */}
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737686] text-[18px]">
                        search
                      </span>
                      <input
                        type="text"
                        placeholder="Search driver by name or ID..."
                        value={driverSearch}
                        onChange={(e) => setDriverSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                      />
                    </div>

                    {/* Selected Driver Card */}
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Avatar Image Placeholder */}
                        <div className="w-14 h-14 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center font-bold text-lg text-[#004ac6] relative overflow-hidden">
                          <span className="material-symbols-outlined text-[32px] text-[#004ac6]">person</span>
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">DRIVER NAME</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm text-[#0b1c30]">{selectedDriver.name}</h3>
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#10b981]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                              Available
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Info Metadata Grid */}
                      <div className="hidden sm:flex items-center gap-8 text-left">
                        <div>
                          <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">EMP ID</p>
                          <p className="font-semibold text-[#0b1c30] text-xs">{selectedDriver.empId}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">LICENSE</p>
                          <p className="font-semibold text-[#0b1c30] text-xs">{selectedDriver.license}</p>
                        </div>
                      </div>

                      {/* Edit Button */}
                      <button type="button" className="p-2 text-[#004ac6] hover:bg-[#dce9ff] rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                  </div>

                  {/* STEP 2: SELECT VEHICLE */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0b1c30]">
                      <div className="w-6 h-6 rounded-full bg-[#004ac6] text-white flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <span>Select Vehicle</span>
                    </div>

                    {/* Vehicle Search Input */}
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737686] text-[18px]">
                        search
                      </span>
                      <input
                        type="text"
                        placeholder="Search vehicle by registration..."
                        value={vehicleSearch}
                        onChange={(e) => setVehicleSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                      />
                    </div>

                    {/* Selected Vehicle Card */}
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Vehicle Image Box */}
                        <div className="w-20 h-14 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20 flex items-center justify-center text-[#004ac6] font-bold overflow-hidden">
                          <span className="material-symbols-outlined text-[36px] text-[#004ac6]">local_shipping</span>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">REGISTRATION</p>
                          <h3 className="font-bold text-sm text-[#0b1c30]">{selectedVehicle.registration}</h3>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-8">
                        <div>
                          <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">MODEL</p>
                          <p className="font-semibold text-[#0b1c30] text-xs">{selectedVehicle.model}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">MILEAGE</p>
                          <p className="font-semibold text-[#0b1c30] text-xs">{selectedVehicle.mileage}</p>
                        </div>
                      </div>

                      {/* Swap Button */}
                      <button type="button" className="p-2 text-[#004ac6] hover:bg-[#dce9ff] rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
                      </button>
                    </div>
                  </div>

                  {/* STEP 3: COMPLIANCE CHECK */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#0b1c30]">
                        <div className="w-6 h-6 rounded-full bg-[#004ac6] text-white flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <span>Compliance Check</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#10b981]">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <span>All Systems Operational</span>
                      </span>
                    </div>

                    {/* 4 Compliance Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                        <span className="text-[10px] font-bold text-[#737686] uppercase">Insurance</span>
                        <p className="font-bold text-[#10b981] text-xs">Valid</p>
                        <p className="text-[10px] text-[#565e74]">Expires 12/2025</p>
                      </div>

                      <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                        <span className="text-[10px] font-bold text-[#737686] uppercase">Inspection</span>
                        <p className="font-bold text-[#10b981] text-xs">Valid</p>
                        <p className="text-[10px] text-[#565e74]">Expires 08/2024</p>
                      </div>

                      <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                        <span className="text-[10px] font-bold text-[#737686] uppercase">Emission</span>
                        <p className="font-bold text-[#10b981] text-xs">Valid</p>
                        <p className="text-[10px] text-[#565e74]">Next: 01/2025</p>
                      </div>

                      <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                        <span className="text-[10px] font-bold text-[#737686] uppercase">Service</span>
                        <p className="font-bold text-[#10b981] text-xs">Valid</p>
                        <p className="text-[10px] text-[#565e74]">In 3,500 km</p>
                      </div>
                    </div>

                    {/* Green Alert Banner */}
                    <div className="p-3 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl flex items-center gap-2 text-[#065f46] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>Vehicle is eligible for assignment.</span>
                    </div>
                  </div>

                  {/* STEP 4: ASSIGNMENT DETAILS */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0b1c30]">
                      <div className="w-6 h-6 rounded-full bg-[#004ac6] text-white flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <span>Assignment Details</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#434655] mb-1.5">Start Date</label>
                        <input
                          type="text"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          placeholder="15-11-2023"
                          className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#434655] mb-1.5">End Date (Optional)</label>
                        <input
                          type="text"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          placeholder="dd-mm-yyyy"
                          className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#434655] mb-1.5">Assignment Notes</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Enter specific instructions or route details..."
                        className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                      />
                    </div>
                  </div>

                  {/* Form Action Buttons */}
                  <div className="flex items-center justify-end gap-3 border-t border-[#e2e8f0] pt-5">
                    <button
                      type="button"
                      className="px-5 py-2.5 border border-[#e2e8f0] text-[#434655] hover:bg-[#f1f5f9] rounded-xl font-semibold transition-colors"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#004ac6] hover:bg-[#003996] text-white font-bold rounded-xl shadow-md shadow-[#004ac6]/20 transition-all"
                    >
                      Confirm Assignment
                    </button>
                  </div>
                </form>
              </div>

              {/* RIGHT SIDEBAR PANELS (Lg: 4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* CARD 1: SUMMARY */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs space-y-4">
                  <h3 className="font-bold text-sm text-[#0b1c30]">Summary</h3>

                  <div className="space-y-3 text-xs divide-y divide-[#e2e8f0]">
                    <div className="pt-2 flex justify-between">
                      <span className="text-[#737686] font-semibold uppercase">DRIVER</span>
                      <div className="text-right">
                        <p className="font-bold text-[#0b1c30]">{selectedDriver.name}</p>
                        <p className="text-[10px] text-[#565e74]">{selectedDriver.empId}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <span className="text-[#737686] font-semibold uppercase">VEHICLE</span>
                      <div className="text-right">
                        <p className="font-bold text-[#0b1c30]">{selectedVehicle.registration}</p>
                        <p className="text-[10px] text-[#565e74]">{selectedVehicle.model}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <span className="text-[#737686] font-semibold uppercase">PERIOD</span>
                      <div className="text-right">
                        <p className="font-bold text-[#0b1c30]">Indefinite</p>
                        <p className="text-[10px] text-[#565e74]">Starts Nov 15, 2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e2e8f0] flex items-center gap-2 text-[#004ac6] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Verified for North Region</span>
                  </div>
                </div>

                {/* CARD 2: FLEET GUIDELINES */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs space-y-3">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#737686]">FLEET GUIDELINES</h3>

                  <ul className="space-y-2.5 text-xs text-[#434655]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-[16px] mt-0.5">info</span>
                      <span>Check fluid levels before every shift.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-[16px] mt-0.5">info</span>
                      <span>Log all fueling transactions in the FleetGuard app.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-[16px] mt-0.5">info</span>
                      <span>Adhere to regional speed limits (max 100km/h).</span>
                    </li>
                  </ul>
                </div>

                {/* CARD 3: RECENT ACTIVITY */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-[#737686]">RECENT ACTIVITY</h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    {/* Activity Item 1 */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#dce9ff] text-[#004ac6] flex items-center justify-center font-bold text-xs">
                          SM
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1c30]">Sara Miller</p>
                          <p className="text-[10px] text-[#565e74]">Truck FG-201-B</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-[#ecfdf5] text-[#10b981] rounded-md font-bold text-[10px]">
                        ACTIVE
                      </span>
                    </div>

                    {/* Activity Item 2 */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#dce9ff] text-[#004ac6] flex items-center justify-center font-bold text-xs">
                          JW
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1c30]">James Wilson</p>
                          <p className="text-[10px] text-[#565e74]">Van FG-092-S</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-[#ecfdf5] text-[#10b981] rounded-md font-bold text-[10px]">
                        ACTIVE
                      </span>
                    </div>

                    {/* Activity Item 3 */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#e2e8f0] text-[#565e74] flex items-center justify-center font-bold text-xs">
                          EL
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1c30]">Elena Lopez</p>
                          <p className="text-[10px] text-[#565e74]">Truck FG-551-M</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-[#e2e8f0] text-[#565e74] rounded-md font-bold text-[10px]">
                        ENDED
                      </span>
                    </div>

                    {/* Activity Item 4 */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#e2e8f0] text-[#565e74] flex items-center justify-center font-bold text-xs">
                          DK
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1c30]">David Kim</p>
                          <p className="text-[10px] text-[#565e74]">Truck FG-118-K</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-[#e2e8f0] text-[#565e74] rounded-md font-bold text-[10px]">
                        ENDED
                      </span>
                    </div>

                    {/* Activity Item 5 */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#e2e8f0] text-[#565e74] flex items-center justify-center font-bold text-xs">
                          RB
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1c30]">Ray Baxter</p>
                          <p className="text-[10px] text-[#565e74]">Van FG-303-T</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-[#e2e8f0] text-[#565e74] rounded-md font-bold text-[10px]">
                        ENDED
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setActiveView("table")}
                      className="text-xs font-bold text-[#004ac6] hover:underline"
                    >
                      View History &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: COMPLETE OPERATIONAL HISTORY LOG TABLE */}
          {activeView === "table" && (
            <div className="space-y-6">
              {/* Filter Controls Bar */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:w-96">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737686] text-[18px]">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search history by driver, vehicle, registration, or assignment ID..."
                    value={historySearch}
                    onChange={(e) => setHistorySearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                  />
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                  <span className="text-xs font-semibold text-[#565e74] whitespace-nowrap">Filter Status:</span>
                  {["ALL", "ACTIVE", "ENDED"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        statusFilter === status
                          ? "bg-[#004ac6] text-white shadow-xs"
                          : "bg-[#f8f9ff] text-[#565e74] hover:bg-[#e2e8f0]"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table Container */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[#737686] uppercase font-bold text-[10px] tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Assignment ID</th>
                        <th className="px-6 py-4">Driver Name</th>
                        <th className="px-6 py-4">Vehicle Details</th>
                        <th className="px-6 py-4">Start Date</th>
                        <th className="px-6 py-4">End Date</th>
                        <th className="px-6 py-4">Region</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e2e8f0]">
                      {filteredRecords.length > 0 ? (
                        filteredRecords.map((rec) => (
                          <tr key={rec.id} className="hover:bg-[#f8f9ff] transition-colors">
                            <td className="px-6 py-4 font-mono font-bold text-[#004ac6]">{rec.id}</td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#0b1c30]">{rec.driver}</p>
                              <p className="text-[10px] text-[#565e74]">{rec.empId}</p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#0b1c30]">{rec.vehicle}</p>
                              <p className="text-[10px] text-[#565e74]">{rec.model}</p>
                            </td>
                            <td className="px-6 py-4 font-medium text-[#434655]">{rec.startDate}</td>
                            <td className="px-6 py-4 font-medium text-[#434655]">{rec.endDate}</td>
                            <td className="px-6 py-4 text-[#565e74]">{rec.region}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                                  rec.status === "ACTIVE"
                                    ? "bg-[#ecfdf5] text-[#10b981]"
                                    : "bg-[#e2e8f0] text-[#565e74]"
                                }`}
                              >
                                {rec.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => setSelectedLog(rec)}
                                className="px-3 py-1 bg-[#dce9ff] text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-lg font-bold transition-all text-xs"
                              >
                                View Record
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} className="px-6 py-12 text-center text-[#565e74]">
                            No history records match your search query.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Record Detail Modal */}
          {selectedLog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-up">
              <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#e2e8f0] space-y-4">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6]">assignment</span>
                    <h3 className="font-bold text-base text-[#0b1c30]">Assignment Details - {selectedLog.id}</h3>
                  </div>
                  <button onClick={() => setSelectedLog(null)} className="text-[#565e74] hover:text-[#0b1c30]">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-4 bg-[#f8fafc] p-3 rounded-xl">
                    <div>
                      <p className="text-[10px] font-bold text-[#737686] uppercase">Driver</p>
                      <p className="font-bold text-[#0b1c30]">{selectedLog.driver}</p>
                      <p className="text-[10px] text-[#565e74]">{selectedLog.empId} ({selectedLog.license})</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#737686] uppercase">Vehicle</p>
                      <p className="font-bold text-[#0b1c30]">{selectedLog.vehicle}</p>
                      <p className="text-[10px] text-[#565e74]">{selectedLog.model}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-[#e2e8f0] pt-3">
                    <div>
                      <p className="text-[#737686]">Start Date:</p>
                      <p className="font-semibold text-[#0b1c30]">{selectedLog.startDate}</p>
                    </div>
                    <div>
                      <p className="text-[#737686]">End Date:</p>
                      <p className="font-semibold text-[#0b1c30]">{selectedLog.endDate}</p>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e8f0] pt-3">
                    <p className="text-[#737686]">Notes / Route Instructions:</p>
                    <p className="font-medium text-[#0b1c30] mt-0.5 bg-[#f8f9ff] p-2.5 rounded-lg border border-[#e2e8f0]">
                      {selectedLog.notes}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-3 border-t border-[#e2e8f0]">
                  <button
                    onClick={() => setSelectedLog(null)}
                    className="px-4 py-2 bg-[#004ac6] text-white font-semibold rounded-xl text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
