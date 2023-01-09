import {Link} from "react-router-dom";

export const Pagination = (
    {path, pageCount, page, onChange}:
        {path: string, pageCount: Number, page: Number, onChange: Function;}) => {
    let list = [];
    for (let i = 1; i <= pageCount; i++) {
        list.push(
            <li key={i}>
                <Link to={path + "/" + i}
                    onClick={() => onChange(i)}
                    className={page === i ? "selected" : ""}
                >{i}</Link>
            </li>
        );
    }
    return (
        <ul className='pagination'>
            {list}
        </ul>
    );
};
