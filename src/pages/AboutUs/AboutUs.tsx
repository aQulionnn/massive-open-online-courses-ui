import style from './AboutUs.module.css'
import Layout from "../../components/Layout/Layout.tsx";

const AboutUs = () => {
    return (
        <Layout>
            <div className={style['main']}>
                <article className={style['introduction']}>
                    <h2 className={style['introduction-title']}>О нас</h2>
                    <p className={style['introduction-description']}>Наш проект — это современная MOOC ( Massive Open Online Courses ) платформа,
                        объединяющая университеты Казахстана и студентов, желающих получить качественное
                        онлайн-образование. Мы стремимся сделать знания доступными для всех, независимо от места
                        проживания и социального статуса.</p>
                </article>
                <section className={style['details']}>
                    <article className={style['article']}>
                    <span className={style['goal-icon']}>
                        <img src="/icons/target-arrow.png" alt=""/>
                    </span>
                        <h1 className={style['article-title']}>Наша цель</h1>
                        <p className={style['article-description']}>Создать крупнейшую образовательную платформу в
                            Казахстане, где университеты смогут делиться своими лучшими курсами, а студенты — учиться в
                            удобном формате. Мы верим, что образование должно быть доступным, качественным и
                            соответствовать современным требованиям.</p>
                    </article>
                    <article className={style['article']}>
                    <span className={style['mission-icon']}>
                        <img src="/icons/rocket-icon.png" alt=""/>
                    </span>
                        <h1 className={style['article-title']}>Наша миссия</h1>
                        <p className={style['article-description']}>Мы помогаем вузам расширить охват аудитории, а
                            студентам — получать знания от ведущих преподавателей страны. Наша миссия — цифровизация и
                            популяризация казахстанского образования через инновационные технологии.</p>
                    </article>
                    <article className={style['article']}>
                    <span className={style['offers-icon']}>
                        <img src="/icons/books-icon.png" alt=""/>
                    </span>
                        <h3 className={style['article-title']}>Что мы предлагаем?</h3>
                        <ul className={style['article-description']}>
                            <li>Курсы от лучших университетов – доступ к программам от ведущих вузов страны.</li>
                            <li>Гибкий формат обучения – возможность учиться в любое время и из любой точки мира.</li>
                            <li>Современный контент – актуальные учебные материалы, адаптированные к требованиям рынка
                                труда.
                            </li>
                        </ul>
                    </article>
                    <article className={style['article']}>
                    <span className={style['audience-icon']}>
                        <img src="/icons/mortarboard-icon.png" alt=""/>
                    </span>
                        <h3 className={style['article-title']}>Для кого наш проект?</h3>
                        <ul className={style['article-description']}>
                            <li>Для студентов – расширение знаний и навыков без привязки к месту.</li>
                            <li>Для вузов – возможность масштабировать образование и привлечь новых студентов.</li>
                            <li>Для профессионалов – повышение квалификации и получение новых компетенций.</li>
                        </ul>
                    </article>
                </section>
                <article className={style['conclusion']}>
                    <h3 className={style['conclusion-title']}>Почему именно мы?</h3>
                    <p className={style['conclusion-description']}>Мы создаём удобную платформу с качественными курсами, продуманной системой обучения и поддержкой
                        пользователей. Наша цель — развитие интеллектуального потенциала Казахстана через доступное
                        онлайн-образование.</p>
                </article>
            </div>
        </Layout>
    );
};

export default AboutUs;