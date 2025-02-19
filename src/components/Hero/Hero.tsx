import style from './Hero.module.css'
import {useNavigate} from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className={style['hero']}>
            <div className={style['text-section']}>
                <h1 className={style['hero-title']}>Добро пожаловать в <span>UOpenLab</span> — платформа <span>онлайн-курсов</span> от вузов <span>Казахстана!</span></h1>
                <ul className={style['hero-list']}>
                    <li className={style['list-item']}>📚 Доступ к лучшим онлайн-курсам от ведущих университетов.</li>
                    <li className={style['list-item']}>🎓 Развивай навыки, получай сертификаты и учись в удобное время.</li>
                    <li className={style['list-item']}>🚀 Будущее образования — уже здесь! Присоединяйся!</li>
                </ul>
                <button className={style['hero-btn']} onClick={() => navigate('/courses')}>НАЧАТЬ ОБУЧЕНИЕ</button>
            </div>
            <img src="/public/assets/hero-illustration.jpg" alt="" className={style['hero-illustration']} />
        </section>
    )
}

export default Hero;