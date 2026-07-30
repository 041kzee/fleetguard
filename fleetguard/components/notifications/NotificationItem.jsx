"use client";

export default function NotificationItem({ notification }) {
  const colors = {
    WARNING: {
      bg: "bg-yellow-50",
      icon: "bg-yellow-100 text-yellow-600",
      symbol: "warning",
    },

    SUCCESS: {
      bg: "bg-green-50",
      icon: "bg-green-100 text-green-600",
      symbol: "check_circle",
    },

    ERROR: {
      bg: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      symbol: "error",
    },

    INFO: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      symbol: "notifications",
    },
  };

  const style = colors[notification.type];

  return (
    <div
      className={`rounded-2xl border border-gray-200 p-5 flex gap-4 items-start transition hover:shadow-md ${
        notification.read ? "bg-white" : style.bg
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.icon}`}
      >
        <span className="material-symbols-outlined">
          {style.symbol}
        </span>
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-bold text-[#0b1c30]">
            {notification.title}
          </h3>

          <span className="text-xs text-gray-500">
            {notification.date}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          {notification.desc}
        </p>
      </div>
    </div>
  );
}