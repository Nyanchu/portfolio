import {useEffect, useState} from 'react';
import {Pagination} from '../Pagination';

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

const pagePerCount = 48;

export const Skill = () => {
    // ステータス
    const [users, setUsers] = useState([] as User[]);
    const [usersCount, setusersCount] = useState(pagePerCount as number);
    const [page, setPage] = useState(1 as number);

    // hook で非同期処理をする
    useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す
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
    }, [page]); // pageの更新があったときに再実行

    // ページネーションの計算
    const pageCount = Math.ceil(usersCount / pagePerCount);
    const handleChange = (page: number) => {console.log(page); setPage(page);};

    return (
        <div className='main'>
            <Pagination path="/skill" pageCount={pageCount} page={page} onChange={handleChange} />
            <BlockList users={users} />
            <Pagination path="/skill" pageCount={pageCount} page={page} onChange={handleChange} />
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
