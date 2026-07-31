"use client";

const tasks = [
  {
    title: "Vehicle KA-01-AB-1234 Service",
    date: "Today",
  },
  {
    title: "Insurance Renewal",
    date: "Tomorrow",
  },
  {
    title: "Compliance Audit",
    date: "2 Aug",
  },
  {
    title: "Assign New Driver",
    date: "5 Aug",
  },
];

export default function UpcomingTasks() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-6">
        Upcoming Tasks
      </h2>

      <div className="space-y-5">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-[#004ac6] mt-2"></div>

            <div>
              <h4 className="font-semibold text-slate-800">
                {task.title}
              </h4>

              <p className="text-sm text-slate-500">
                {task.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}