import { useEffect } from "react";

// components
import { AboutMe } from "./components/about-me/AboutMe.tsx";
import { ExperienceSection } from "./components/experience-section/ExperienceSection.tsx";

// data
import { workSection } from "./components/experience-section/work-section.ts";
import { educationSection } from "./components/experience-section/education-section.ts";
import {SkillsSection} from "./components/skills-section/SkillsSection.tsx";

function App() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 250)
    }, []);
    return (
        <>
            <div className="fixed w-full h-full flex items-end justify-center">
                <div
                    className="bg-gradient-to-t entry-blur from-white h-48 to-transparent w-full"
                ></div>
            </div>
            <div className="wrapper">
                <h1 className="text-4xl font-bold mb-6 entry-0">Hi ! I'm Krystian 🖐️️</h1>
                <h2 className="text-2xl font-semibold mb-6 entry-0">A Software Engineer</h2>

                <AboutMe />

                <section className="entry-2">
                    {
                        [workSection, educationSection].map((item, index) => (
                            <ExperienceSection entryKey={index + 2} section={item} />
                        ))
                    }
                </section>

                <section className="entry-skills-section">
                    <SkillsSection />
                </section>

                <section className="h-48" id="empty"></section>
            </div>
        </>
    )
}

export default App
