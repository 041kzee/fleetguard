"use client";

const vehicles = [
  {
    id: "KA19AB1234",
    insurance: "15 Aug 2026",
    pollution: "10 Aug 2026",
    inspection: "22 Aug 2026",
    status: "Expiring Soon",
  },
  {
    id: "KA01CD4567",
    insurance: "02 Sep 2026",
    pollution: "28 Aug 2026",
    inspection: "15 Sep 2026",
    status: "Compliant",
  },
  {
    id: "KA05EF7890",
    insurance: "Expired",
    pollution: "Expired",
    inspection: "30 Jul 2026",
    status: "Overdue",
  },
  {
    id: "KA09GH2468",
    insurance: "18 Aug 2026",
    pollution: "20 Aug 2026",
    inspection: "26 Aug 2026",
    status: "Expiring Soon",
  },
];

export default function ExpiryTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mt-8 overflow-hidden">

      <div className="flex justify-between items-center px-6 py-5 border-b">

        <div>
          <h2 className="text-xl font-bold">
            Upcoming Compliance Expiry
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Monitor insurance, pollution and inspection certificates.
          </p>
        </div>

        <button className="text-blue-600 font-semibold hover:underline">
          View All
        </button>

      </div>

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="text-left px-6 py-4 font-semibold">
              Vehicle
            </th>

            <th className="text-left px-6 py-4 font-semibold">
              Insurance
            </th>

            <th className="text-left px-6 py-4 font-semibold">
              Pollution
            </th>

            <th className="text-left px-6 py-4 font-semibold">
              Inspection
            </th>

            <th className="text-left px-6 py-4 font-semibold">
              Status
            </th>

            <th className="text-right px-6 py-4 font-semibold">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle, index) => (

            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition"
            >

              <td className="px-6 py-5 font-medium">
                {vehicle.id}
              </td>

              <td className="px-6 py-5">
                {vehicle.insurance}
              </td>

              <td className="px-6 py-5">
                {vehicle.pollution}
              </td>

              <td className="px-6 py-5">
                {vehicle.inspection}
              </td>

              <td className="px-6 py-5">

                {vehicle.status === "Compliant" && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Compliant
                  </span>
                )}

                {vehicle.status === "Expiring Soon" && (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Expiring Soon
                  </span>
                )}

                {vehicle.status === "Overdue" && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    Overdue
                  </span>
                )}

              </td>

              <td className="px-6 py-5 text-right">

                <button className="text-blue-600 hover:underline font-medium">
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}