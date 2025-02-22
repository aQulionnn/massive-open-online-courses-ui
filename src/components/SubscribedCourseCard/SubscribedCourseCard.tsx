import style from './SubscribedCourseCard.module.css'
import {useNavigate} from "react-router-dom";
import {CourseProps} from "../../types/course";

const SubscribedCourseCard = (props: CourseProps) => {
    const navigate = useNavigate()

    return (
        <div className={style['course']} onClick={() => navigate(`/subscribed-courses/${props.id}`)}>
            <h3 className={style['title']}>{props.title}</h3>
            <img src={props.thumbnail} alt="" className={style['thumbnail']} />
        </div>
    );
};

export default SubscribedCourseCard;