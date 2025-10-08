import { Fragment } from "react";
import type { Projects } from "./types/project.ts";

interface Props {
    projects: Projects
}

export function ProjectsSection({ projects }: Props)
{
    return (
        <Fragment>
            <h3 className="text-xl font-medium mb-3">
                INTERESTING PROJECTS
            </h3>
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 justify-between">
                {
                    projects.map(item => (
                        <div className="flex-1 w-full lg:w-auto border-1 border-gray-200 rounded-lg flex flex-col">
                            <img
                                className="object-fill w-full rounded-t-lg"
                                src={item.imageSrc as string}
                                alt={item.imageAlt}
                            />
                            <div className="w-full h-full flex flex-col justify-between p-2">
                                <div id={'1'} className="flex-1">
                                    <h4 className="text-lg font-medium">{item.title}</h4>
                                    <p className="text-sm font-regular text-gray-500 mt-2">
                                        { item.description }
                                    </p>
                                </div>
                                <div className="w-full flex flex-wrap gap-2 mt-3 items-center">
                                    {item.tags.map(tag => (
                                        <div className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1">
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