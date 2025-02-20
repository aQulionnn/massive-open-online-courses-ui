import style from './SubscribedCourseCard.module.css'
import {useNavigate} from "react-router-dom";

const SubscribedCourseCard = () => {
    const navigate = useNavigate()

    return (
        <div className={style['course']}>
            <section className={style['top-section']}>
                <h3 className={style['name']}>Основы компьютерных наук</h3>
                <h3 className={style['university']}>НУ</h3>
            </section>
            <section className={style['middle-section']}>
                <span className={style['progress-bar']}></span>
                <span className={style['progress']}>50%</span>
            </section>
            <span className={style['lecture-count']}>25 Лекций</span>
            <button className={style['continue-btn']} onClick={() => navigate('/subscribed-courses')}>Продолжить</button>
        </div>
    );
};

export default SubscribedCourseCard;