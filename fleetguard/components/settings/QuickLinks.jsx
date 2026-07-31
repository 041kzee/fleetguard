"use client";

const links = [
  {
    icon: "description",
    title: "Documentation",
  },
  {
    icon: "menu_book",
    title: "User Guide",
  },
  {
    icon: "bug_report",
    title: "Report Issue",
  },
  {
    icon: "update",
    title: "Check Updates",
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-5">
        Quick Links
      </h2>

      <div className="space-y-3">
        {links.map((item) => (
          <button
            key={item.title}
            className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <span className="material-symbols-outlined text-blue-600">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}