import moduleData from '../data/module-data.json'
import { ModuleProps } from "../types/module";

export const getModules = (): ModuleProps[] => {
    return moduleData
}

export const getModulesByCourse = (courseId: number): ModuleProps[] => {
    return moduleData.filter(module => module.courseId === courseId)
}

export const getModuleCountByCourseId = (courseId: number): number => {
    const modules = moduleData.filter(module => module.courseId === courseId)
    return modules.length
}

