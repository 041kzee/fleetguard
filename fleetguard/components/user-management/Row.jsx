"use client";

import { MoreVertical } from "lucide-react";

export default function Row({ user }) {
  // Styles for different roles
  const roleStyles = {
    Driver: "bg-[#fef3c7] text-[#b45309] border border-[#fde68a]",
    "Fleet Manager": "bg-[#ffedd5] text-[#c2410c] border border-[#fed7aa]",
    Administrator: "bg-[#dbeafe] text-[#1d4ed8] border border-[#bfdbfe]",
  };

  // Styles for statuses
  const statusStyles = {
    Active: {
      text: "text-[#059669]",
      dot: "bg-[#10b981] shadow-xs shadow-[#10b981]/50",
    },
    Suspended: {
      text: "text-[#dc2626]",
      dot: "bg-[#ef4444] shadow-xs shadow-[#ef4444]/50",
    },
    Inactive: {
      text: "text-[#64748b]",
      dot: "bg-[#94a3b8]",
    },
  };

  const statusStyle = statusStyles[user.status] || statusStyles.Inactive;

  return (
    <tr className="hover:bg-[#f8fafc] transition-colors border-b border-[#f1f5f9] last:border-b-0 text-sm group">
      {/* Profile Column */}
      <td className="px-6 py-4.5 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar || `https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover border border-[#e2e8f0]"
          />
          <div>
            <h4 className="font-bold text-[#0f172a] group-hover:text-[#004ac6] transition-colors">
              {user.name}
            </h4>
            <p className="text-xs text-[#64748b] font-medium">{user.email}</p>
          </div>
        </div>
      </td>

      {/* Employee ID Column */}
      <td className="px-6 py-4.5 whitespace-nowrap text-[#475569] font-semibold font-mono text-xs">
        {user.employeeId}
      </td>

      {/* Role Badge Column */}
      <td className="px-6 py-4.5 whitespace-nowrap">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleStyles[user.role] || "bg-slate-100 text-slate-800"}`}>
          {user.role}
        </span>
      </td>

      {/* Status Column */}
      <td className="px-6 py-4.5 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
          <span className={`text-xs font-bold ${statusStyle.text}`}>{user.status}</span>
        </div>
      </td>

      {/* Last Login Column */}
      <td className="px-6 py-4.5 whitespace-nowrap text-xs text-[#64748b] font-semibold">
        {user.lastLogin}
      </td>

      {/* Options Column */}
      <td className="px-6 py-4.5 whitespace-nowrap text-right">
        <button className="p-1.5 rounded-lg text-[#94a3b8] hover:text-[#475569] hover:bg-[#f1f5f9] transition-all">
          <MoreVertical className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
