import style from './UniversityCard.module.css'
import {UniversityProps} from "../../types/university"
import {useEffect, useState} from "react";
import {getCourseCountByUniversityId} from "../../services/courseService.ts";

const UniversityCard = (props: UniversityProps) => {
    const [courseCount, setCourseCount] = useState<number>()

    useEffect(() => {
        setCourseCount(getCourseCountByUniversityId(props.id))
    }, [props.id])

    return (
        <div className={style['university']}>
            <h3 className={style['name']}>{props.name}</h3>
            <p className={style['description']}>{props.summary}</p>
            <h5 className={style['course']}>ОПУБЛИКОВАНО КУРСОВ:</h5>
            <span className={style['course-count']}>{courseCount}</span>
        </div>
    )
}

export default UniversityCard