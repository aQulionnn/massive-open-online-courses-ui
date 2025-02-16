import moduleData from '../../public/data/module-data.json'
import { ModuleProps } from "../types/module";

export const getModules = (): ModuleProps[] => {
    return moduleData
}

export const getModulesByCourse =  (courseId: number): ModuleProps[] => {
    return moduleData.filter((module: ModuleProps) => module.courseId === courseId)
}

