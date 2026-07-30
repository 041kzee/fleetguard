const activities = [
  {
    title: "Fueling Logged",
    desc: "42 Liters @ HP Station",
    time: "2h ago",
  },
  {
    title: "Route Completed",
    desc: "Mumbai to Pune",
    time: "5h ago",
  },
  {
    title: "Shift Change",
    desc: "Driver Assigned",
    time: "12h ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="font-semibold text-lg mb-5">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (

          <div key={item.title}>

            <p className="font-medium">
              {item.title}
            </p>

            <p className="text-sm text-gray-500">
              {item.desc}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              {item.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}