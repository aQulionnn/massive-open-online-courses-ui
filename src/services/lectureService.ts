import {LectureProps} from "../types/lecture";
import {useLectureDbStore, useModuleDbStore} from "../stores/useDbStore.ts";

export const getLecturesByModuleId = (moduleId: number): LectureProps[] => {
    const lectures = useLectureDbStore.getState().lectures
    return lectures.filter(lecture => lecture.moduleId === moduleId)
}

export const getLectureCountByCourseId = (courseId: number): number => {
    const lectures = useLectureDbStore.getState().lectures
    const moduleData = useModuleDbStore.getState().modules
    const modules = moduleData.filter(module => module.courseId === courseId).map(module => module.id)
    return lectures.filter(lecture => modules.includes(lecture.moduleId)).length;
}