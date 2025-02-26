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
import {
    useCourseDbStore,
    useLectureDbStore,
    useModuleDbStore,
    useUniversityDbStore,
    useUserDbStore
} from "./stores/useDbStore.ts";
import {useEffect} from "react";
import Partnership from "./pages/Partnership/Partnership.tsx";

function App() {
    const userDb = useUserDbStore()
    const universityDb = useUniversityDbStore()
    const courseDb = useCourseDbStore()
    const moduleDb = useModuleDbStore()
    const lectureDb = useLectureDbStore()

    useEffect(() => {
        if (userDb.users.length === 0) userDb.initUsers()
        if (universityDb.universities.length === 0) universityDb.initUniversities()
        if (courseDb.courses.length === 0) courseDb.initCourses()
        if (moduleDb.modules.length === 0) moduleDb.initModules()
        if (lectureDb.lectures.length === 0) lectureDb.initLectures()
    }, []);

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
                <Route path="/partnership" element={<Partnership />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
