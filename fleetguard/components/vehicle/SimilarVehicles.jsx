const vehicles = [
  {
    name: "Toyota Innova",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mahindra XUV700",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Hyundai Creta",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function SimilarVehicles() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="font-semibold text-xl mb-5">
        Similar Fleet Vehicles
      </h2>

      <div className="grid grid-cols-3 gap-5">

        {vehicles.map((vehicle) => (

          <div
            key={vehicle.name}
            className="rounded-xl overflow-hidden border"
          >

            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {vehicle.name}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}