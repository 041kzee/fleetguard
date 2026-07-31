"use client";

import AdminDashboardLayout from "@/components/admin-dashboard/AdminDashboardLayout";
import Header from "@/components/admin-dashboard/Header";
import StatsCards from "@/components/admin-dashboard/StatsCards";
import FleetActivity from "@/components/admin-dashboard/FleetActivity";
import FleetStatus from "@/components/admin-dashboard/FleetStatus";

import RecentFleetActivity from "@/components/admin-dashboard/RecentFleetActivity";
import FleetHealth from "@/components/admin-dashboard/FleetHealth";
import UpcomingTasks from "@/components/admin-dashboard/UpcomingTasks";
import DriverPerformance from "@/components/admin-dashboard/DriverPerformance";
import ServiceCostTrend from "@/components/admin-dashboard/ServiceCostTrend";
import RecentNotifications from "@/components/admin-dashboard/RecentNotifications";

export default function AdminDashboardPage() {
  return (
  <AdminDashboardLayout>
    <Header />

    <StatsCards />

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
            <FleetActivity />
        </div>

        <FleetStatus />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
            <RecentFleetActivity />
        </div>

        <div className="xl:col-span-2">
            <FleetHealth />
        </div>

        <div className="xl:col-span-3">
            <UpcomingTasks />
        </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DriverPerformance />
        <ServiceCostTrend />
        <RecentNotifications />
    </div>
</AdminDashboardLayout>
  );
}