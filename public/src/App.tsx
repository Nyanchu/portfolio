import {BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/css/Common.scss';
import {Header} from './components/Header';
import {Works} from './components/Pages/Works';
import {Skill} from './components/Pages/Skill';
import {Contact} from './components/Pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Works />} />
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
