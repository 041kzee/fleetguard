"use client";

import { useState } from "react";

export default function NotificationFilters() {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Compliance",
    "Maintenance",
    "Assignments",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">

      <div className="flex flex-wrap justify-between items-center gap-4">

        <div className="flex flex-wrap gap-3">

          {filters.map((item)=>(
            <button
              key={item}
              onClick={()=>setActive(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                active===item
                ? "bg-[#004ac6] text-white"
                : "bg-[#f5f7fb] text-[#565e74] hover:bg-[#e9eefc]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        <select className="border rounded-xl px-4 py-2 text-sm outline-none bg-white">
          <option>All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>

    </div>
  );
}