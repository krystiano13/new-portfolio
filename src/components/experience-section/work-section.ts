import logo from "../../assets/logo1.webp"
import oktalLogo from "../../assets/oktal_labs_logo.jpeg"

import type { Section } from "./types/section.ts";

export const workSection: Section = {
    title: "WORK EXPERIENCE",
    elements: [
        {
            title: "Fullstack Developer",
            subtitle: "Oktal Labs",
            date: "Feb 2025 - Now",
            logoSrc: oktalLogo as string,
            logoAlt: "Oktal Labs logo",
            description: "I worked on a CRM system designed to automate the creation of VAT and excise tax refund" +
                " applications. I also contributed to the development of the portal znajdzkorty.pl and was" +
                " involved in modernizing the company profile website for Nova Instalacje. Additionally, I" +
                " worked on the backend of an order management system built with Symfony, as well as a" +
                " dedicated mobile application integrated with this system. I also participated in several" +
                " smaller external projects, including the development of custom modules and the" +
                " maintenance of existing web applications."
        },
        {
            title: "Junior React Developer",
            subtitle: "Timenotes.io",
            date: "Aug 2024 - Oct 2024",
            logoSrc: logo as string,
            logoAlt: "Timenotes.io logo",
            description: "Creating new Timenotes' landing page with Next.js, TailwindCSS and Sanity.io " +
                "Working on Timenotes' React app - time tracking software for teams"
        },
    ]
};