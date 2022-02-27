import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Page1 from './pages/Page1.js';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page-1" element={<Page1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
