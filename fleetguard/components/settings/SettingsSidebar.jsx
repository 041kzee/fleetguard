"use client";

const menuItems = [
  {
    title: "General",
    icon: "settings",
  },
  {
    title: "Company Profile",
    icon: "apartment",
  },
  {
    title: "Fleet Preferences",
    icon: "local_shipping",
  },
  {
    title: "Compliance Rules",
    icon: "gavel",
  },
  {
    title: "Notifications",
    icon: "notifications",
  },
  {
    title: "Security",
    icon: "shield",
  },
  {
    title: "Appearance",
    icon: "palette",
  },
  {
    title: "Account",
    icon: "person",
  },
];

export default function SettingsSidebar({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Settings
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage your FleetGuard preferences
        </p>
      </div>

      {/* Menu */}
      <div className="py-2">
        {menuItems.map((item) => {
          const active = activeTab === item.title;

          return (
            <button
              key={item.title}
              onClick={() => setActiveTab(item.title)}
              className={`w-full flex items-center gap-3 px-5 py-3 transition-all duration-200
                ${
                  active
                    ? "bg-blue-50 border-r-4 border-blue-600 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
            >
              <span className="material-symbols-outlined text-[22px]">
                {item.icon}
              </span>

              <span className="text-sm">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-5">
        <div className="rounded-xl bg-blue-50 p-4">
          <h3 className="text-sm font-semibold text-blue-700">
            FleetGuard v1.0
          </h3>

          <p className="text-xs text-blue-600 mt-1">
            Your system is up to date.
          </p>
        </div>
      </div>
    </div>
  );
}