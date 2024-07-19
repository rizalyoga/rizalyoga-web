import React, { useEffect, useState } from 'react';
import Layout from '../../../layout/Layout';
import styles from './Certificates.module.scss';
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters';
import PortofolioData from '../../../data/portofolio.json';

import Image from 'next/image';

const CertificatesPage = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <Layout title=" | Certificate">
      <div className={`container ${styles['certificate-page']}`}>
        <div className={`${styles['text-zone']}`}>
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                'C',
                'e',
                'r',
                't',
                'i',
                'f ',
                'i',
                'c',
                'a',
                't',
                'e',
                's',
              ]}
              idx={15}
            />
            <br />
          </h1>
        </div>
        <div className={`${styles['thumbnail-zone']}`}>
          {PortofolioData?.portfolio?.map(
            (image) =>
              image?.cover && (
                <Image
                  src={image?.cover}
                  width={340}
                  height={180}
                  alt="thumbnail"
                  key={image.title}
                  className={styles['thumbnail-img']}
                />
              )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CertificatesPage;
