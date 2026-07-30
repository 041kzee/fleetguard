import DashboardLayout from "@/components/dashboard/DashboardLayout";

import ServiceHeader from "./ServiceHeader";
import ServiceStats from "./ServiceStats";
import ServiceFilters from "./ServiceFilters";
import ServiceTable from "./ServiceTable";
import ServicePagination from "./ServicePagination";

export default function ServiceLayout() {
  return (
    <DashboardLayout>
      <ServiceHeader />
      <ServiceStats />
      <ServiceFilters />
      <ServiceTable />
      <ServicePagination />
    </DashboardLayout>
  );
}