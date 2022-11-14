import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../public/logo.png';

// Component
import Layout from '../../../layout/Layout';
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters';
import Loader from 'react-loaders';
import Programmer from '../../animations/lottieAnimations/Programmer';

const HomePage = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const nameArray = [' ', 'R', 'i', 'z', 'a', 'l', 'y', 'o', 'g', 'a'];
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
    '',
  ];

  useEffect((): any => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <Layout>
      <div className={`container ${styles['home-page']}`}>
        <div className={styles['text-zone']}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m,</span>
            <AnimateLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />

            <br />

            <AnimateLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
            <br />
          </h1>
          <h2>Frontend Web Developer</h2>
          <Link href="/contact">
            <p className={styles['flat-button']}>CONTACT ME</p>
          </Link>
        </div>
        <div className={styles['image-zone']}>
          <Programmer />
        </div>
      </div>
      <Loader type="ball-scale-multiple" active />
    </Layout>
  );
};

export default HomePage;
