import React from 'react';
import styles from './Home.module.scss';

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

// Component
import Layout from '../../../layout/Layout';
import LeftContent from './LeftContent';
import Loader from 'react-loaders';
import Programmer from '../../animations/lottieAnimations/Programmer';

const HomePage = () => {
  return (
    <Layout>
      <div className={`container ${styles['home-page']}`}>
        <MouseParallaxContainer
          className={styles.parallax}
          globalFactorX={0.3}
          globalFactorY={0.6}
          resetOnLeave
        >
          <div className={styles['text-zone']}>
            <LeftContent />
          </div>

          <div className={styles['image-zone']}>
            <MouseParallaxChild factorX={0.6} factorY={0.1}>
              <Programmer />
            </MouseParallaxChild>
          </div>
        </MouseParallaxContainer>
      </div>
      <Loader type="ball-scale-multiple" active />
    </Layout>
  );
};

export default HomePage;
