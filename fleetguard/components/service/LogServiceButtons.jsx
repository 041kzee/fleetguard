export default function LogServiceButtons() {
  return (
    <div className="flex justify-end gap-4">
      <button className="border rounded-lg px-6 py-3">
        Cancel
      </button>

      <button className="bg-blue-600 text-white rounded-lg px-6 py-3">
        Save Service
      </button>
    </div>
  );
}