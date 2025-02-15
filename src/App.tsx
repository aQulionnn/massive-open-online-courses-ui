import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Universities from "./pages/Universities/Universities.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/universities" element={<Universities />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
