"use client";

import { useState, useMemo } from "react";
import UserManagementLayout from "@/components/user-management/UserManagementLayout";
import Header from "@/components/user-management/Header";
import Stats from "@/components/user-management/Stats";
import Filters from "@/components/user-management/Filters";
import Table from "@/components/user-management/Table";
import RoleDistribution from "@/components/user-management/RoleDistribution";
import EngagementChart from "@/components/user-management/EngagementChart";

// High-fidelity static data matching and expanding on the screenshot
const INITIAL_USERS = [
  {
    id: 1,
    name: "Marcus Thompson",
    email: "marcus.t@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-09412",
    role: "Driver",
    status: "Active",
    lastLogin: "2 hours ago",
    joinedDate: "2025-01-10",
  },
  {
    id: 2,
    name: "Eleanor Vance",
    email: "e.vance@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-11005",
    role: "Fleet Manager",
    status: "Active",
    lastLogin: "Yesterday, 14:30",
    joinedDate: "2024-11-15",
  },
  {
    id: 3,
    name: "Julian Drake",
    email: "j.drake@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-08221",
    role: "Administrator",
    status: "Suspended",
    lastLogin: "3 days ago",
    joinedDate: "2024-05-20",
  },
  {
    id: 4,
    name: "Leo Martinez",
    email: "l.martinez@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-15590",
    role: "Driver",
    status: "Inactive",
    lastLogin: "1 week ago",
    joinedDate: "2025-03-01",
  },
  {
    id: 5,
    name: "Sophia Carter",
    email: "s.carter@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-14022",
    role: "Driver",
    status: "Active",
    lastLogin: "4 hours ago",
    joinedDate: "2025-02-18",
  },
  {
    id: 6,
    name: "Daniel Kim",
    email: "d.kim@fleetguard.com",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120",
    employeeId: "EMP-12001",
    role: "Fleet Manager",
    status: "Active",
    lastLogin: "12 hours ago",
    joinedDate: "2024-12-05",
  },
];

export default function UserManagementPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Handler to clear all filters
  const handleClearFilters = () => {
    setSearch("");
    setRole("all");
    setStatus("all");
    setSortBy("recent");
  };

  // Filter & Sort Logic
  const filteredUsers = useMemo(() => {
    let result = [...INITIAL_USERS];

    // Search filter
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.employeeId.toLowerCase().includes(q)
      );
    }

    // Role filter
    if (role !== "all") {
      result = result.filter((u) => u.role === role);
    }

    // Status filter
    if (status !== "all") {
      result = result.filter((u) => u.status === status);
    }

    // Sort sorting logic
    if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "emp-id") {
      result.sort((a, b) => a.employeeId.localeCompare(b.employeeId));
    } else {
      // "recent" sorting: keeping default mock indices or order
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [search, role, status, sortBy]);

  return (
    <UserManagementLayout>
      {/* 1. Page Header */}
      <Header />

      {/* 2. Top Stats Overview */}
      <Stats />

      {/* 3. Filter Controls */}
      <Filters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearAll={handleClearFilters}
      />

      {/* 4. Table view with row entries */}
      <Table users={filteredUsers} />

      {/* 5. Bottom breakdown widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-4 h-full">
          <RoleDistribution />
        </div>
        <div className="lg:col-span-8 h-full">
          <EngagementChart />
        </div>
      </div>
    </UserManagementLayout>
  );
}
