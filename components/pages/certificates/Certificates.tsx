import React, { useEffect, useState } from 'react';
import Layout from '../../../layout/Layout';
import styles from './Certificates.module.scss';
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters';
import CertificateData from '../../../data/certificate.json';

import Image from 'next/image';
import Loader from 'react-loaders';

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
          {CertificateData?.certificates?.map(
            (certificate) =>
              certificate?.link && (
                <div
                  key={certificate.id}
                  title={`${certificate.organizer} - ${certificate.theme}`}
                  className={styles['certificate-card']}
                >
                  <a href={certificate?.link} target="_blank">
                    <Image
                      src={`https://drive.google.com/thumbnail?id=${certificate.id}`}
                      width={300}
                      height={180}
                      alt="thumbnail"
                      className={styles['thumbnail-img']}
                    />
                    <p
                      style={{
                        color: 'white',
                        fontSize: '16px',
                        fontFamily: 'Helvetica Neue ,sans-serif',
                        margin: 0,
                        padding: 0,
                        fontWeight: '600',
                      }}
                    >
                      {certificate.theme}
                    </p>
                  </a>
                </div>
              )
          )}
        </div>
      </div>
      <Loader type="ball-scale-multiple" active />
    </Layout>
  );
};

export default CertificatesPage;
