export default function VehicleHero() {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
          alt="Toyota Innova"
          className="w-full h-[360px] object-cover"
        />

        <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-sm text-white px-5 py-3 rounded-xl">

          <p className="text-xs uppercase text-gray-300">
            Make & Model
          </p>

          <h3 className="font-semibold text-lg">
            Toyota Innova Crysta (2022)
          </h3>

        </div>

      </div>

    </div>
  );
}