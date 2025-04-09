import style from './CourseList.module.css'
import CourseCard from "../CourseCard/CourseCard.tsx";
import {CourseProps} from "../../types/course";
import {useEffect, useState} from "react";
import {getCourses} from "../../services/courseService.ts";

const CourseList = () => {

    const [courses, setCourses] = useState<CourseProps[]>([])

    useEffect(() => {
        setCourses(getCourses())
    }, []);

    return (
        <div className={style['course-list']}>
            {courses.map((course) => (
                <CourseCard {...course} key={course.id} />
            ))}
        </div>
    )
}

export default CourseList