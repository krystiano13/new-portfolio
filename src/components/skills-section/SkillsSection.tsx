import { Fragment } from "react";
import { skills } from "./skills.ts";

export function SkillsSection()
{
    return (
        <Fragment>
            <h3 className={`text-xl font-medium mb-3`}>
                SKILLS
            </h3>
            <div className="flex flex-wrap gap-1">
                {
                    skills.map(item => (
                        <div className="p-6 border-1 border-gray-200 rounded-lg w-22 flex flex-col items-center gap-2 justify-center">
                            <i
                                className={`w-full text-center devicon-${item.iconName}-plain text-3xl`}
                            ></i>
                            <h4>{ item.name }</h4>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}