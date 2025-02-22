import style from './Sidebar.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const Sidebar = () => {
    const signOut = useAuthStore((state) => state.signOut)
    const navigate = useNavigate()

    const logout = () => {
        signOut()
        navigate("/")
    }

    return (
        <aside className={style['sidebar']}>
            <Link to="" className={style['sidebar-item']}>КУРСЫ</Link>
            <button onClick={logout} className={style['logout-btn']}>ВЫХОД</button>
        </aside>
    );
};

export default Sidebar;