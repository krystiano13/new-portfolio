import type { CSSProperties } from "react";

export type Project = {
    imageSrc: CSSProperties;
    imageAlt: string;
    title: string;
    description: string;
    tags: string[];
};

export type Projects = Project[];