import React, { useState, useEffect } from 'react'
import Layout from '../../../layout/Layout'
import styles from "./About.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimateLetters from '../../animatedLetters/AnimateLetters'
import Loader from 'react-loaders'
import {
  faGithub,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'


const AboutPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <Layout title=' | About'>
      <div className={`container ${styles['about-page']}`}>
      <div className={styles["text-zone"]}>
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            <br />
          </h1>

          <div className={styles.desc}>
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic
              and tech-obsessed !!!
            </p>
          </div>
        </div>

        <div className={styles["stage-cube-cont"]}>
          <div className={styles.cubespinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className={styles.face2}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className={styles.face3}>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className={styles.face4}>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className={styles.face5}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className={styles.face6}>
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' active/>
    </Layout>
  )
}

export default AboutPage