"use client";

import ServiceRow from "./ServiceRow";

const records = [
  {
    vehicle: "Toyota Innova",
    regNo: "KA19AB1234",
    service: "Oil Change",
    date: "25 Jul 2026",
    mileage: "58,240 km",
    cost: "120.00",
    status: "Completed",
  },
  {
    vehicle: "Mahindra Bolero",
    regNo: "KA05CD9876",
    service: "Brake Service",
    date: "22 Jul 2026",
    mileage: "82,300 km",
    cost: "340.00",
    status: "Completed",
  },
  {
    vehicle: "Tata Ace",
    regNo: "KA21EF5555",
    service: "Engine Inspection",
    date: "18 Jul 2026",
    mileage: "102,400 km",
    cost: "560.00",
    status: "Pending",
  },
  {
    vehicle: "Hyundai Creta",
    regNo: "KA11GH2222",
    service: "Wheel Alignment",
    date: "14 Jul 2026",
    mileage: "41,500 km",
    cost: "80.00",
    status: "Completed",
  },
];

export default function ServiceTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr className="text-left text-gray-600">

            <th className="px-6 py-4">Vehicle</th>
            <th className="px-6 py-4">Service Type</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Mileage</th>
            <th className="px-6 py-4">Cost</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {records.map((record) => (
            <ServiceRow
              key={record.regNo + record.date}
              record={record}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}