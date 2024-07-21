import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters';
import styles from './Home.module.scss';

const LeftContent = () => {
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
    '',
  ];

  useEffect((): any => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>a</span>
        <span className={`${letterClass} _13`}>l</span>
        <span className={`${letterClass} _14`}>l</span>
        <span className={`${letterClass} _15`}>o,</span>
        <br />
        <span className={`${letterClass} _16`}>I'</span>
        <span className={`${letterClass} _17`}>m,</span>
        <AnimateLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={18}
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
        <button className={styles['flat-button']} name="contact-btn">
          CONTACT ME
        </button>
      </Link>
    </>
  );
};

export default LeftContent;
