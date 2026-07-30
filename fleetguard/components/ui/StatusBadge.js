export default function StatusBadge({ status }) {
  const statusMap = {
    // Vehicle & Driver Statuses
    ACTIVE: { label: "Active", bg: "bg-[#10b981]/10", text: "text-[#006d35]", dot: "bg-[#10b981]" },
    IN_SERVICE: { label: "In Service", bg: "bg-[#2563eb]/10", text: "text-[#004ac6]", dot: "bg-[#2563eb]" },
    MAINTENANCE: { label: "In Maintenance", bg: "bg-[#f59e0b]/10", text: "text-[#b45309]", dot: "bg-[#f59e0b]" },
    INACTIVE: { label: "Inactive", bg: "bg-[#565e74]/10", text: "text-[#565e74]", dot: "bg-[#565e74]" },

    // Compliance Statuses
    VALID: { label: "Valid", bg: "bg-[#10b981]/10", text: "text-[#006d35]", dot: "bg-[#10b981]" },
    EXPIRING_SOON: { label: "Expiring Soon", bg: "bg-[#f59e0b]/10", text: "text-[#b45309]", dot: "bg-[#f59e0b]" },
    EXPIRED: { label: "Expired", bg: "bg-[#ef4444]/10", text: "text-[#ba1a1a]", dot: "bg-[#ef4444]" },

    // User Approval Statuses
    APPROVED: { label: "Approved", bg: "bg-[#10b981]/10", text: "text-[#006d35]", dot: "bg-[#10b981]" },
    PENDING: { label: "Pending Approval", bg: "bg-[#f59e0b]/10", text: "text-[#b45309]", dot: "bg-[#f59e0b]" },
    REJECTED: { label: "Rejected", bg: "bg-[#ef4444]/10", text: "text-[#ba1a1a]", dot: "bg-[#ef4444]" },
  };

  const key = String(status || "ACTIVE").toUpperCase().replace(/\s+/g, "_");
  const config = statusMap[key] || {
    label: status || "Unknown",
    bg: "bg-[#565e74]/10",
    text: "text-[#565e74]",
    dot: "bg-[#565e74]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      {config.label}
    </span>
  );
}
