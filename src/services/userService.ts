import {UserProps} from "../types/user";
import {useUserDbStore} from "../stores/useDbStore.ts";

export const getUserByEmail = (email: string): UserProps | undefined => {
    const users = useUserDbStore.getState().users
    return users.find(user => user.email === email)
}