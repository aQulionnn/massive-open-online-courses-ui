import style from './RegistrationForm.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../../stores/useAuthStore.ts";

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [middleName, setMiddleName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate()
    const signUp = useAuthStore((state) => state.signUp)

    const authorize = () => {
        signUp({id: 3, firstName, middleName,lastName, email, password, role: 'user'})
        navigate('/profile')
    }

    return (
        <form className={style['form']}>
            <h1 className={style['form-title']}>Create Account</h1>
            <label className={style['label']}>
                Имя
                <input type="text" required onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label className={style['label']}>
                Фамилия
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label className={style['label']}>
                Отчество
                <input type="text" onChange={(e) => setMiddleName(e.target.value)}/>
            </label>
            <label className={style['label']}>
                Почта
                <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className={style['label']}>
                Пароль
                <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className={style['form-btn']} onClick={authorize}>SIGN UP</button>
        </form>
    );
};

export default RegistrationForm;