import {useEffect, useState} from 'react'
import {CourseProps} from "../../types/course";
import {getCoursesByUniversityId} from "../../services/courseService.ts";
import CourseCard from "../CourseCard/CourseCard.tsx";
import style from "./UniversityCourseList.module.css";
import {useNavigate} from "react-router-dom";

const UniversityCourseList = () => {
    const[courses, setCourses] = useState<CourseProps[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        setCourses(getCoursesByUniversityId(1))
    }, []);

    return (
        <div className={style['course-list']}>
            {courses.map((course, index) => (
                <CourseCard {...course} key={index} />
            ))}
            <div className={style['new-course']} onClick={() =>navigate("/new-course")}>
                ДОБАВИТЬ КУРС
            </div>
        </div>
    )
}

export default UniversityCourseList