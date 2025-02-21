import React from "react";
import style from './AdminLayout.module.css'
import Sidebar from "../Sidebar/Sidebar.tsx";

type Props = {
    children: React.ReactNode
}

const AdminLayout = ({children} : Props) => {
    return (
        <main className={style['layout']}>
            <Sidebar />
            {children}
        </main>
    )
}

export default AdminLayout;