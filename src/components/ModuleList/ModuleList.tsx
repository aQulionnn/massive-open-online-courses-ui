import {useEffect, useState} from 'react';
import {ModuleProps} from "../../types/module";
import { getModulesByCourse} from "../../services/moduleService.ts";
import Module from "../Module/Module.tsx";
import style from'./ModuleList.module.css'
import {useAuthStore} from "../../stores/useAuthStore.ts";
import {useModuleDbStore} from "../../stores/useDbStore.ts";

type Props = {
    courseId: number;
}

const ModuleList = (props: Props) => {
    const [newModuleName, setNewModuleName] = useState<string>("")
    const [newModuleSummary, setNewModuleSummary] = useState<string>("")

    const [modules, setModules] = useState<ModuleProps[]>([])

    const user = useAuthStore((state) => state.user)
    const moduleDb = useModuleDbStore()

    useEffect(() => {
        setModules(getModulesByCourse(props.courseId))
    }, [])

    function addNewModule() {

        const newModule: ModuleProps = {
            id: moduleDb.modules.length + 1,
            name: newModuleName,
            summary: newModuleSummary,
            courseId: props.courseId,
        }

        moduleDb.addModule(newModule)

        setNewModuleName("")
        setNewModuleSummary("")
    }

    return (
        <div className={style['module-list']}>
            {modules.map((module, index) => (
                <Module {...module} key={module.id} index={index + 1} />
            ))}
            {user?.role == 'university_admin' &&
                <>
                    <div className={style['form']}>
                        <input
                            type="text"
                            placeholder="Название модуля"
                            onChange={(e) => setNewModuleName(e.target.value)}
                            value={newModuleName}
                        />
                        <textarea
                            placeholder="Описание"
                            onChange={(e) => setNewModuleSummary(e.target.value)}
                            value={newModuleSummary}
                        />
                    </div>
                    <div className={style['new-module']}>
                        <h3 className={style['add-module']} onClick={addNewModule}>Новый модуль</h3>
                    </div>
                </>
            }
        </div>
    );
};

export default ModuleList;