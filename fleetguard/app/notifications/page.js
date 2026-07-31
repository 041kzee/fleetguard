"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Navbar";
import NotificationSummaryCards from "@/components/notifications/NotificationSummaryCards";
import NotificationFilters from "@/components/notifications/NotificationFilters";
import NotificationItem from "@/components/notifications/NotificationItem";
import NotificationAlertsPanel from "@/components/notifications/NotificationAlertsPanel";
import NotificationProgressPanel from "@/components/notifications/NotificationProgressPanel";
import NotificationActionsPanel from "@/components/notifications/NotificationActionsPanel";
import FleetActivityPanel from "@/components/notifications/FleetActivityPanel";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: "1", title: "PUC Expiry Alert", desc: "Mahindra Bolero (DL 04 C 9876) PUC expires in 8 days.", type: "WARNING", date: "10 mins ago", read: false },
    { id: "2", title: "Service Completed", desc: "Toyota Innova (KA 01 EQ 4589) synthetic oil change logged successfully.", type: "SUCCESS", date: "1 hour ago", read: false },
    { id: "3", title: "Document Expired Alert", desc: "Force Traveler (KA 02 J 1122) National Route Permit has expired.", type: "ERROR", date: "3 hours ago", read: true },
    { id: "4", title: "New Driver Registration", desc: "Rajesh Kumar driver profile approved & assigned to Innova.", type: "INFO", date: "1 day ago", read: true },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };
  const stats = [
  {
    title: "Unread Notifications",
    value: 12,
    icon: "notifications",
    badge: "Active",
    color: "blue",
  },
  {
    title: "Compliance Alerts",
    value: 4,
    icon: "shield",
    badge: "Critical",
    color: "red",
  },
  {
    title: "Maintenance Alerts",
    value: 8,
    icon: "build",
    badge: "Pending",
    color: "orange",
  },
  {
    title: "Assignment Alerts",
    value: 3,
    icon: "group",
    badge: "Normal",
    color: "green",
  },
];

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Notifications & Fleet Alerts"
          subtitle="Real-time alerts for document renewals, maintenance, and driver updates"
        />

      <main className="p-8 bg-[#f8f9ff] flex-1 space-y-8">

  <NotificationSummaryCards />

  <div className="grid grid-cols-12 gap-6">

    <div className="col-span-8 space-y-6">

      <NotificationFilters />

      <div className="space-y-4">

        {notifications.map((notification) => (

          <NotificationItem
            key={notification.id}
            notification={notification}
          />

        ))}

      </div>

    </div>

    <div className="col-span-4 space-y-6">

      <NotificationAlertsPanel />

      <NotificationProgressPanel />

      <NotificationActionsPanel />

    </div>

  </div>

  <FleetActivityPanel />

</main>
      </div>
    </div>
  );
}