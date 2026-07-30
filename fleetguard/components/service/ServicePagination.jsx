export default function ServicePagination() {
  return (
    <div className="flex justify-between items-center mt-6">

      <p className="text-gray-500">
        Showing 1–4 of 1284 records
      </p>

      <div className="flex gap-2">

        <button className="px-4 py-2 border rounded-lg">
          Previous
        </button>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          1
        </button>

        <button className="px-4 py-2 border rounded-lg">
          2
        </button>

        <button className="px-4 py-2 border rounded-lg">
          3
        </button>

        <button className="px-4 py-2 border rounded-lg">
          Next
        </button>

      </div>

    </div>
  );
}