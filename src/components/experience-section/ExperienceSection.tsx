import { useState, useEffect } from "react";

import type { ExperienceSectionProps as Props } from "./types/ExperienceSectionProps.ts";

export function ExperienceSection({ section, entryKey }: Props)
{
    return (
        <>
            <h3 className={`text-xl dark:text-white font-medium mb-3 entry-${entryKey}`}>
                { section.title }
            </h3>
            <section className={`mb-6 entry-${entryKey + 1}`}>
                {
                    section.elements.map((item, index) => (
                        <Element item={item} />
                    ))
                }
            </section>
        </>
    )
}

const Element = ({ item }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border-1 dark:border-zinc-800 border-gray-200 p-4 rounded-lg mb-3">
            <div className="flex flex-col-reverse lg:flex-row justify-between ">
                <div className="flex items-center">
                    <img
                        className="rounded-full border-1 dark:border-zinc-700 border-gray-200 w-16 h-16"
                        src={item.logoSrc ?? ""}
                        alt={item.logoAlt ?? ""}
                    />
                    <div className="ml-4">
                        <h4 className="font-semibold dark:text-gray-50 text-md lg:text-lg">{ item.title }</h4>
                        <h5 className="text-xs dark:text-gray-100 lg:text-base">{ item.subtitle }</h5>
                    </div>
                </div>
                <div className="text-sm mb-3 dark:text-gray-200 lg:mb-0 lg:text-base text-gray-500">{ item.date }</div>
            </div>
            {
                item.description &&
                <div className="overflow-hidden">
                    <div className="cursor-pointer select-none w-36 mt-2" onClick={() => setOpen(prev => !prev)}>
                        <button
                            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
                            className="mt-2 dark:bg-gray-200 dark:text-black transition cursor-pointer bg-gray-700 w-8 h-8 rounded-full text-white text-lg"
                        >
                            >
                        </button>
                        <span className="ml-2 dark:text-gray-200 w-full">
                        {open ? "Hide" : "Show More"}
                    </span>
                    </div>

                    <p
                        style={{ transition: "opacity 50ms" }}
                        className={`mt-2 text-justify dark:text-gray-300 ${open ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}
                    >
                        { item.description }
                    </p>
                </div>
            }
        </div>
    )
}