import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopesBulk,
  faHomeUser,
  faUserAstronaut,
  faPager,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

// Image
import LogoS from '../../public/logo.png';

const Sidebar = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className={styles['nav-bar']}>
      <div className={styles.logos}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              className={styles.images}
              src={LogoS}
              alt="logo"
              width="40"
              height="40"
            />
          </div>
        </Link>
      </div>

      <div className={styles.navigations}>
        <Link href="/">
          <a>
            <FontAwesomeIcon
              icon={faHomeUser}
              className={styles['nav-home']}
              color={currentPage === '/' ? '#FCD500' : '#8a8a8a'}
              title="Home"
            />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <FontAwesomeIcon
              icon={faUserAstronaut}
              className={styles['nav-about']}
              color={currentPage === '/about' ? '#FCD500' : '#8a8a8a'}
              title="Profile"
            />
          </a>
        </Link>
        <Link href="/portofolio">
          <a>
            <FontAwesomeIcon
              icon={faReact}
              className={styles[`nav-portofolio`]}
              color={currentPage === '/portofolio' ? '#FCD500' : '#8a8a8a'}
              title="Projects"
            />
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <FontAwesomeIcon
              icon={faEnvelopesBulk}
              className={styles[`nav-contact`]}
              color={currentPage === '/contact' ? '#FCD500' : '#8a8a8a'}
              title="Contact"
            />
          </a>
        </Link>
        <Link href="/certificates">
          <a>
            <FontAwesomeIcon
              icon={faPager}
              className={styles[`nav-certificates`]}
              color={currentPage === '/certificates' ? '#FCD500' : '#8a8a8a'}
              title="Certificates"
            />
          </a>
        </Link>
      </div>

      <div className={styles.sosmed}>
        <ul>
          <li>
            <a
              href="https://github.com/rizalyoga"
              target="_blank"
              rel="noreferer"
            >
              <FontAwesomeIcon
                className={styles['sosmed-icon']}
                icon={faGithub}
                color="#8a8a8a"
                title="Github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rizalyoga/"
              target="_blank"
              rel="noreferer"
            >
              <FontAwesomeIcon
                className={styles['sosmed-icon']}
                icon={faLinkedin}
                color="#8a8a8a"
                title="Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/achmadrizalyogaswara"
              target="_blank"
              rel="noreferer"
            >
              <FontAwesomeIcon
                className={styles['sosmed-icon']}
                icon={faFacebook}
                color="#8a8a8a"
                title="Facebook"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
