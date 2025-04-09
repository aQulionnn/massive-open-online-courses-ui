import {CourseProps} from "../types/course";
import {useCourseDbStore} from "../stores/useDbStore.ts";

export const getCourses = (): CourseProps[] => {
    return useCourseDbStore.getState().courses
}

export const getCourseById = (id: number): CourseProps | undefined => {
    const courses = useCourseDbStore.getState().courses
    return courses.find(course => course.id === id)
}

export const getCoursesByUniversityId = (universityId: number): CourseProps[] => {
    const courses = useCourseDbStore.getState().courses
    return courses.filter(course => course.universityId === universityId)
}

export const getCourseCountByUniversityId = (universityId: number): number => {
    const courses = useCourseDbStore.getState().courses
    return courses.filter(course => course.universityId === universityId).length;
}

export const addCourse = (course: CourseProps) => useCourseDbStore.getState().addCourse(course)