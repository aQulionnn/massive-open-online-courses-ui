import React from 'react';
import style from './Layout.module.css'
import Header from "../Header/Header.tsx";

type Props = {
    children: React.ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <main className={style['layout']}>
            <Header />
            {children}
        </main>
    );
};

export default Layout;