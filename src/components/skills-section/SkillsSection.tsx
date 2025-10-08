import { Fragment } from "react";
import { skills } from "./skills.ts";

export function SkillsSection()
{
    return (
        <Fragment>
            <h3 className={`text-xl dark:text-white font-medium mb-3`}>
                SKILLS
            </h3>
            <div className="w-full flex flex-wrap gap-1">
                {
                    skills.map(item => (
                        <div style={{ flex: "1 1 0px" }} className="p-6 border-1 dark:border-zinc-700 border-gray-200 rounded-lg w-22 flex flex-col items-center gap-2 justify-center">
                            <i
                                className={`w-full dark:text-gray-200 text-center devicon-${item.iconName}-plain text-3xl`}
                            ></i>
                            <h4 className="dark:text-gray-100">{ item.name }</h4>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}