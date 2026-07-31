"use client";

const actions = [
  {
    title: "Upload Document",
    icon: "upload_file",
  },
  {
    title: "Assign Vehicle",
    icon: "local_shipping",
  },
  {
    title: "Log Service",
    icon: "build",
  },
];

export default function NotificationActionsPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

      <h2 className="font-bold text-[#0b1c30] text-lg mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => (

          <button
            key={action.title}
            className="w-full flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-3 hover:bg-[#f8f9ff] transition"
          >

            <div className="w-10 h-10 rounded-lg bg-[#e8f0ff] flex items-center justify-center">

              <span className="material-symbols-outlined text-[#004ac6]">
                {action.icon}
              </span>

            </div>

            <span className="font-medium text-[#0b1c30]">
              {action.title}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}