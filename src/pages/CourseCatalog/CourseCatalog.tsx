import Layout from "../../components/Layout/Layout.tsx";
import style from './CourseCatalog.module.css'
import CourseList from "../../components/CourseList/CourseList.tsx";

const CourseCatalog = () => {
    return (
        <Layout>
            <div className={style['courses']}>
                <CourseList />
            </div>
        </Layout>
    )
}

export default CourseCatalog