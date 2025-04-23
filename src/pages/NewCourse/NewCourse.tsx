import AdminLayout from "../../components/AdminLayout/AdminLayout.tsx";
import style from'./NewCourse.module.css'
import {useState} from "react";
import {CourseProps} from "../../types/course";
import {addCourse, getCourses} from "../../services/courseService.ts";

const NewCourse = () => {

    const [course, setCourse] = useState<Omit<CourseProps, 'id'>>({
        title: '',
        summary: '',
        description: '',
        subject: '',
        thumbnail: '',
        universityId: 1
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCourse({...course, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const courses = getCourses()
        const newId = courses.length + 1
        addCourse({...course, id: newId})
        setCourse({ title: '', summary: '', description: '', subject: '', thumbnail: '', universityId: 1 })
    }

    return (
        <AdminLayout>
            <div className={style['new-course']}>
                <h2>Новый курс</h2>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input name="title" value={course.title} onChange={handleChange} placeholder="Title" />
                    <input name="subject" value={course.subject} onChange={handleChange} placeholder="Subject" />
                    <textarea name="summary" value={course.summary} onChange={handleChange} placeholder="Summary" />
                    <textarea name="description" value={course.description} onChange={handleChange} placeholder="Description" />
                    <input name="thumbnail" value={course.thumbnail} onChange={handleChange} placeholder="Thumbnail URL" />
                    <button type="submit">Create</button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default NewCourse;