import style from './Profile.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import {useAuthStore} from "../../stores/useAuthStore.ts";
import SubscribedCourseCard from "../../components/SubscribedCourseCard/SubscribedCourseCard.tsx";
import {CourseProps} from "../../types/course";
import {useEffect, useState} from "react";
import {useCourseStore} from "../../stores/useCourseStore.ts";

const Profile = () => {
    const [subscribedCourses, setSubscribedCourses] = useState<CourseProps[]>([]);

    const user = useAuthStore((state) => state.user)
    const courseStore = useCourseStore()

    useEffect(() => {
        setSubscribedCourses(courseStore.subscribedCourses)
    }, [courseStore.subscribedCourses]);

    return (
        <Layout>
            <div className={style['profile']}>
                <div className={style['user-info']}>
                    <h1 className={style['full-name']}> {user?.lastName} {user?.firstName} {user?.middleName}</h1>
                    <h4 className={style['email']}>{user?.email}</h4>
                </div>
                <div className={style['education']}>
                    <h1>Мое обучение</h1>
                    {subscribedCourses.map((course: CourseProps) => (
                        <SubscribedCourseCard {...course} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Profile;