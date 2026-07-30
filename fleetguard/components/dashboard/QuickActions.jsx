"use client";

import {
  PlusSquare,
  Upload,
  UserPlus,
  Wrench,
} from "lucide-react";

const actions = [
  {
    title: "Register Vehicle",
    description: "Add new units to your digital garage.",
    icon: PlusSquare,
  },
  {
    title: "Upload Compliance",
    description: "Scan and store insurance/emissions docs.",
    icon: Upload,
  },
  {
    title: "Assign Driver",
    description: "Match drivers with available vehicles.",
    icon: UserPlus,
  },
  {
    title: "Log Service",
    description: "Record maintenance and repair history.",
    icon: Wrench,
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">

      {actions.map((action, index) => {

        const Icon = action.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
          >

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

              <Icon
                className="text-blue-600"
                size={22}
              />

            </div>

            <h3 className="font-semibold text-lg">
              {action.title}
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              {action.description}
            </p>

          </div>

        );

      })}

    </div>
  );
}