import {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import {Header} from './components/Header';
import {Works} from './components/Pages/Works';
import {Skill} from './components/Pages/Skill';
import {Contact} from './components/Pages/Contact';

function App() {
    // ページのステート変数を宣言する
    const [page, setPage] = useState("works");
    const changePageFunc = (pageName: string) => {
        setPage(pageName);
    };
    return (
        <BrowserRouter>
            <Header pageName={page} onChange={changePageFunc} />
            <Routes>
                <Route path="/" element={<Works />} />
                <Route path="/works" element={<Works />} />
                <Route path="/skill" element={<Skill />}>
                    <Route path=":page" element={<Skill />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
