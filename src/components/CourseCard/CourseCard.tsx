import style from './CourseCard.module.css'
import {CourseProps} from "../../types/course";
import {useNavigate} from "react-router-dom";

const CourseCard = (props: CourseProps) => {
    const navigate = useNavigate()

    return (
        <div className={style['course']} onClick={() => navigate(`/courses/${props.id}`)}>
            <span className={style['subject']}>{props.subject}</span>
            <img src={props.thumbnail} alt="" className={style['thumbnail']}/>
            <div className={style['details']}>
                <h3 className={style['title']}>{props.title}</h3>
                <p className={style['description']}>{props.summary}</p>
            </div>
        </div>
    )
}

export default CourseCard