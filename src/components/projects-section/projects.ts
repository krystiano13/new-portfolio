import waterTrackerImage from "../../assets/water-tracker.png";
import polyblastImage from "../../assets/polyblast.png";

import type { Projects } from "./types/project.ts";

export const projects: Projects = [
    {
        imageSrc: waterTrackerImage,
        imageAlt: "Water Tracker Image",
        title: "WATER TRACKER APP",
        description: "Water tracker is a simple mobile app that tracks the amount of water consumed by the user." +
            " It helps its users to stay hydrated and maintain a healthy lifestyle, by calculating their" +
            " water intake and notifying them to remember of drinking. It provides a lot of statistics and" +
            " streak system to motivate users to drink more water. Still in production",
        tags: ['React', 'Capacitor.js', 'Prime React', 'SASS']
    },
    {
        imageSrc: polyblastImage,
        imageAlt: "Rouge Lite Game Image",
        title: "POLYBLAST",
        description: "Polyblast is a 2D rougelite shooter made with Javascript game engine called - Gdevelop. Game is hugely inspired by other games such as Vampire Suvivors, 20 minutes till dawn and Brotato. Still in production",
        tags: ["Gdevelop", "Javascript", "Inkscape"]
    }
];