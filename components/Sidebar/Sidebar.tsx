import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "./Sidebar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

// image
import LogoS from "../../public/assets/images/logo-s.png"
import LogoSubtitle from "../../public/assets/images/logo_sub.png"
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const router = useRouter()

  const activePage = () => {
    if (router.pathname === '/') {
        return styles.active;
    } else if (router.pathname === '/about') {
        return styles.active;
    } else if (router.pathname === '/contact') {
        return styles.active;
    }
  }

  useEffect(
    () => {
        activePage()
  }, [router.pathname])
  

  return (
       <div className={styles['nav-bar']}>
           <div className={styles.logos}>
                <Link href="/">
                  <div className={styles.logo}>
                       <Image 
                        className={styles.images} 
                        src={LogoS} 
                        alt='logo' 
                        width="40" 
                        height="80"
                       />
                  </div>
                </Link>
                <Link href="/">
                  <div className={styles.logo}>
                       <Image 
                        className={styles['sub-logo']} 
                        src={LogoSubtitle} 
                        alt='logo-sub' 
                        width="60" 
                        height="10"
                       />
                  </div>
                </Link>
           </div>

           <div className={styles.navigations}>
               <Link href='/'>
                    <FontAwesomeIcon 
                        icon={faHome} 
                        className={`${styles['nav-home']} ${activePage()}`} 
                        color={router.pathname="/" ? "ffd700" : "#4d4d4e"}
                    />
               </Link>
               <Link href='/about'>
                    <FontAwesomeIcon 
                        icon={faUser} 
                        className={`${styles['nav-about']} ${activePage()}`} 
                        color={router.pathname="/about" ? "ffd700": "#4d4d4e"}
                    />
               </Link>
               <Link href='/contact'>
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className={styles[`nav-contact`]} 
                        color={router.pathname="/contact" ? 'ffd700' : '4d4d4e'} 
                    />
               </Link>
           </div>

           <div className={styles.sosmed}>
               <ul>
                   <li>
                       <a href="https://github.com/rizalyoga" target='_blank' rel='noreferer'>
                           <FontAwesomeIcon className={styles['sosmed-icon']} icon={faGithub} color='fff' />
                       </a>
                   </li>
                   <li>
                       <a href="https://linkedin.com/in/rizalyoga/" target='_blank' rel='noreferer'>
                           <FontAwesomeIcon className={styles['sosmed-icon']} icon={faLinkedin} color='fff' />
                       </a>
                   </li>
                   <li>
                       <a href="https://www.facebook.com/achmadrizalyogaswara" target='_blank' rel='noreferer'>
                           <FontAwesomeIcon className={styles['sosmed-icon']} icon={faFacebook} color='fff' />
                       </a>
                   </li>

               </ul>
           </div>
       </div>
  )
}

export default Sidebar