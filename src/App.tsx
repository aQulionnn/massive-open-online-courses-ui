import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Universities from "./pages/Universities/Universities.tsx";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog.tsx";
import Course from "./pages/Course/Course.tsx";
import Login from "./pages/Login/Login.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseCatalog />} />
                <Route path="courses/:id" element={<Course />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/auth" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
