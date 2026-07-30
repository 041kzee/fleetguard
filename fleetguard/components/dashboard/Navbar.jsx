"use client";

import {
  Search,
  Bell,
  CircleHelp,
  Plus,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search vehicles, drivers or reports..."
            className="w-[350px] pl-11 pr-4 h-11 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center">
          <CircleHelp size={20} />
        </button>

        <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center relative">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="h-10 w-px bg-gray-200"></div>

        <div className="text-right">

          <h3 className="font-semibold">
            Alex Rivera
          </h3>

          <p className="text-sm text-gray-500">
            Fleet Director
          </p>

        </div>

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="h-11 w-11 rounded-full"
        />

      </div>

    </header>
  );
}