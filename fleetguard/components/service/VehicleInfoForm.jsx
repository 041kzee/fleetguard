export default function VehicleInfoForm() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">
        Vehicle Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle
          </label>

          <select className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Toyota Innova (KA19AB1234)</option>
            <option>Mahindra Bolero (KA05CD9876)</option>
            <option>Tata Ace (KA21EF5555)</option>
            <option>Hyundai Creta (KA11GH2222)</option>
          </select>
        </div>

        {/* Registration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration Number
          </label>

          <input
            type="text"
            value="KA19AB1234"
            readOnly
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-600"
          />
        </div>

        {/* Driver */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assigned Driver
          </label>

          <input
            type="text"
            placeholder="Rahul Sharma"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Current Mileage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Mileage
          </label>

          <input
            type="number"
            placeholder="58240"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type
          </label>

          <input
            type="text"
            value="Diesel"
            readOnly
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-600"
          />
        </div>

        {/* Vehicle Model */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Model
          </label>

          <input
            type="text"
            value="Toyota Innova Crysta 2022"
            readOnly
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}