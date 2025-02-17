import style from './LoginForm.module.css'

const LoginForm = () => {
    return (
        <div className={style['login']}>
            <section className={style['left-section']}>
                <h1 className={style['left-section-title']}>С Возвращением!</h1>
                <p className={style['left-section-text']}>Войдите, чтобы продолжить изучение новых тем и навыков вместе с нами.</p>
                <button className={style['left-section-btn']}>SIGN IN</button>
            </section>
            <form className={style['form']}>
                <h1 className={style['form-title']}>Create Account</h1>
                <label className={style['label']}>
                    Имя
                    <input type="text" />
                </label>
                <label className={style['label']}>
                    Фамилия
                    <input type="text" />
                </label>
                <label className={style['label']}>
                    Почта
                    <input type="email" />
                </label>
                <label className={style['label']}>
                    Пароль
                    <input type="password" />
                </label>
                <button className={style['form-btn']}>SIGN UP</button>
            </form>
        </div>
    );
};

export default LoginForm;