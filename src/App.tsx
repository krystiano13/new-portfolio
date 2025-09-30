import { ExperienceSection } from "./components/experience-section/ExperienceSection.tsx";
import { workSection } from "./components/experience-section/work-section.ts";
import { educationSection } from "./components/experience-section/education-section.ts";

function App() {
    return (
        <div className="wrapper">
            <h1 className="text-4xl font-bold mb-6">Hi ! I'm Krystian 🖐️️</h1>
            <h2 className="text-2xl font-semibold mb-6">A Software Engineer</h2>

            <h3 className="text-xl font-medium mb-3">
                ABOUT ME
            </h3>
            <p className="text-justify text-gray-800 mb-6">
                I am a software engineer that specializes in building web applications
                with usage of technologies such as React, PHP and Vue. I am also an active
                student in Warsaw University of Technology, where I am pursuing a bachelor's
                degree in Automation, Robotics and Industrial Computer Science. Outside of the job
                and college, I am a hobbist indie game developer.
                I also enjoy variety of physical activities such as running, weightlifting
            </p>

            {
                [workSection, educationSection].map(item => (
                    <ExperienceSection section={item} />
                ))
            }
        </div>
    )
}

export default App
