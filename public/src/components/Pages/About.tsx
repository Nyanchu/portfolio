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

const pagePerCount = 50;

export const About = () => {
    const [users, setUsers] = useState([] as User[]);
    const [usersCount, setusersCount] = useState(50 as number);
    const [page, setPage] = useState(1 as number);

    // リストの生成
    useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
        // TODO: react-query で書き直す？しかし親要素にも影響があるのが直感的ではない
        (async () => {
            const offset = (page - 1) * pagePerCount;
            const response = await fetch(
                process.env.REACT_APP_URL_FUNCTIONS_API + "/users"
                + "?limit=" + pagePerCount
                + "&offset=" + offset
            );
            const body = await response.json();
            setUsers(body.data);
            setusersCount(body.count);
        })();
    }, [page]); // pageの更新があったときに実行

    // ページネーションの生成
    const pageCount = Math.floor(usersCount / pagePerCount);
    const handleChange = (page: number) => {console.log(page); setPage(page);};

    return (
        <div className='main'>
            <Pagination pageCount={pageCount} page={page} onChange={handleChange} />
            <BlockList users={users} />
            <Pagination pageCount={pageCount} page={page} onChange={handleChange} />
        </div >
    );
};

function BlockList({users}: {users: User[];}) {
    let list: any = [];
    users.map((user) => list.push(<List user={user} />));
    return (
        <ul className='block_list'>
            {list}
        </ul>
    );
}

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
                <a href={"#about/" + i}
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
