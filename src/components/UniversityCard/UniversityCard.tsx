import style from './UniversityCard.module.css'
import {UniversityProps} from "../../types/university";

const UniversityCard = (props: UniversityProps) => {
    return (
        <div className={style['university']}>
            <h3 className={style['name']}>{props.name}</h3>
            <button className={style['university-btn']}>КОЛИЧЕСТВО КУРСОВ: <span className={style['courses']}>{props.courseCount}</span></button>
        </div>
    );
};

export default UniversityCard;