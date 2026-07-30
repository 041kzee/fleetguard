export default function MetricBlock({ title, value, change, isPositive = true, icon, iconBg = "bg-[#e5eeff]", iconColor = "text-[#004ac6]" }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-[#565e74] uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold text-[#0b1c30] mt-1 tracking-tight">{value}</h3>
        </div>
        <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-[22px]">{icon}</span>
        </div>
      </div>

      {change && (
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium">
          <span
            className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full ${
              isPositive
                ? "bg-[#10b981]/10 text-[#10b981]"
                : "bg-[#ef4444]/10 text-[#ef4444]"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">
              {isPositive ? "trending_up" : "trending_down"}
            </span>
            {change}
          </span>
          <span className="text-[#565e74]">vs last month</span>
        </div>
      )}
    </div>
  );
}
