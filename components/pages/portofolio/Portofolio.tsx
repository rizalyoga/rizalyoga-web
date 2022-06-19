import React, {useState, useEffect} from 'react'
import Layout from '../../../layout/Layout'
import styles from "./Portofolio.module.scss"

// Component
import Loader from 'react-loaders'
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters'
import Card from "../../cards/Card"

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

          <div className={styles.desc}>
            <p style={{'animation': "pulse 2s"}}>
              Hello 👋, These are some of the projects I completed in the past.
            </p>
            <p style={{'animation': "pulse 2s"}}>
              Most of the technologies that I use in my project work are  
              <span> HTML, CSS3, SASS, Javascript, Bootstrap, Tailwind CSS, ReactJS, 
              NextJS </span> and <span> Github</span>. 
            </p>
          </div>
          
          <br />
          </h1>
        </div>
        <div className={styles['content-zone']}>
            <div className={styles['card-container']}>
                <Card/>
            </div>
        </div>
      </div>
      
      <Loader type='ball-scale-multiple' active/>
    </Layout>
  )
}

export default PortofolioPage