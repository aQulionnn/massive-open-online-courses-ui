import { ModuleProps } from "../../types/module";
import style from './Module.module.css'

type Props = {
    index: number
} & ModuleProps

const Module = (props: Props) => {
    return (
        <div className={style['module']}>
            <h2 className={style['name']}>Модуль {props.index}. {props.name}</h2>
            <p className={style['description']}>{props.description}</p>
        </div>
    );
};

export default Module