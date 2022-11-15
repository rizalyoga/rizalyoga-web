import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/lottie_programmer.json';
import styles from './ProgrammerLottie.module.scss';

const Programmer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles['lottie-container']}>
      <Lottie options={defaultOptions} height={700} width={600} />;
    </div>
  );
};

export default Programmer;
