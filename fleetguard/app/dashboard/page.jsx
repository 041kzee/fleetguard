import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import ExpiryTable from "@/components/dashboard/ExpiryTable";
import ComplianceHealth from "@/components/dashboard/ComplianceHealth";
import MaintenanceRisk from "@/components/dashboard/MaintenanceRisk";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import CriticalAlerts from "@/components/dashboard/CriticalAlerts";
import FleetInsights from "@/components/dashboard/FleetInsights";
import Footer from "@/components/dashboard/Footer";
export default function DashboardPage() {
  return (
    <DashboardLayout>

      {/* Welcome */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Welcome back, Fleet Manager 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor fleet compliance, assignments and maintenance from one place.
          </p>

        </div>

        <div className="flex gap-4">

          <button className="border rounded-xl px-6 py-3 font-medium hover:bg-gray-50">
            Assign Vehicle
          </button>

          <button className="bg-blue-600 text-white rounded-xl px-6 py-3 hover:bg-blue-700">
            Register Vehicle
          </button>

        </div>

      </div>
   <StatsCards />

<div className="grid grid-cols-12 gap-6 mt-8">

  {/* LEFT */}

  <div className="col-span-8">

    <ExpiryTable />

    <MaintenanceRisk />
    <QuickActions/>

  </div>

  {/* RIGHT */}

  <div className="col-span-4">

    <ComplianceHealth />

    <RecentActivity />
    <CriticalAlerts/>
<FleetInsights />

  </div>

</div>
<Footer />
    </DashboardLayout>
  );
}