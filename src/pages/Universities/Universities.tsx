import style from './Universities.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import UniversityList from "../../components/UniversityList/UniversityList.tsx";

const Universities = () => {
    return (
        <Layout>
            <div className={style['universities']}>
                <UniversityList />
            </div>
        </Layout>
    );
};



export default Universities;