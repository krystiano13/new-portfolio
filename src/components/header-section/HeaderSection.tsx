import type { HeaderSectionProps } from "./types/HeaderSectionProps";

export function HeaderSection(props: HeaderSectionProps) {
  return (
    <>
      <button
        className="entry-1 w-12 h-12 mb-6 cursor-pointer dark:bg-gray-100 dark:text-black flex text-xl justify-center items-center rounded-full bg-black text-white"
        onClick={props.toggleDarkMode}
      >
        {!props.darkMode ?
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>:
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        }
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
