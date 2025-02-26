import style from './LoginForm.module.css'
import React, {useState} from "react";
import {getUserByEmail} from "../../services/userService.ts";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";
import {getUniversityByUserId} from "../../services/universityService.ts";

const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const signIn = useAuthStore((state) => state.signIn)

    const login = (e:React.FormEvent) => {
        e.preventDefault()
        const user = getUserByEmail(email)
        if (user) {
            if (user.password === password && user.role === 'user') {
                signIn(user)
                navigate('/profile')
            }
            else  if (user.password === password && user.role === 'university_admin') {
                const uni = getUniversityByUserId(user.id)
                if (uni === undefined) {
                    navigate('/')
                }
                else {
                    signIn(user)
                    navigate(`/${uni?.acronym}`)
                }
            }
        }
    }

    return (
        <form className={style['form']}>
            <h1 className={style['form-title']}>LogIn</h1>
            <label className={style['label']}>
                Почта
                <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className={style['label']}>
                Пароль
                <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className={style['form-btn']} onClick={login}>SIGN IN</button>
        </form>
    );
};

export default LoginForm;