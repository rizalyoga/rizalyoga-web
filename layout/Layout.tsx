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
          <span className={`${styles.tags} ${styles['top-tags']}`}>&lt;body&gt;</span>
            {children}
          <span className={`${styles.tags} ${styles['bottom-tags']}`}>&lt;body&gt;
            <br />
            <span className={styles['bottom-tags-html']}>&lt;html&gt;</span>
          </span>
        </div>
    </main>
  )
}

export default Layout