import style from './UniversityList.module.css'
import universitiesData from '../../data/university-data.json'
import UniversityCard from "../UniversityCard/UniversityCard.tsx";

const UniversityList = () => {
    return (
        <div className={style['university-list']}>
            {universitiesData.map((university) => (
                <UniversityCard {...university} key={university.id} />
            ))}
        </div>
    );
};

export default UniversityList;