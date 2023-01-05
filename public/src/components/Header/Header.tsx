import img_title from "../../assets/img/logo_transparent.png";

export const Header = (props: {pageName: string, changePageFunc: (pageName: string) => void;}) => {
    const page = props.pageName;
    const changePage = props.changePageFunc;
    return (
        <header>
            {/*<h1><img src={img_title} alt="酒井 智弘　PORTFOLIO" /></h1>*/}
            <h1>TOMOHIRO SAKAI</h1>
            <nav>
                <ul>
                    <li>
                        <a
                            className={page === "works" ? "selected" : ""}
                            href={"#works"}
                            onClick={() => changePage("works")}
                        >works</a>
                    </li>
                    <li>
                        <a
                            className={page === "about" ? "selected" : ""}
                            href={"#about"}
                            onClick={() => changePage("about")}
                        >about</a>
                    </li>
                    <li>
                        <a
                            className={page === "contact" ? "selected" : ""}
                            href={"#contact"}
                            onClick={() => changePage("contact")}
                        >contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
