import style from './Profile.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import {useAuthStore} from "../../stores/useAuthStore.ts";
import SubscribedCourseCard from "../../components/SubscribedCourseCard/SubscribedCourseCard.tsx";

const Profile = () => {

    const user = useAuthStore((state) => state.user)

    return (
        <Layout>
            <div className={style['profile']}>
                <div className={style['user-info']}>
                    <h1 className={style['full-name']}>{user?.firstName} {user?.lastName}</h1>
                    <h4 className={style['email']}>{user?.email}</h4>
                </div>
                <div className={style['education']}>
                    <h1>Мое обучение</h1>
                    <SubscribedCourseCard />
                </div>
            </div>
        </Layout>
    );
};

export default Profile;