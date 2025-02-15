import style from './UniversityCard.module.css'
import {UniversityProps} from "../../types/university"

const UniversityCard = (props: UniversityProps) => {
    return (
        <div className={style['university']}>
            <h3 className={style['name']}>{props.name}</h3>
            <p className={style['description']}>{props.description}</p>
            <h5 className={style['course']}>ОПУБЛИКОВАНО КУРСОВ:</h5>
            <span className={style['course-count']}>{props.courseCount}</span>
        </div>
    )
}

export default UniversityCard