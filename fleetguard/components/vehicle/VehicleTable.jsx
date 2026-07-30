"use client";

import VehicleRow from "./VehicleRow";

const vehicles = [
  {
    id: 1,
    number: "KA-19-AB-4587",
    type: "Truck",
    driver: "Rahul Sharma",
    compliance: "Compliant",
    service: "15 Aug 2026",
    status: "Active",
  },
  {
    id: 2,
    number: "KA-20-CD-2241",
    type: "Van",
    driver: "Priya Nair",
    compliance: "Expiring Soon",
    service: "02 Aug 2026",
    status: "Active",
  },
  {
    id: 3,
    number: "KA-01-EF-7788",
    type: "Car",
    driver: "Arjun Kumar",
    compliance: "Expired",
    service: "Overdue",
    status: "Inactive",
  },
  {
    id: 4,
    number: "KA-05-GH-9921",
    type: "Truck",
    driver: "Sneha Rao",
    compliance: "Compliant",
    service: "22 Sep 2026",
    status: "Active",
  },
];

export default function VehicleTable() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr className="text-left">

            <th className="px-6 py-4">Vehicle Number</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Assigned Driver</th>
            <th className="px-6 py-4">Compliance</th>
            <th className="px-6 py-4">Next Service</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (
            <VehicleRow
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}