import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
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
                <Link to="/auth">ПРОФИЛЬ</Link>
            </div>
        </header>
    );
};

export default Header;