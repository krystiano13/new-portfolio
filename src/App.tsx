import {lazy, useEffect, useState} from "react";

// components
import { HeaderSection } from "./components/header-section/HeaderSection.tsx";
import { AboutMe } from "./components/about-me/AboutMe.tsx";
import { ExperienceSection } from "./components/experience-section/ExperienceSection.tsx";

// data
import { workSection } from "./components/experience-section/work-section.ts";
import { educationSection } from "./components/experience-section/education-section.ts";
import { projects } from "./components/projects-section/projects.ts";

// lazy components
const SkillsSection = lazy(() => {
  return import("./components/skills-section/SkillsSection.tsx");
})

const ProjectsSection = lazy(() => {
  return import("./components/projects-section/ProjectsSection.tsx");
})

const ContactSection = lazy(() => {
  return import("./components/contact-section/ContactSection.tsx");
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 250);

    const darkModeStorage = localStorage.getItem("darkMode");

    if (darkModeStorage === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("darkMode", darkMode.toString());
    } else {
      setFirstRender(false);
    }
  }, [darkMode, firstRender]);

  return (
    <div
      id="base"
      className={`${darkMode ? "dark" : ""} w-full h-full dark:bg-zinc-900`}
    >
      <div className="fixed entry-blur w-full h-full flex items-end justify-center pointer-events-none">
        <div className="bg-linear-to-t dark:from-zinc-900 from-white h-48 to-transparent w-full"></div>
      </div>
      <div className="wrapper">
        <HeaderSection
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((prev) => !prev)}
        />

        <AboutMe />

        <section className="entry-2">
          {[workSection, educationSection].map((item, index) => (
            <ExperienceSection entryKey={index + 2} section={item} />
          ))}
        </section>

        <section className="entry-skills-section mb-6">
          <SkillsSection />
        </section>

        <section className="entry-6 mb-6">
          <ProjectsSection projects={projects} />
        </section>

        <section className="entry-7">
          <ContactSection />
        </section>

        <section className="h-48" id="empty"></section>
      </div>
    </div>
  );
}

export default App;
