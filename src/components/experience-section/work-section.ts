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
            description: ""
        },
        {
            title: "Junior React Developer",
            subtitle: "Timenotes.io",
            date: "Aug 2024 - Oct 2024",
            logoSrc: logo as string,
            logoAlt: "Timenotes.io logo",
            description: ""
        },
    ]
};