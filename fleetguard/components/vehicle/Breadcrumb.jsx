import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">

      <span>Dashboard</span>

      <ChevronRight size={16} />

      <span>Vehicles</span>

      <ChevronRight size={16} />

      <span className="font-semibold text-gray-800">
        Register Vehicle
      </span>

    </div>
  );
}