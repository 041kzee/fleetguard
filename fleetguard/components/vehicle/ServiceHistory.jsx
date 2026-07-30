const history = [
  {
    date: "12 Jul 2026",
    service: "Oil Change",
    cost: "$120",
    mileage: "57,800 km",
  },
  {
    date: "08 Apr 2026",
    service: "Brake Inspection",
    cost: "$240",
    mileage: "52,200 km",
  },
  {
    date: "15 Jan 2026",
    service: "Engine Service",
    cost: "$680",
    mileage: "46,000 km",
  },
];

export default function ServiceHistory() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="font-semibold text-xl mb-5">
        Recent Service History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-3">Date</th>

            <th>Service</th>

            <th>Cost</th>

            <th>Mileage</th>

          </tr>

        </thead>

        <tbody>

          {history.map((item) => (

            <tr
              key={item.date}
              className="border-b"
            >

              <td className="py-4">
                {item.date}
              </td>

              <td>
                {item.service}
              </td>

              <td>
                {item.cost}
              </td>

              <td>
                {item.mileage}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}