import { Plan } from "@/lib/@types/types";

export const listPlans: Plan[] = [
    {
        id: "1",
        title: "Arcade",
        price: {
            monthly: 9,
            yearly: 90
        },
        image: "/icon-arcade.svg"
    },
    {
        id: "2",
        title: "Advanced",
        price: {
            monthly: 12,
            yearly: 120
        },
        image: "/icon-advanced.svg"
    },
    {   
        id: "3",
        title: "Arcade",
        price: {
            monthly: 15,
            yearly: 150
        },
        image: "/icon-pro.svg"
    }
]