import { SectionElement as Element } from "./SectionElement.tsx";
import type { ExperienceSectionProps as Props } from "./types/ExperienceSectionProps.ts";

export function ExperienceSection({ section, entryKey }: Props) {
  return (
    <>
      <h3
        className={`text-xl dark:text-white font-medium mb-3 entry-${entryKey}`}
      >
        {section.title}
      </h3>
      <section className={`mb-6 entry-${entryKey + 1}`}>
        {section.elements.map((item) => (
          <Element item={item} />
        ))}
      </section>
    </>
  );
}
