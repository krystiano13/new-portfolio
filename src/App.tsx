import { useEffect, useState } from "react";

// components
import { AboutMe } from "./components/about-me/AboutMe.tsx";
import { ExperienceSection } from "./components/experience-section/ExperienceSection.tsx";
import { SkillsSection } from "./components/skills-section/SkillsSection.tsx";
import { ProjectsSection } from "./components/projects-section/ProjectsSection.tsx";
import { ContactSection } from "./components/contact-section/ContactSection.tsx";

// data
import { workSection } from "./components/experience-section/work-section.ts";
import { educationSection } from "./components/experience-section/education-section.ts";
import { projects } from "./components/projects-section/projects.ts";

// icons
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

function App() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 250)
    }, []);

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div id="base" className={`${ darkMode ? "dark" : "" } w-full h-full dark:bg-zinc-900`}>
            <div className="fixed w-full h-full flex items-end justify-center pointer-events-none">
                <div
                    className="bg-gradient-to-t entry-blur dark:from-zinc-900 from-white h-48 to-transparent w-full"
                ></div>
            </div>
            <div className="wrapper">
                <button
                    className="entry-1 w-12 h-12 mb-6 cursor-pointer dark:bg-gray-100 dark:text-black flex text-xl justify-center items-center rounded-full bg-black text-white"
                    onClick={() => setDarkMode(prev => !prev)}
                >
                    {
                        !darkMode ? <LuSun /> : <LuMoon />
                    }
                </button>
                <h1 className="text-4xl dark:text-white font-bold mb-6 entry-0">Hi ! I'm Krystian 🖐️️</h1>
                <h2 className="text-2xl dark:text-white font-semibold mb-6 entry-0">A Software Engineer</h2>

                <AboutMe />

                <section className="entry-2">
                    {
                        [workSection, educationSection].map((item, index) => (
                            <ExperienceSection entryKey={index + 2} section={item} />
                        ))
                    }
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
    )
}

export default App
