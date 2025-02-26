import style from './Partnership.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import {useState} from "react";
import {useUserDbStore} from "../../stores/useDbStore.ts";

const Partnership = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [middleName, setMiddleName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const userStore = useUserDbStore()

    const submitApplications = () => {
        const id = userStore.users.length + 1
        userStore.addUser({id, firstName, middleName, lastName, email, password, role: 'university_admin'})
    }

    return (
        <Layout>
            <div className={style['partnership']}>
                <form className={style['form']}>
                    <label className={style['label']}>
                        Имя
                        <input className={style['input']} type="text" required onChange={(e) => setFirstName(e.target.value)}/>
                    </label>
                    <label className={style['label']}>
                        Фамилия
                        <input className={style['input']} type="text" onChange={(e) => setLastName(e.target.value)}/>
                    </label>
                    <label className={style['label']}>
                        Отчество
                        <input className={style['input']} type="text" onChange={(e) => setMiddleName(e.target.value)}/>
                    </label>
                    <label className={style['label']}>
                        Почта
                        <input className={style['input']} type="email" required onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label className={style['label']}>
                        Пароль
                        <input className={style['input']} type="password" required onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button
                        className={style['btn']}
                        onClick={submitApplications}
                    >
                        ПОДАТЬ ЗАЯВКУ
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Partnership;