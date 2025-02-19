import {create} from "zustand/react";
import {createJSONStorage, persist} from "zustand/middleware";
import {UserProps} from "../types/user";

type AuthStore = {
    user: UserProps | null;
    signUp: (user: UserProps) => void
    signIn: (user: UserProps) => void
    signOut: () => void
}

export const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            user: null,
            signUp: (user) => set({user}),
            signIn: (user) => set({user}),
            signOut: () => set(() => ({user: null}))
        }),
        {
            name: "user",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)
