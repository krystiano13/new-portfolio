import logo from "../../assets/logo1.webp";
import oktalLogo from "../../assets/oktal_labs_logo.jpeg";
import innovationLogo from "../../assets/innovation.jpg";

import type { Section } from "./types/section.ts";

export const workSection: Section = {
  title: "WORK EXPERIENCE",
  elements: [
    {
      title: "Software Developer",
      subtitle: "Innovation Software",
      date: "Oct 2025 - Jan 2026",
      logoSrc: innovationLogo as string,
      logoAlt: "Innovation Software logo",
      description: "Worked on the development of an ERP system using Symfony and Vue.js. Responsible for designing and implementing core application modules, including authentication and authorization, user roles and permissions, task management, and notification systems.Collaborated closely with the team to ensure secure access control, scalable architecture, and a smooth user experience.",
    },
    {
      title: "Fullstack Developer",
      subtitle: "Oktal Labs",
      date: "Feb 2025 - Oct 2025",
      logoSrc: oktalLogo as string,
      logoAlt: "Oktal Labs logo",
      description:
        "I worked on a CRM system designed to automate the creation of VAT and excise tax refund" +
        " applications. I also contributed to the development of the portal znajdzkorty.pl and was" +
        " involved in modernizing the company profile website for Nova Instalacje. Additionally, I" +
        " worked on the backend of an order management system built with Symfony, as well as a" +
        " dedicated mobile application integrated with this system. I also participated in several" +
        " smaller external projects, including the development of custom modules and the" +
        " maintenance of existing web applications.",
    },
    {
      title: "Junior React Developer",
      subtitle: "Timenotes.io",
      date: "Aug 2024 - Oct 2024",
      logoSrc: logo as string,
      logoAlt: "Timenotes.io logo",
      description:
        "Worked on the development of a time tracking application and a new landing page for TimeNotes. Responsible for building and maintaining user interfaces using React, collaborating on application features related to time tracking, and ensuring a responsive and user-friendly experience across the product."
    },
  ],
};

