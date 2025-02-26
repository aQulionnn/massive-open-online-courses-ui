import {UniversityProps} from "../types/university";
import {useUniversityDbStore} from "../stores/useDbStore.ts";

export const getUniversities = (): UniversityProps[] => {
    return useUniversityDbStore.getState().universities
}

export const getUniversityById = (id: number): UniversityProps | undefined => {
    const universities = useUniversityDbStore.getState().universities
    return universities.find(university => university.id === id)
}

export const getUniversityByUserId = (userId: number): UniversityProps | undefined => {
    const universities = useUniversityDbStore.getState().universities
    return universities.find(university => university.userId === userId)
}