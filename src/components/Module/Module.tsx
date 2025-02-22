import { ModuleProps } from "../../types/module";
import style from './Module.module.css'
import {useEffect, useState} from "react";
import {LectureProps} from "../../types/lecture";
import {getLecturesByModuleId} from "../../services/lectureService.ts";

type Props = {
    index: number
} & ModuleProps

const Module = (props: Props) => {
    const [lectures, setLectures] = useState<LectureProps[]>()

    useEffect(() => {
        setLectures(getLecturesByModuleId(props.id));
    }, [props.id])

    return (
        <div className={style['module']}>
            <h2 className={style['name']}>{props.index}. {props.name}</h2>
            <p className={style['description']}>{props.summary}</p>
            <details className={style['lectures']}>
                <summary className={style['summary']}></summary>
                {lectures?.map((lecture, index) => (
                    <div className={style['lecture']}>
                        {props.index}.{index + 1} {lecture.topic}
                    </div>
                ))}
            </details>
        </div>
    );
};

export default Module