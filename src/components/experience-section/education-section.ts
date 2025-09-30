import uniLogo from "../../assets/pw.jpeg";
import schoolLogo from "../../assets/mechaniak.jpeg";

import type { Section } from "./types/section.ts";

export const educationSection: Section = {
  title: "EDUCATION",
  elements: [
      {
          title: "Warsaw University of Technology",
          subtitle: "Automation, Robotics and Industrial Computer Science",
          date: "Oct 2023 - Now",
          logoSrc: uniLogo as string,
          logoAlt: "Warsaw University of Technology logo",
          description: undefined
      },
      {
          title: "ZSMIO nr.5 w Łomży",
          subtitle: "IT technician",
          date: "Sep 2019 - Apr 2023",
          logoSrc: schoolLogo as string,
          logoAlt: "ZSMIO nr.5 w Łomży logo",
          description: undefined
      },
  ]
};