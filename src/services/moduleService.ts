import { ModuleProps } from "../types/module";
import {useModuleDbStore} from "../stores/useDbStore.ts";

export const getModules = (): ModuleProps[] => {
    return useModuleDbStore.getState().modules;
}

export const getModulesByCourse = (courseId: number): ModuleProps[] => {
    const modules = useModuleDbStore.getState().modules;
    return modules.filter(module => module.courseId === courseId)
}

export const getModuleCountByCourseId = (courseId: number): number => {
    const modules = useModuleDbStore.getState().modules;
    return modules.filter(module => module.courseId === courseId).length
}

