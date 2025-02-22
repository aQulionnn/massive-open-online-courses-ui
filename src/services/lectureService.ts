import lectureData from '../data/lecture-data.json'
import moduleData from '../data/module-data.json'
import {LectureProps} from "../types/lecture";

export const getLecturesByModuleId = (moduleId: number): LectureProps[] => {
    return lectureData.filter(lecture => lecture.moduleId === moduleId)
}

export const getLectureCountByCourseId = (courseId: number): number => {
    const modules = moduleData.filter(module => module.courseId === courseId).map(module => module.id)
    return lectureData.filter(lecture => modules.includes(lecture.moduleId)).length;
}