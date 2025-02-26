import style from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const Header = () => {
    const isAuthorized = useAuthStore((state) => state.user)
    const signOut = useAuthStore((state) => state.signOut)
    const navigate = useNavigate()

    const logout = () => {
        signOut()
        navigate('/auth')
    }

    return (
        <header className={style['header']}>
            <div className={style['header-logo']}>
                🔬
                <Link to="/"> UOpenLab</Link>
            </div>
            <nav className={style['nav']}>
                <Link className={style['nav-item']} to="/courses">КАТАЛОГ КУРСОВ</Link>
                <Link className={style['nav-item']} to="/universities">ВУЗЫ</Link>
                <Link className={style['nav-item']} to="/about-us">О НАС</Link>
                <Link className={style['nav-item']} to="/partnership">СОТРУДНИЧЕСТВО</Link>
            </nav>
            <div className={style['header-profile']}>
                <Link to={isAuthorized != null ? '/profile' : '/auth'} className={style['profile']}>ПРОФИЛЬ</Link>
                {isAuthorized && <img src="public/icons/logout.png" alt="" className={style['logout']} onClick={logout}/>}
            </div>
        </header>
    );
};

export default Header;