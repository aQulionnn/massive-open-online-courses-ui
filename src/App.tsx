import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Universities from "./pages/Universities/Universities.tsx";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseCatalog />} />
                <Route path="/universities" element={<Universities />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
