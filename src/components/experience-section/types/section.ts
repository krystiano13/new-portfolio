export type Section = {
  title: string;
  elements: Element[];
};

export type Element = {
  title: string;
  subtitle: string;
  date: string;
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  open?: boolean;
};
