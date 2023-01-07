import {useEffect, useState} from 'react';

type User = {
    name: string;
    kana: string;
    age: number;
    birthday: string;
    sex: string;
    mail: string;
    tel1: string;
    tel2: string;
    postalCode: string;
    address: string;
};

function List({user}: {user: User;}) {
    return (
        <li key={user.name}>{/* IDをキーにすべき */}
            <p className='name'>{user.name} ({user.kana})</p>
            <p>{user.birthday}　{user.sex}</p>
            <p>〒{user.postalCode} {user.address}</p>
        </li>
    );
}

function Pagination(
    {pageCount, page, onChange}:
        {pageCount: Number, page: Number, onChange: Function;}) {
    let list = [];
    for (let i = 1; i <= pageCount; i++) {
        list.push(
            <li>
                <a
                    onClick={() => onChange(i)}
                    className={page === i ? "selected" : ""}
                >{i}</a>
            </li>
        );
    }
    return (
        <ul className='pagination'>
            {list}
        </ul>
    );
}

export const About = () => {
    const [users, setUsers] = useState([] as User[]);
    const [usersCount, setusersCount] = useState(50 as number);
    const [page, setPage] = useState(1 as number);
    const pagePerCount = 50;

    // リストの生成
    useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
        // TODO: react-query で書き直す？しかし親要素にも影響があるのが直感的ではない
        (async () => {
            const offset = (page - 1) * pagePerCount;
            const response = await fetch(
                "http://127.0.0.1:5001/portfolio-8cf27/us-central1/api/users?"
                + "limit=" + pagePerCount
                + "offset=" + offset
            );
            const body = await response.json();
            setUsers(body.data);
            setusersCount(body.count);
        })();
    }, []);
    const list = users.map((user) => <List user={user} />);

    // ページネーションの生成
    const pageCount = Math.floor(usersCount / pagePerCount);
    const handleChange = (page: number) => {console.log(page); setPage(page);};

    return (
        <div className='main'>
            <ul className='block_list'>{list}</ul>
            <Pagination pageCount={pageCount} page={page} onChange={handleChange} />
        </div >
    );
};
