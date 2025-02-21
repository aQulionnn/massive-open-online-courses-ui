import universityData from './university-data.json'
import {UniversityProps} from "../types/university";

export const getUniversityById = (id: number): UniversityProps | undefined => {
    return universityData[id + 1]
}