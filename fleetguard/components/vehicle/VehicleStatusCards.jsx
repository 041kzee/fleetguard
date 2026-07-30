import {
    ShieldCheck,
    Shield,
    Gauge,
    TriangleAlert,
} from "lucide-react";

const cards = [
    {
        title: "Current Status",
        value: "Active",
        icon: ShieldCheck,
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        title: "Compliance",
        value: "Compliant",
        icon: Shield,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        title: "Mileage",
        value: "58,240 KM",
        icon: Gauge,
        color: "text-gray-600",
        bg: "bg-gray-100",
    },
    {
        title: "Maintenance Risk",
        value: "Medium",
        icon: TriangleAlert,
        color: "text-yellow-500",
        bg: "bg-yellow-100",
    },
];

export default function VehicleStatusCards() {
    return (
        <div className="grid grid-cols-4 gap-5 mt-6">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className="border rounded-2xl p-5 bg-white"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-sm text-gray-500">
                                    {card.title}
                                </p>

                                <h3 className="text-xl font-semibold mt-2">
                                    {card.value}
                                </h3>

                            </div>

                            <div
                                className={`${card.bg} p-3 rounded-xl`}
                            >

                                <Icon
                                    className={`${card.color}`}
                                    size={22}
                                />

                            </div>

                        </div>

                    </div>

                );
            })}

        </div>
    );
}