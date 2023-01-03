import {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Pages} from './components/Pages';

function App() {
    // ページのステート変数を宣言する
    const [page, setPage] = useState("works");
    const changePageFunc = (pageName: string) => {
        setPage(pageName);
    };
    return (
        <div>
            <Header pageName={page} changePageFunc={changePageFunc} />

            <Pages pageName={page} />
        </div>
    );
}

export default App;
