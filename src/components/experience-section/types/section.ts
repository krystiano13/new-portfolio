export type Section = {
    title: string;
    elements: Element[];
}

type Element = {
    title: string;
    subtitle: string;
    date: string;
    logoSrc?: string;
    logoAlt?: string;
    description?: string;
}