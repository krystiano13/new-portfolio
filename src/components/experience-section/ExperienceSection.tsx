import type { ExperienceSectionProps as Props } from "./types/ExperienceSectionProps.ts";

export function ExperienceSection({ section }: Props)
{
    return (
        <>
            <h3 className="text-xl font-medium mb-3">
                { section.title }
            </h3>
            <section className="mb-6">
                {
                    section.elements.map(item => (
                        <div className="border-1 border-gray-200 p-4 rounded-lg mb-3">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="rounded-full border-1 border-gray-200 w-16 h-16"
                                        src={item.logoSrc ?? ""}
                                        alt={item.logoAlt ?? ""}
                                    />
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-lg">{ item.title }</h4>
                                        <h5>{ item.subtitle }</h5>
                                    </div>
                                </div>
                                <div className="text-gray-500">{ item.date }</div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}