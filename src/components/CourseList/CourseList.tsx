import style from './CourseList.module.css'
import coursesData from '../../data/course-data.json'
import CourseCard from "../CourseCard/CourseCard.tsx";

const CourseList = () => {
    return (
        <div className={style['course-list']}>
            {coursesData.map((course) => (
                <CourseCard {...course} key={course.id} />
            ))}
        </div>
    )
}

export default CourseList