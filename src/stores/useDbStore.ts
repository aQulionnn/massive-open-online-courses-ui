import {create} from "zustand/react";
import {createJSONStorage, persist} from "zustand/middleware";
import {UserProps} from "../types/user";
import {UniversityProps} from "../types/university";
import {CourseProps} from "../types/course";
import {ModuleProps} from "../types/module";
import {LectureProps} from "../types/lecture";
import userData from '../data/user-data.json'
import universityData from '../data/university-data.json'
import courseData from '../data/course-data.json'
import moduleData from '../data/module-data.json'
import lectureData from '../data/lecture-data.json'

type UserStore = {
    users: UserProps[]
    initUsers: () => void
    addUser: (user: UserProps) => void
}

export const useUserDbStore = create(
    persist<UserStore>(
        (set) => ({
            users: [],
            initUsers: () => set({ users: userData }),
            addUser: (user) =>
                set((state) => ({
                    users: [...state.users, user],
                }))
        }),
        {
            name: "userDb",
            storage:  createJSONStorage(() => sessionStorage)
        }
    )
)

type UniversityStore = {
    universities: UniversityProps[]
    initUniversities: () => void
    addUniversity: (university: UniversityProps) => void
}

export const useUniversityDbStore = create(
    persist<UniversityStore>(
        (set) => ({
            universities: [],
            initUniversities: () => set({ universities: universityData }),
            addUniversity: (university) =>
                set((state) => ({
                    universities: [...state.universities, university],
                }))
        }),
        {
            name: "universityDb",
            storage:  createJSONStorage(() => sessionStorage)
        }
    )
)

type CourseStore = {
    courses: CourseProps[]
    initCourses: () => void
    addCourse: (course: CourseProps) => void
}

export const useCourseDbStore = create(
    persist<CourseStore>(
        (set) => ({
            courses: [],
            initCourses: () => set({ courses: courseData }),
            addCourse: (course) =>
                set((state) => ({
                    courses: [...state.courses, course],
                }))
        }),
        {
            name: "courseDb",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

type ModuleStore = {
    modules: ModuleProps[]
    initModules: () => void
    addModule: (module: ModuleProps) => void
}

export const useModuleDbStore = create(
    persist<ModuleStore>(
        (set) => ({
            modules: [],
            initModules: () => set({ modules: moduleData }),
            addModule: (module) =>
                set((state) => ({
                    modules: [...state.modules, module],
                }))
        }),
        {
            name: "moduleDb",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

type LectureStore = {
    lectures: LectureProps[]
    initLectures: () => void
    addLecture: (lecture: LectureProps) => void
}

export const useLectureDbStore = create(
    persist<LectureStore>(
        (set) => ({
            lectures: [],
            initLectures: () => set({ lectures: lectureData }),
            addLecture: (lecture) =>
                set((state) => ({
                    lectures: [...state.lectures, lecture],
                }))
        }),
        {
            name: "lectureDb",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)



