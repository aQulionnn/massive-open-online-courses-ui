import {create} from "zustand/react";
import {createJSONStorage, persist} from "zustand/middleware";
import {CourseProps} from "../types/course";

type CourseStore = {
    subscribedCourses: CourseProps[];
    subscribe: (course: CourseProps) => void,
    unsubscribe: (id: number) => void
}

export const useCourseStore = create(
    persist<CourseStore>(
        (set) => ({
            subscribedCourses: [],
            subscribe: (course) =>
                set((state) => ({
                    subscribedCourses: [...state.subscribedCourses, course]
                })),
            unsubscribe: (id) =>
                set((state) => ({
                    subscribedCourses: state.subscribedCourses.filter((course) => course.id !== id)
                }))
        }),
        {
            name: "subscribedCourses",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)