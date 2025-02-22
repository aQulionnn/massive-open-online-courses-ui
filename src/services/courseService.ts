import courseData from '../data/course-data.json'
import {CourseProps} from "../types/course";

export const getCourses = (): CourseProps[] => {
    return courseData
}

export const getCourseById = (id: number): CourseProps | undefined => {
    return courseData.find(course => course.id === id)
}

export const getCoursesByUniversityId = (universityId: number): CourseProps[] => {
    return courseData.filter(course => course.universityId === universityId)
}

export const getCourseCountByUniversityId = (universityId: number): number => {
    const courses = courseData.filter(course => course.universityId === universityId)
    return courses.length
}