import { Fragment } from "react";
import type { Projects } from "./types/project.ts";

interface Props {
    projects: Projects
}

export function ProjectsSection({ projects }: Props)
{
    return (
        <Fragment>
            <h3 className="text-xl dark:text-white font-medium mb-3">
                INTERESTING PROJECTS
            </h3>
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 justify-between">
                {
                    projects.map(item => (
                        <div className="flex-1 w-full lg:w-auto border-1 dark:border-zinc-700 border-gray-200 rounded-lg flex flex-col">
                            <img
                                className="object-fill w-full rounded-t-lg"
                                src={item.imageSrc as string}
                                alt={item.imageAlt}
                            />
                            <div className="w-full h-full flex flex-col justify-between p-2">
                                <div id={'1'} className="flex-1">
                                    <h4 className="text-lg dark:text-gray-200 font-medium">{item.title}</h4>
                                    <p className="text-sm dark:text-gray-300 font-regular text-gray-500 mt-2">
                                        { item.description }
                                    </p>
                                </div>
                                <div className="w-full flex flex-wrap gap-2 mt-3 items-center">
                                    {item.tags.map(tag => (
                                        <div className="text-xs dark:bg-black dark:border-1 dark:border-zinc-700 dark:text-gray-200 font-medium bg-gray-200 text-gray-800 px-2 py-1">
                                            { tag }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}