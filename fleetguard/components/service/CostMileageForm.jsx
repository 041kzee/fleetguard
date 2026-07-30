export default function CostMileageForm() {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-xl font-semibold mb-6">
        Cost & Mileage
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Current Mileage
          </label>

          <input
            type="number"
            placeholder="58240"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Service Cost
          </label>

          <input
            type="number"
            placeholder="250"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Next Service Mileage
          </label>

          <input
            type="number"
            placeholder="65000"
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>
    </div>
  );
}