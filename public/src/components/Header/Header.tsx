import {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const pathname = useLocation().pathname.split('/')[1];
    // ページのステート変数を宣言する
    const [page, setPage] = useState(pathname);
    return (
        <header>
            <h1>TOMOHIRO SAKAI</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            className={page === "" || page === "works" ? "selected" : ""}
                            to="/works"
                            onClick={() => setPage("works")}
                        >works</Link>
                    </li>
                    <li>
                        <Link
                            className={page === "skill" ? "selected" : ""}
                            to="/skill"
                            onClick={() => setPage("skill")}
                        >skill</Link>
                    </li>
                    <li>
                        <Link
                            className={page === "contact" ? "selected" : ""}
                            to="/contact"
                            onClick={() => setPage("contact")}
                        >contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
