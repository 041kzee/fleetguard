const details = [
  ["VIN / CHASSIS NUMBER", "1YV1HP87B9W500123"],
  ["FUEL TYPE", "Diesel (BS-VI)"],
  ["YEAR OF MANUFACTURE", "2022"],
  ["ENGINE NUMBER", "2GD-FTV89123"],
  ["COLOR", "Pearl White"],
  ["OWNERSHIP", "Company Owned"],
];

export default function VehicleOverview() {
  return (
    <div className="bg-white border rounded-b-2xl p-8">

      <div className="grid grid-cols-3 gap-8">

        {details.map(([title, value]) => (

          <div key={title}>

            <p className="text-xs uppercase text-gray-500">
              {title}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}