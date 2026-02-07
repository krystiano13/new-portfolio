import { Fragment } from "react";

export function ContactSection() {
  return (
    <Fragment>
      <h3 className="text-xl dark:text-white font-medium mb-3">CONTACT INFO</h3>
      <p className="dark:text-gray-200">
        You can contact me either via{" "}
        <a
          className="text-blue-500 hover:text-blue-600 transition"
          href="https://www.linkedin.com/in/krystian-zieja-1b9902253/"
        >
          LINKEDIN
        </a>{" "}
        or{" "}
        <a
          className="text-blue-500 hover:text-blue-600 transition"
          href="mailto:crystianotv@gmail.com"
        >
          EMAIL
        </a>
        . You can also check out my{" "}
        <a
          className="text-blue-500 hover:text-blue-600 transition"
          href="https://github.com/krystiano13"
        >
          GITHUB PROFILE
        </a>
      </p>
    </Fragment>
  );
}
