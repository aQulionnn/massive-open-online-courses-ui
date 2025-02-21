import userData from '../../public/data/user-data.json'
import {UserProps} from "../types/user";

export const getUser = (email: string): UserProps | undefined => {
    return userData.find((user: UserProps) => user.email === email)
}