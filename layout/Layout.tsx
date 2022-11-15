import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './Layout.module.scss';

import SEO from '../data/seo.json';

interface ChildrenProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = '' }: ChildrenProps) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="./favicon_io/favicon-32x32.png"
          type="image/x-icon"
        />
        <link
          rel="preload"
          href="./assets/fonts/helvetica-neu.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="./assets/fonts/LaBelleAurore.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="./assets/fonts/CoolveticaRg-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>{`Rizalyoga ${title}`}</title>
        <meta name="twitter:image" content={SEO.ogimage}></meta>
      </Head>

      <main className={styles.mains}>
        <Sidebar />
        <div className={styles.children}>
          <span className={`${styles.tags} ${styles['top-tags']}`}>
            &lt;body&gt;
          </span>
          {children}
          <span className={`${styles.tags} ${styles['bottom-tags']}`}>
            &lt;body&gt;
            <br />
            <span className={styles['bottom-tags-html']}>&lt;html&gt;</span>
          </span>
        </div>
      </main>
    </>
  );
};

export default Layout;
