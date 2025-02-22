import userData from '../data/user-data.json'
import {UserProps} from "../types/user";

export const getUserByEmail = (email: string): UserProps | undefined => {
    return userData.find(user => user.email === email)
}