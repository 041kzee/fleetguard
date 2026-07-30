export default function ComplianceHealth() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex justify-between">

        <h2 className="font-semibold">
          Compliance Health
        </h2>

        <span className="text-green-600 font-bold">
          94%
        </span>

      </div>

      <div className="mt-4 h-3 rounded-full bg-gray-200 overflow-hidden">

        <div className="h-full w-[94%] bg-green-500 rounded-full" />

      </div>

      <div className="mt-6 space-y-4 text-sm">

        <div className="flex justify-between">
          <span>Documents Valid</span>
          <span>12 / 13</span>
        </div>

        <div className="flex justify-between">
          <span>Tax Clearances</span>
          <span>✔</span>
        </div>

        <div className="flex justify-between">
          <span>Safety Rating</span>
          <span>★★★★★</span>
        </div>

      </div>

    </div>
  );
}