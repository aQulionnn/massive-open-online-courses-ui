import style from './CourseCard.module.css'
import {CourseProps} from "../../types/course";

const CourseCard = (props: CourseProps) => {
    return (
        <div className={style['course']}>
            <span className={style['subject']}>{props.subject}</span>
            <h2 className={style['title']}>{props.title}</h2>
            <p className={style['description']}>{props.description}</p>
        </div>
    )
}

export default CourseCard