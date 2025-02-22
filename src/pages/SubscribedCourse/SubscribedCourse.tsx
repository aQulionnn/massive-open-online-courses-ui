import style from './SubscribedCourse.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import ModuleList from "../../components/ModuleList/ModuleList.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CourseProps} from "../../types/course";
import {getCourseById} from "../../services/courseService.ts";

const SubscribedCourse = () => {
    const [course, setCourse] = useState<CourseProps>();

    const { id } = useParams()

    useEffect(() => {
        setCourse(getCourseById(Number(id)))
    }, [id])

    return (
        <Layout>
            <div className={style['subscribed-course']}>
                <ModuleList courseId={Number(id)} />
                <div className={style['lecture']}>
                    {course?.id}
                    <video controls className={style['video']}>
                        <source src="" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </Layout>
    );
};

export default SubscribedCourse;