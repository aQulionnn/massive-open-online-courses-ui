import Layout from "../../components/Layout/Layout.tsx";
import style from './Course.module.css'
import {useParams} from "react-router-dom";
import {CourseProps} from "../../types/course";
import {useEffect, useState} from "react";
import coursesData from '../../services/course-data.json'
import ModuleList from "../../components/ModuleList/ModuleList.tsx";

const Course = () => {
    const [course, setCourse] = useState<CourseProps>({
        description: "",
        id: 0,
        subject: "",
        title: "",
        universityName: ""
    })
    const {id} = useParams<string>()

    useEffect(() => {
        setCourse(coursesData[Number(id) - 1])
    }, [id])

    return (
        <Layout>
            <div className={style['course']}>
                <ModuleList courseId={Number(id)}/>
                <div className={style['details']}>
                    <h1>{course.title}</h1>
                    <h3>{course.universityName}</h3>
                    <h5>{course.subject}</h5>
                    <p>{course.description}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Course