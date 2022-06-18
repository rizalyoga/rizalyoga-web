import React, {useState, useEffect} from 'react'
import Layout from '../../../layout/Layout'
import styles from "./Portofolio.module.scss"

// Component
import Loader from 'react-loaders'
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters'

const PortofolioPage = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const nameArray = ['M','y',' ','P','r','o','j','e','c','t'];

  useEffect(():any => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <Layout>
      <div className={`container ${styles['portofolio-page']}`}>
      <div className={styles["text-zone"]}>
          <h1>
          <AnimateLetters 
            letterClass={letterClass} 
            strArray={nameArray}
            idx={15}
          />
          
          <br />
          </h1>
        </div>
      </div>
      <Loader type='ball-scale-multiple' active/>
    </Layout>
  )
}

export default PortofolioPage