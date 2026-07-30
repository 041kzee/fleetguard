const tabs = [
  "Overview",
  "Compliance",
  "Service History",
  "Assignment History",
  "Documents",
];

export default function VehicleTabs() {
  return (
    <div className="bg-white border rounded-2xl mt-6">

      <div className="flex">

        {tabs.map((tab, index) => (

          <button
            key={tab}
            className={`px-8 py-5 text-sm font-medium border-b-2 transition
              ${
                index === 0
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {tab}
          </button>

        ))}

      </div>

    </div>
  );
}