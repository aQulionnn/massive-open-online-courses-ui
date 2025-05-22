import Layout from "../../components/Layout/Layout.tsx";
import style from './Course.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {CourseProps} from "../../types/course";
import {useEffect, useState} from "react";
import ModuleList from "../../components/ModuleList/ModuleList.tsx";
import {UniversityProps} from "../../types/university";
import {getUniversityById} from "../../services/universityService.ts";
import {getLectureCountByCourseId} from "../../services/lectureService.ts";
import {getModuleCountByCourseId} from "../../services/moduleService.ts";
import {useCourseStore} from "../../stores/useCourseStore.ts";
import {getCourseById} from "../../services/courseService.ts";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const Course = () => {
    const [university, setUniversity] = useState<UniversityProps | undefined>({
        acronym: "",
        id: 0,
        name: "",
        summary: "",
        userId: 0
    })
    const [course, setCourse] = useState<CourseProps>({
        description: "",
        id: 0,
        subject: "",
        summary: "",
        thumbnail: "",
        title: "",
        universityId: 0
    })
    const [lectureCount, setLectureCount] = useState<number>(0);
    const [moduleCount, setModuleCount] = useState<number>(0);
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

    const user = useAuthStore((state) => state.user)

    const navigate = useNavigate()
    const {id} = useParams<string>()
    const courseStore = useCourseStore()

    const subscribe = () => {
        const isAlreadySubscribed = courseStore.subscribedCourses.some(x => x.id === course.id);
        if (isAlreadySubscribed) {
            courseStore.unsubscribe(course.id)
            setIsSubscribed(false)
        }
        else {
            courseStore.subscribe({...course})
            setIsSubscribed(true)
            navigate(`/subscribed-courses/${course.id}`)
        }
    }

    useEffect(() => {
        const foundCourse = getCourseById(Number(id))
        if (foundCourse) setCourse(foundCourse)
    }, [id])

    useEffect(() => {
        if (course.universityId) {
            setUniversity(getUniversityById(course.universityId));
            setLectureCount(getLectureCountByCourseId(course.id));
            setModuleCount(getModuleCountByCourseId(course.id));
        }
    }, [course.universityId, course.id])

    useEffect(() => {
        const isAlreadySubscribed = courseStore.subscribedCourses.some(x => x.id === course.id)
        if (isAlreadySubscribed) setIsSubscribed(true);
        else setIsSubscribed(false);
    }, [course.id, courseStore.subscribedCourses]);

    return (
        <Layout>
            <div className={style['course']}>
                <div className={style['details']}>
                    <h1>{course.title}</h1>
                    <p>{course.summary}</p>
                    <div className={style['tags']}>
                        <span>{course.subject}</span>
                        <span>{university?.acronym}</span>
                    </div>
                </div>
                <section className={style['overview']}>
                    <h3>Обзор курса</h3>
                    <p>{course.description}</p>
                </section>
                <section className={style['content']}>
                    <div className={style['div']}>
                        <h3>Содержание курса</h3>
                        <ul>
                            <li>Модулей: {moduleCount}</li>
                            <li>Лекций: {lectureCount}</li>
                        </ul>
                    </div>
                    <ModuleList courseId={Number(id)}/>
                </section>
                <section className={style['subscribe']}>
                    <img src={course.thumbnail} alt="" className={style['thumbnail']}/>
                    {user?.role === 'user' &&
                        <button
                            className={isSubscribed ? style['subscribed-btn'] : style['unsubscribed-btn']}
                            onClick={subscribe}
                        >
                            {isSubscribed ? 'ПОКИНУТЬ' : 'ЗАПИСАТЬСЯ'}
                        </button>
                    }
                </section>
            </div>
        </Layout>
    )
}

export default Course