import {useEffect, useState} from 'react';
import {ModuleProps} from "../../types/module";
import { getModulesByCourse} from "../../services/moduleService.ts";
import Module from "../Module/Module.tsx";
import style from'./ModuleList.module.css'

type Props = {
    courseId: number;
}

const ModuleList = (props: Props) => {
    const [modules, setModules] = useState<ModuleProps[]>([])

    useEffect(() => {
        setModules(getModulesByCourse(props.courseId))
    }, [])

    return (
        <div className={style['module-list']}>
            {modules.map((module, index) => (
                <Module {...module} key={module.id} index={index + 1} />
            ))}
        </div>
    );
};

export default ModuleList;