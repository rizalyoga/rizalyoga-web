import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import styles from "./Layout.module.scss"

interface ChildrenProps {
    children: React.ReactNode;
}

const Layout = ({children} : ChildrenProps) => {
  return (
    <main className={styles.mains}>
        <Sidebar />
        <div className={styles.children}>
            {children}
        </div>
    </main>
  )
}

export default Layout