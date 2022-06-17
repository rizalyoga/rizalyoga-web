import React from 'react'
import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from "./Layout.module.scss"

interface ChildrenProps {
    children : React.ReactNode;
    title? : string;
}

const Layout = ({children, title = ""} : ChildrenProps) => {
  return (
    <>
    <Head>
      <title>{`Rizalyoga ${title}`}</title>
    </Head>
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
    </>
  )
}

export default Layout