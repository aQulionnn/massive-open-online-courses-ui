import universityData from '../data/university-data.json'
import {UniversityProps} from "../types/university";

export const getUniversities = (): UniversityProps[] => {
    return universityData
}

export const getUniversityById = (id: number): UniversityProps | undefined => {
    return universityData.find(university => university.id === id)
}