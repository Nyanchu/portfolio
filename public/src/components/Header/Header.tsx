import {Link} from "react-router-dom";

export const Header = ({pageName, onChange}: {pageName: string, onChange: Function;}) => {
    return (
        <header>
            <h1>TOMOHIRO SAKAI</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            className={pageName === "works" ? "selected" : ""}
                            to="/works"
                            onClick={() => onChange("works")}
                        >works</Link>
                    </li>
                    <li>
                        <Link
                            className={pageName === "skill" ? "selected" : ""}
                            to="/skill"
                            onClick={() => onChange("skill")}
                        >skill</Link>
                    </li>
                    <li>
                        <Link
                            className={pageName === "contact" ? "selected" : ""}
                            to="/contact"
                            onClick={() => onChange("contact")}
                        >contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
