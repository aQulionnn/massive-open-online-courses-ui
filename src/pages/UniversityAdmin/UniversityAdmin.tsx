import style from './UniversityAdmin.module.css'
// import {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";
// import {UniversityProps} from "../../types/university";
// import {getUniversityById} from "../../services/universityService.ts";
import AdminLayout from "../../components/AdminLayout/AdminLayout.tsx";
import UniversityCourseList from "../../components/UniversityCourseList/UniversityCourseList.tsx";

const UniversityAdmin = () => {
    // const [university, setUniversity] = useState<UniversityProps | undefined>({
    //     acronym: "",
    //     id: 0,
    //     name: "",
    //     summary: "",
    //     userId: 0
    // })
    // const id = useParams<string>()
    //
    // useEffect(() => {
    //     setUniversity(getUniversityById(1))
    // }, [id])

    return (
        <AdminLayout>
            <div className={style['admin']}>
                <UniversityCourseList />
            </div>
        </AdminLayout>

    );
};

export default UniversityAdmin;