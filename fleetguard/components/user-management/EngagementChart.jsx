"use client";

export default function EngagementChart() {
  // Mock data representing the 8 bars in the screenshot
  const data = [
    { active: 82, inactive: 18 },
    { active: 70, inactive: 30 },
    { active: 88, inactive: 12 },
    { active: 92, inactive: 8 },
    { active: 80, inactive: 20 },
    { active: 75, inactive: 25 },
    { active: 68, inactive: 32 },
    { active: 90, inactive: 10 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between h-full min-h-[340px]">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#f1f5f9] pb-4 mb-4">
        <div>
          <h3 className="font-bold text-[#0b1c30] text-lg">Active Engagement</h3>
          <p className="text-xs text-[#64748b] font-medium mt-0.5">
            Active vs Inactive users over past 30 days
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            <span className="text-[#475569]">Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]"></span>
            <span className="text-[#475569]">Inactive</span>
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart Area */}
      <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 h-[180px] pt-6 pb-2">
        {data.map((bar, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end"
          >
            {/* The Stacked Bar container */}
            <div className="w-full max-w-[48px] h-full flex flex-col justify-end rounded-lg overflow-hidden bg-[#e2e8f0] relative">
              {/* Inactive Part (Top portion) */}
              <div
                className="w-full bg-[#e2e8f0] group-hover:brightness-95 transition-all duration-300"
                style={{ height: `${bar.inactive}%` }}
              ></div>
              
              {/* Active Part (Bottom portion - green) */}
              <div
                className="w-full bg-[#10b981] group-hover:bg-[#059669] transition-all duration-300 rounded-t-sm"
                style={{ height: `${bar.active}%` }}
              ></div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap font-bold">
                Active: {bar.active}% | Inactive: {bar.inactive}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
