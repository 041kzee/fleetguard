"use client";

import { Star, TrendingUp } from "lucide-react";

const drivers = [
  {
    id: 1,
    name: "Rahul Sharma",
    trips: 148,
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 2,
    name: "Anjali Rao",
    trips: 132,
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 3,
    name: "Vikram Patel",
    trips: 119,
    rating: 4.7,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 4,
    name: "Sneha Nair",
    trips: 108,
    rating: 4.6,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
];

export default function DriverPerformance() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Driver Performance
          </h2>
          <p className="text-sm text-slate-500">
            Highest performing drivers this month
          </p>
        </div>

        <TrendingUp className="text-green-500" size={20} />
      </div>

      <div className="space-y-5">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="flex items-center justify-between hover:bg-slate-50 rounded-xl p-2 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={driver.avatar}
                alt={driver.name}
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-slate-900">
                  {driver.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {driver.trips} Trips
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
              <Star
                size={14}
                className="text-yellow-500 fill-yellow-500"
              />

              <span className="font-bold text-sm">
                {driver.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}