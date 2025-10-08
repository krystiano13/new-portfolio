import { Fragment } from "react";

export function ContactSection()
{
    return (
        <Fragment>
            <h3 className="text-xl dark:text-white font-medium mb-3">
                CONTACT INFO
            </h3>
            <p className="dark:text-gray-200">
                You can contact me either via {" "}
                <a
                    className="text-blue-500"
                    href="https://www.linkedin.com/in/krystian-zieja-1b9902253/"
                >
                    Linkedin
                </a>
                {" "} or {" "}
                <a
                    className="text-blue-500"
                    href="mailto:crystianotv@gmail.com"
                >
                    Email
                </a>.
            </p>
        </Fragment>
    )
}