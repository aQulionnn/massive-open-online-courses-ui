import style from './CourseCard.module.css'
import {CourseProps} from "../../types/course";
import {useNavigate} from "react-router-dom";

const CourseCard = (props: CourseProps) => {
    const navigate = useNavigate()

    return (
        <div className={style['course']} onClick={() => navigate(`/courses/${props.id}`)}>
            <span className={style['subject']}>{props.subject}</span>
            <h2 className={style['title']}>{props.title}</h2>
            <p className={style['description']}>{props.description}</p>
        </div>
    )
}

export default CourseCard