import style from './Header.module.css'
import {Link} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const Header = () => {
    const isAuthorized = useAuthStore((state) => state.user)

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
            </nav>
            <div className={style['header-profile']}>
                <Link to={isAuthorized != null ? '/profile' : '/auth'}>ПРОФИЛЬ</Link>
            </div>
        </header>
    );
};

export default Header;