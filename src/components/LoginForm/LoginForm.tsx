import style from './LoginForm.module.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const LoginForm = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate()
    const signUp = useAuthStore((state) => state.signUp)

    const authorize = () => {
        signUp({firstName, lastName, email, password})
        navigate('/profile')
    }

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
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label className={style['label']}>
                    Фамилия
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </label>
                <label className={style['label']}>
                    Почта
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className={style['label']}>
                    Пароль
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className={style['form-btn']} onClick={authorize}>SIGN UP</button>
            </form>
        </div>
    );
};

export default LoginForm;