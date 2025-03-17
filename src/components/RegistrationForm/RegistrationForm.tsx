import style from './RegistrationForm.module.css'
import React, {useState} from "react";
import {useUserDbStore} from "../../stores/useDbStore.ts";

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [middleName, setMiddleName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const userDb = useUserDbStore()

    const register = (e:React.FormEvent) => {
        e.preventDefault()
        const id = userDb.users.length + 1
        userDb.addUser({id, firstName, middleName, lastName, email, password, role: 'user'})
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setEmail('')
        setPassword('')
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
            <button className={style['form-btn']} onClick={register}>SIGN UP</button>
        </form>
    );
};

export default RegistrationForm;