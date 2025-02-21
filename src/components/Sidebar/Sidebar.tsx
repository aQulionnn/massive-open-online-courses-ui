import style from './Sidebar.module.css'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={style['sidebar']}>
            <Link to="" className={style['sidebar-item']}>КУРСЫ</Link>
        </aside>
    );
};

export default Sidebar;