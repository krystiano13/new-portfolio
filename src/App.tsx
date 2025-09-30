import logo from "./assets/logo1.webp"
import oktalLogo from "./assets/oktal_labs_logo.jpeg"
import uniLogo from "./assets/pw.jpeg"
import schoolLogo from "./assets/mechaniak.jpeg"

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

            <h3 className="text-xl font-medium mb-3">
                WORK EXPERIENCE
            </h3>
            <section className="mb-6">
                <div className="border-1 border-gray-200 p-4 rounded-lg mb-3">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img
                                className="rounded-full border-1 border-gray-200 w-16 h-16"
                                src={oktalLogo as string}
                                alt="Oktal Labs logo"
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-lg">Fullstack Developer</h4>
                                <h5>Oktal Labs</h5>
                            </div>
                        </div>
                        <div className="text-gray-500">Feb 2025 - Now</div>
                    </div>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img
                                className="rounded-full border-1 border-gray-200 p-4 w-16 h-16"
                                src={logo as string}
                                alt="Timenotes logo"
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-lg">Junior React Developer</h4>
                                <h5>Timenotes.io</h5>
                            </div>
                        </div>
                        <div className="text-gray-500">Aug 2024 - Oct 2024</div>
                    </div>
                </div>
            </section>

            <h3 className="text-xl font-medium mb-3">
                EDUCATION
            </h3>
            <section className="mb-6">
                <div className="border-1 border-gray-200 p-4 rounded-lg mb-3">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img
                                className="rounded-full border-1 border-gray-200 p-2 w-16 h-16"
                                src={uniLogo as string}
                                alt="Warsaw University of Technology logo"
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-lg">Warsaw University of Technology</h4>
                                <h5>Automation, Robotics and Industrial Computer Science</h5>
                            </div>
                        </div>
                        <div className="text-gray-500">Oct 2023 - Now</div>
                    </div>
                </div>
                <div className="border-1 border-gray-200 p-4 rounded-lg mb-3">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img
                                className="rounded-full border-1 border-gray-200 p-2 w-16 h-16"
                                src={schoolLogo as string}
                                alt="My High School logo"
                            />
                            <div className="ml-4">
                                <h4 className="font-semibold text-lg">
                                    ZSMIO nr.5 w Łomży
                                </h4>
                                <h5>
                                    IT technician
                                </h5>
                            </div>
                        </div>
                        <div className="text-gray-500">Sep 2019 - Apr 2023</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
