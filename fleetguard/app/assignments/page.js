"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Navbar";

export default function HistoryPage() {
  // Navigation / View state: 'flow' shows the assignment workflow card, 'table' shows complete history log table
  const [activeView, setActiveView] = useState("flow");

  // Search inputs
  const [driverSearch, setDriverSearch] = useState("");
  const [vehicleSearch, setVehicleSearch] = useState("");

  // Backend data
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(true);
  const [vehiclesError, setVehiclesError] = useState("");

  // Selection state — null until the user actually picks something.
  // No more hardcoded default driver/vehicle objects.
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSavedAlert, setIsSavedAlert] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Table Filter & Search State for Full History Log
  const [historySearch, setHistorySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedLog, setSelectedLog] = useState(null);

  // NOTE: there's no GET /api/assignments endpoint in the spec you gave me,
  // so this history log stays as local/demo data for now. Newly confirmed
  // assignments get prepended to it optimistically so the UI still reflects
  // what you just did. Swap this for a real fetch once that endpoint exists.
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

  // Compliance is derived entirely on the frontend from insurance_expiry /
  // emission_expiry — a vehicle is Compliant only if both dates are today or later.
  const getVehicleCompliance = (vehicle) => {
    if (!vehicle) {
      return { compliant: false, insuranceExpired: false, emissionExpired: false };
    }
    const today = new Date();
    const insuranceExpiry = vehicle.insurance_expiry ? new Date(vehicle.insurance_expiry) : null;
    const emissionExpiry = vehicle.emission_expiry ? new Date(vehicle.emission_expiry) : null;

    const insuranceExpired = insuranceExpiry ? today > insuranceExpiry : false;
    const emissionExpired = emissionExpiry ? today > emissionExpiry : false;

    return {
      compliant: !insuranceExpired && !emissionExpired,
      insuranceExpired,
      emissionExpired,
    };
  };

  useEffect(() => {
    fetchDrivers();
    fetchVehicles();
  }, []);

  const fetchDrivers = async () => {
    try {
      const res = await fetch("/api/drivers");

      if (!res.ok) {
        console.error(`Failed to load drivers (status ${res.status}).`);
        return;
      }

      const data = await res.json();
      setDrivers(data);
      setFilteredDrivers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVehicles = async () => {
    setVehiclesLoading(true);
    setVehiclesError("");
    try {
      const res = await fetch("/api/vehicles");

      if (!res.ok) {
        let message = `Failed to load vehicles (status ${res.status}).`;
        try {
          const data = await res.json();
          message = data.message || message;
        } catch {
          // Response had no JSON body (e.g. a 405) — keep the status-based message.
        }
        throw new Error(message);
      }

      const data = await res.json();
      setVehicles(data);
      setFilteredVehicles(data);
    } catch (err) {
      console.error(err);
      setVehiclesError(err.message || "Could not load vehicles. Please refresh the page.");
    } finally {
      setVehiclesLoading(false);
    }
  };

  const handleConfirmAssignment = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!selectedDriver || !selectedVehicle) {
      setSubmitError("Please select both a driver and a vehicle before confirming.");
      return;
    }

    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle_number: selectedVehicle.vehicle_number,
          driver_name: selectedDriver.user?.full_name,
          fleet_manager_id: null, // TODO: replace with the logged-in user's ID
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.message || "Failed to create assignment.");
        return;
      }

      // Reflect the assignment the API actually created in the local history log
      const created = data.assignment;
      const newRecord = {
        id: created?.id ?? `ASN-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
        driver: created?.driver?.user?.full_name ?? selectedDriver.user?.full_name ?? "Unknown Driver",
        empId: selectedDriver.user?.id ?? "-",
        license: selectedDriver.license_number ?? "-",
        vehicle: created?.vehicle?.vehicle_number ?? selectedVehicle.vehicle_number ?? "-",
        model: [selectedVehicle.brand, selectedVehicle.model].filter(Boolean).join(" ") || "-",
        startDate: created?.assigned_date ?? startDate ?? "-",
        endDate: "Indefinite",
        status: created?.status ?? "ACTIVE",
        region: "North Region",
        mileage: selectedVehicle.current_mileage ?? "-",
        compliance: "Valid",
        notes: notes || "Newly confirmed assignment via Operations Hub",
      };

      setHistoryRecords([newRecord, ...historyRecords]);
      setIsSavedAlert(true);
      setTimeout(() => setIsSavedAlert(false), 4000);

      // Reset the form for the next assignment
      setSelectedDriver(null);
      setSelectedVehicle(null);
      setDriverSearch("");
      setVehicleSearch("");
      setStartDate("");
      setEndDate("");
      setNotes("");
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to create assignment.");
    }
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

          {/* Error Alert */}
          {submitError && (
            <div className="p-4 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#991b1b] text-xs font-medium flex items-center justify-between shadow-xs animate-fade-up">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ef4444]">error</span>
                <span>{submitError}</span>
              </div>
              <button onClick={() => setSubmitError("")} className="text-[#991b1b] hover:underline font-bold">
                Dismiss
              </button>
            </div>
          )}

          {/* VIEW MODE 1: ASSIGNMENT FORM & SUMMARY SIDEBAR */}
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
                        onChange={(e) => {
                          const value = e.target.value;
                          setDriverSearch(value);
                          setFilteredDrivers(
                            drivers.filter((driver) =>
                              driver.user?.full_name
                                ?.toLowerCase()
                                .includes(value.toLowerCase())
                            )
                          );
                        }}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                      />

                      {driverSearch && (
                        <div className="mt-2 border border-[#e2e8f0] rounded-xl bg-white max-h-60 overflow-y-auto shadow-md absolute z-10 w-full">
                          {filteredDrivers.length > 0 ? (
                            filteredDrivers.map((driver) => (
                              <div
                                key={driver.id}
                                onClick={() => {
                                  setSelectedDriver(driver);
                                  setDriverSearch("");
                                }}
                                className="p-3 cursor-pointer hover:bg-[#f8f9ff]"
                              >
                                <div className="font-semibold text-[#0b1c30]">
                                  {driver.user?.full_name}
                                </div>
                                <div className="text-[10px] text-[#565e74]">
                                  {driver.user?.email} &middot; {driver.license_number}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-3 text-[#565e74]">No drivers match your search.</div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Selected Driver Card */}
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 flex items-center justify-between">
                      {selectedDriver ? (
                        <>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[32px] text-[#004ac6]">
                                person
                              </span>
                            </div>
                            <div>
                              <h3 className="font-bold text-sm">{selectedDriver.user?.full_name}</h3>
                              <p className="text-xs text-gray-500">{selectedDriver.user?.email}</p>
                            </div>
                          </div>

                          {/* Info Metadata Grid */}
                          <div className="hidden sm:flex items-center gap-8 text-left">
                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">EMP ID</p>
                              <p className="font-semibold text-[#0b1c30] text-xs">{selectedDriver.user?.id}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">LICENSE</p>
                              <p className="font-semibold text-[#0b1c30] text-xs">{selectedDriver.license_number}</p>
                            </div>
                          </div>

                          {/* Clear Selection Button */}
                          <button
                            type="button"
                            onClick={() => setSelectedDriver(null)}
                            className="p-2 text-[#004ac6] hover:bg-[#dce9ff] rounded-lg transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                        </>
                      ) : (
                        <div className="w-full text-center py-2 text-[#737686] font-medium">
                          No driver selected — search above to choose one
                        </div>
                      )}
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
                        onChange={(e) => {
                          const value = e.target.value;
                          setVehicleSearch(value);
                          const query = value.toLowerCase();
                          setFilteredVehicles(
                            vehicles.filter(
                              (vehicle) =>
                                vehicle.vehicle_number?.toLowerCase().includes(query) ||
                                vehicle.brand?.toLowerCase().includes(query) ||
                                vehicle.model?.toLowerCase().includes(query)
                            )
                          );
                        }}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                      />

                      {vehicleSearch && (
                        <div className="mt-2 border border-[#e2e8f0] rounded-xl bg-white max-h-60 overflow-y-auto shadow-md absolute z-10 w-full">
                          {vehiclesLoading ? (
                            <div className="p-3 text-[#565e74]">Loading vehicles...</div>
                          ) : vehiclesError ? (
                            <div className="p-3 text-[#991b1b]">{vehiclesError}</div>
                          ) : filteredVehicles.length > 0 ? (
                            filteredVehicles.map((vehicle) => {
                              const { compliant } = getVehicleCompliance(vehicle);
                              return (
                                <div
                                  key={vehicle.id}
                                  onClick={() => {
                                    setSelectedVehicle(vehicle);
                                    setVehicleSearch("");
                                  }}
                                  className="p-3 cursor-pointer hover:bg-[#f8f9ff] flex items-center justify-between gap-2"
                                >
                                  <div>
                                    <div className="font-semibold text-[#0b1c30]">
                                      {vehicle.vehicle_number}
                                    </div>
                                    <div className="text-[10px] text-[#565e74]">
                                      {[vehicle.brand, vehicle.model].filter(Boolean).join(" ")}
                                    </div>
                                  </div>
                                  <span
                                    className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                                      compliant ? "bg-[#ecfdf5] text-[#10b981]" : "bg-[#fef2f2] text-[#ef4444]"
                                    }`}
                                  >
                                    {compliant ? "Compliant" : "Inactive"}
                                  </span>
                                </div>
                              );
                            })
                          ) : (
                            <div className="p-3 text-[#565e74]">No vehicles match your search.</div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Selected Vehicle Card */}
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 flex items-center justify-between">
                      {selectedVehicle ? (
                        <>
                          <div className="flex items-center gap-4">
                            {/* Vehicle Image Box */}
                            <div className="w-20 h-14 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20 flex items-center justify-center text-[#004ac6] font-bold overflow-hidden">
                              <span className="material-symbols-outlined text-[36px] text-[#004ac6]">local_shipping</span>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">REGISTRATION</p>
                              <h3 className="font-bold text-sm text-[#0b1c30]">{selectedVehicle.vehicle_number}</h3>
                            </div>
                          </div>

                          <div className="hidden sm:flex items-center gap-8">
                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">MODEL</p>
                              <p className="font-semibold text-[#0b1c30] text-xs">
                                {[selectedVehicle.brand, selectedVehicle.model].filter(Boolean).join(" ") || "-"}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">MILEAGE</p>
                              <p className="font-semibold text-[#0b1c30] text-xs">{selectedVehicle.current_mileage ?? "-"}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">STATUS</p>
                              <p
                                className={`font-semibold text-xs ${
                                  getVehicleCompliance(selectedVehicle).compliant ? "text-[#10b981]" : "text-[#ef4444]"
                                }`}
                              >
                                {getVehicleCompliance(selectedVehicle).compliant ? "Compliant" : "Inactive"}
                              </p>
                            </div>
                          </div>

                          {/* Clear Selection Button */}
                          <button
                            type="button"
                            onClick={() => setSelectedVehicle(null)}
                            className="p-2 text-[#004ac6] hover:bg-[#dce9ff] rounded-lg transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
                          </button>
                        </>
                      ) : (
                        <div className="w-full text-center py-2 text-[#737686] font-medium">
                          No vehicle selected — search above to choose one
                        </div>
                      )}
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
                      {(() => {
                        const { compliant } = getVehicleCompliance(selectedVehicle);
                        return (
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold ${
                              compliant ? "text-[#10b981]" : "text-[#ef4444]"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              {compliant ? "check_circle" : "error"}
                            </span>
                            <span>{!selectedVehicle ? "Select a Vehicle" : compliant ? "Compliant" : "Inactive"}</span>
                          </span>
                        );
                      })()}
                    </div>

                    {/* 4 Compliance Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {(() => {
                        const { insuranceExpired, emissionExpired } = getVehicleCompliance(selectedVehicle);
                        return (
                          <>
                            <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                              <span className="text-[10px] font-bold text-[#737686] uppercase">Insurance</span>
                              <p className={`font-bold text-xs ${insuranceExpired ? "text-[#ef4444]" : "text-[#10b981]"}`}>
                                {selectedVehicle ? (insuranceExpired ? "Expired" : "Valid") : "-"}
                              </p>
                              <p className="text-[10px] text-[#565e74]">
                                {selectedVehicle?.insurance_expiry ? `Expires ${selectedVehicle.insurance_expiry}` : "No data"}
                              </p>
                            </div>

                            <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                              <span className="text-[10px] font-bold text-[#737686] uppercase">Inspection</span>
                              <p className="font-bold text-[#565e74] text-xs">N/A</p>
                              <p className="text-[10px] text-[#565e74]">Not tracked</p>
                            </div>

                            <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                              <span className="text-[10px] font-bold text-[#737686] uppercase">Emission</span>
                              <p className={`font-bold text-xs ${emissionExpired ? "text-[#ef4444]" : "text-[#10b981]"}`}>
                                {selectedVehicle ? (emissionExpired ? "Expired" : "Valid") : "-"}
                              </p>
                              <p className="text-[10px] text-[#565e74]">
                                {selectedVehicle?.emission_expiry ? `Expires ${selectedVehicle.emission_expiry}` : "No data"}
                              </p>
                            </div>

                            <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl space-y-1">
                              <span className="text-[10px] font-bold text-[#737686] uppercase">Service</span>
                              <p className="font-bold text-[#565e74] text-xs">N/A</p>
                              <p className="text-[10px] text-[#565e74]">Not tracked</p>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    {/* Compliance Alert Banner */}
                    {(() => {
                      const { compliant } = getVehicleCompliance(selectedVehicle);
                      if (!selectedVehicle) {
                        return (
                          <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex items-center gap-2 text-[#565e74] text-xs font-semibold">
                            <span className="material-symbols-outlined text-[18px]">info</span>
                            <span>Select a vehicle to run its compliance check.</span>
                          </div>
                        );
                      }
                      return compliant ? (
                        <div className="p-3 bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl flex items-center gap-2 text-[#065f46] text-xs font-semibold">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                          <span>Vehicle is eligible for assignment.</span>
                        </div>
                      ) : (
                        <div className="p-3 bg-[#fef2f2] border border-[#fecaca] rounded-xl flex items-center gap-2 text-[#991b1b] text-xs font-semibold">
                          <span className="material-symbols-outlined text-[18px]">warning</span>
                          <span>Vehicle is not eligible for assignment — compliance document expired.</span>
                        </div>
                      );
                    })()}
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
                        <p className="font-bold text-[#0b1c30]">{selectedDriver?.user?.full_name ?? "Not selected"}</p>
                        <p className="text-[10px] text-[#565e74]">{selectedDriver?.user?.id ?? ""}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <span className="text-[#737686] font-semibold uppercase">VEHICLE</span>
                      <div className="text-right">
                        <p className="font-bold text-[#0b1c30]">{selectedVehicle?.vehicle_number ?? "Not selected"}</p>
                        <p className="text-[10px] text-[#565e74]">
                          {[selectedVehicle?.brand, selectedVehicle?.model].filter(Boolean).join(" ")}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <span className="text-[#737686] font-semibold uppercase">PERIOD</span>
                      <div className="text-right">
                        <p className="font-bold text-[#0b1c30]">{endDate ? `${startDate || "-"} to ${endDate}` : "Indefinite"}</p>
                        <p className="text-[10px] text-[#565e74]">{startDate ? `Starts ${startDate}` : "No start date set"}</p>
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
                    {historyRecords.slice(0, 5).map((rec) => {
                      const initials = rec.driver
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase();
                      const isActive = rec.status === "ACTIVE";
                      return (
                        <div key={rec.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8fafc] transition-colors">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                                isActive ? "bg-[#dce9ff] text-[#004ac6]" : "bg-[#e2e8f0] text-[#565e74]"
                              }`}
                            >
                              {initials}
                            </div>
                            <div>
                              <p className="font-bold text-[#0b1c30]">{rec.driver}</p>
                              <p className="text-[10px] text-[#565e74]">{rec.vehicle}</p>
                            </div>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                              isActive ? "bg-[#ecfdf5] text-[#10b981]" : "bg-[#e2e8f0] text-[#565e74]"
                            }`}
                          >
                            {rec.status}
                          </span>
                        </div>
                      );
                    })}
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