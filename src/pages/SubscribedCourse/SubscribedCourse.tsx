import style from './SubscribedCourse.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import ModuleList from "../../components/ModuleList/ModuleList.tsx";

const SubscribedCourse = () => {
    return (
        <Layout>
            <div className={style['subscribed-course']}>
                <ModuleList courseId={1}/>
                <div className={style['lecture']}>
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