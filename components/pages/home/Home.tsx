import React,{useState,useEffect} from 'react'
import styles from "./Home.module.scss"
import Link from 'next/link'
import Layout from '../../../layout/Layout'

import AnimateLetters from '../../animatedLetters/AnimateLetters'

const HomePage = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const nameArray = [' ','R','i','z','a','l','y','o','g','a'];
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

  return (
    <Layout title='| Home'>
      <div className={`container ${styles['home-page']}`}>
        <div className={styles["text-zone"]}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m,</span>
          <AnimateLetters 
            letterClass={letterClass} 
            strArray={nameArray}
            idx={15}
          />
          
          <br />

          <AnimateLetters 
            letterClass={letterClass} 
            strArray={jobArray}
            idx={22}
          />
          </h1>
          <h2>Frontend Developer</h2>
          <Link href="/contact">
              <p className={styles['flat-button']}>CONTACT ME</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage