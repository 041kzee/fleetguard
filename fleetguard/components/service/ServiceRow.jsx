export default function ServiceRow({ record }) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-6 py-5">
        <div>
          <p className="font-semibold">{record.vehicle}</p>
          <p className="text-sm text-gray-500">{record.regNo}</p>
        </div>
      </td>

      <td className="px-6 py-5">{record.service}</td>

      <td className="px-6 py-5">{record.date}</td>

      <td className="px-6 py-5">{record.mileage}</td>

      <td className="px-6 py-5">${record.cost}</td>

      <td className="px-6 py-5">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            record.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {record.status}
        </span>
      </td>

      <td className="px-6 py-5 text-blue-600 font-medium cursor-pointer hover:underline">
        View
      </td>

    </tr>
  );
}