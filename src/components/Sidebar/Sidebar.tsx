import style from './Sidebar.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";
import {useEffect, useState} from "react";
import {getUniversityByUserId} from "../../services/universityService.ts";

const Sidebar = () => {
    const signOut = useAuthStore((state) => state.signOut)
    const isAdmin = useAuthStore((state) => state.user)
    const navigate = useNavigate()

    const [acronym, setAcronym] = useState<string | null>(null)

    useEffect(() => {
        if (isAdmin?.role === 'university_admin') {
            const uni = getUniversityByUserId(isAdmin.id)
            if (uni) setAcronym(uni.acronym)
        }
    }, [isAdmin])

    const logout = () => {
        signOut()
        navigate("/")
    }

    return (
        <aside className={style['sidebar']}>
            <nav className={style['nav']}>
                <Link to={`/${acronym}`} className={style['sidebar-item']}>КУРСЫ</Link>
                {isAdmin?.role === 'admin' &&  <Link to="" className={style['sidebar-item']}>ВУЗЫ</Link>}
            </nav>
            <button onClick={logout} className={style['logout-btn']}>ВЫХОД</button>
        </aside>
    );
};

export default Sidebar;