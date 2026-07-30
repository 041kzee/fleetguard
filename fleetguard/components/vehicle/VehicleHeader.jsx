export default function VehicleHeader() {
  return (
    <div className="flex items-start justify-between mt-5">

      <div>

        <h1 className="text-3xl font-bold text-gray-900">
          Toyota Innova
        </h1>

        <p className="text-gray-500 mt-1">
          Registration Number: KA19AB1234
        </p>

      </div>

      <div className="flex gap-3">

        <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">
          Edit Vehicle
        </button>

        <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">
          Assign Driver
        </button>

        <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">
          Log Service
        </button>

        <button className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
          Upload Document
        </button>

      </div>

    </div>
  );
}