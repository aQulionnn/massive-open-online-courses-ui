import style from './Login.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.tsx";
import {useState} from "react";

const Login = () => {
    const [condition, setCondition] = useState<boolean>(true)

    const toggle = () => {
        if (condition) {
             setCondition(false)
        }
        else {
            setCondition(true)
        }
    }

    return (
        <Layout>
            <main className={style['login']}>
                <div className={style['auth-section']}>
                    <section className={condition ? style['left-section'] : `${style['left-section']} ${style['active']}`}>
                        <h1 className={style['left-section-title']}>
                            {condition
                                ? 'С Возвращением!'
                                : 'Добро пожаловать!'}
                        </h1>
                        <p className={style['left-section-text']}>
                            {condition
                                ? 'Войдите, чтобы продолжить изучение новых тем и навыков вместе с нами.'
                                : 'Присоединяйтесь и начните свой путь к новым знаниям прямо сейчас!'}
                        </p>
                        <button className={style['left-section-btn']} onClick={toggle}>{condition ? 'SIGN IN' : 'SIGN UP'}</button>
                    </section>
                    <LoginForm/>
                    <RegistrationForm/>
                </div>
            </main>
        </Layout>
    );
};

export default Login;