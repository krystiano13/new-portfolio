import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

import type { HeaderSectionProps } from "./types/HeaderSectionProps";

export function HeaderSection(props: HeaderSectionProps) {
  return (
    <>
      <button
        className="entry-1 w-12 h-12 mb-6 cursor-pointer dark:bg-gray-100 dark:text-black flex text-xl justify-center items-center rounded-full bg-black text-white"
        onClick={props.toggleDarkMode}
      >
        {!props.darkMode ? <LuSun /> : <LuMoon />}
      </button>
      <h1 className="text-4xl dark:text-white font-bold mb-6 entry-0">
        Hi ! I'm Krystian 🖐️️
      </h1>
      <h2 className="text-2xl dark:text-white font-semibold mb-6 entry-0">
        A Software Engineer
      </h2>
    </>
  );
}
