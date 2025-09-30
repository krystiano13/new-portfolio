// components
import { AboutMe } from "./components/about-me/AboutMe.tsx";
import { ExperienceSection } from "./components/experience-section/ExperienceSection.tsx";

// data
import { workSection } from "./components/experience-section/work-section.ts";
import { educationSection } from "./components/experience-section/education-section.ts";

function App() {
    return (
        <div className="wrapper">
            <h1 className="text-4xl font-bold mb-6">Hi ! I'm Krystian 🖐️️</h1>
            <h2 className="text-2xl font-semibold mb-6">A Software Engineer</h2>

            <AboutMe />

            {
                [workSection, educationSection].map(item => (
                    <ExperienceSection section={item} />
                ))
            }
        </div>
    )
}

export default App
