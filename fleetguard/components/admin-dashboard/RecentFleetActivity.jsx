"use client";

const activities = [
  {
    vehicle: "KA-01-AB-1234",
    driver: "Rahul Sharma",
    activity: "Service Completed",
    status: "Completed",
    time: "2 hrs ago",
  },
  {
    vehicle: "KA-19-CD-5678",
    driver: "Anjali Rao",
    activity: "Assigned",
    status: "Assigned",
    time: "4 hrs ago",
  },
  {
    vehicle: "KA-02-EF-9901",
    driver: "Vikram Patel",
    activity: "Inspection",
    status: "Pending",
    time: "Yesterday",
  },
  {
    vehicle: "KA-18-GH-7765",
    driver: "Sneha Nair",
    activity: "Insurance Updated",
    status: "Completed",
    time: "Yesterday",
  },
];

const badge = {
  Completed: "bg-green-100 text-green-700",
  Assigned: "bg-blue-100 text-blue-700",
  Pending: "bg-orange-100 text-orange-700",
};

export default function RecentFleetActivity() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          Recent Fleet Activity
        </h2>

        <button className="text-sm font-semibold text-[#004ac6] hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left text-slate-500">
              <th className="py-3">Vehicle</th>
              <th>Driver</th>
              <th>Activity</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-slate-50 transition"
              >
                <td className="py-4 font-semibold">{item.vehicle}</td>

                <td>{item.driver}</td>

                <td>{item.activity}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${badge[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="text-slate-500">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}