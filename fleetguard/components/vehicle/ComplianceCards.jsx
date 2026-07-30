const cards = [
  {
    title: "Insurance",
    status: "Valid",
    expiry: "12 Dec 2026",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Pollution Certificate",
    status: "Expires Soon",
    expiry: "28 Jul 2026",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Fitness Certificate",
    status: "Valid",
    expiry: "20 Jan 2027",
    color: "bg-green-100 text-green-700",
  },
];

export default function ComplianceCards() {
  return (
    <div className="grid grid-cols-3 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white border rounded-2xl p-6"
        >

          <h3 className="font-semibold">
            {card.title}
          </h3>

          <span
            className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${card.color}`}
          >
            {card.status}
          </span>

          <p className="text-gray-500 text-sm mt-5">
            Expiry Date
          </p>

          <p className="font-semibold">
            {card.expiry}
          </p>

        </div>

      ))}

    </div>
  );
}