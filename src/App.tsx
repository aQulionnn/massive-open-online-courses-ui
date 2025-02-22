import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Universities from "./pages/Universities/Universities.tsx";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog.tsx";
import Course from "./pages/Course/Course.tsx";
import Login from "./pages/Login/Login.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import SubscribedCourse from "./pages/SubscribedCourse/SubscribedCourse.tsx";
import UniversityAdmin from "./pages/UniversityAdmin/UniversityAdmin.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseCatalog />} />
                <Route path="courses/:id" element={<Course />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/auth" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/subscribed-courses/:id" element={<SubscribedCourse />} />
                <Route path="/:university" element={<UniversityAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
