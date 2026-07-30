export default function ServiceDetailsForm() {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-xl font-semibold mb-6">
        Service Details
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Type
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Oil Change</option>
            <option>Brake Service</option>
            <option>Engine Inspection</option>
            <option>Wheel Alignment</option>
            <option>Annual Service</option>
          </select>
        </div>

        {/* Service Date */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Service Center */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Center
          </label>

          <input
            type="text"
            placeholder="Toyota Authorized Service"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Mechanic */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Mechanic
          </label>

          <input
            type="text"
            placeholder="John Smith"
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Service Notes
        </label>

        <textarea
          rows={4}
          placeholder="Describe the maintenance performed..."
          className="w-full border rounded-lg p-3 resize-none"
        />
      </div>
    </div>
  );
}