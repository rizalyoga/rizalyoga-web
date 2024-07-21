import React from 'react';
import CertificatesPage from '../../components/pages/certificates/Certificates';

import { NextSeo } from 'next-seo';
import DataSeo from '../../data/seo.json';

const Certificates = () => {
  const title = 'Certificate';
  const description = `My professional certificate.`;
  return (
    <>
      <NextSeo
        title={`${title} — Achmad Rizal Yogaswara`}
        description={`${description}`}
        canonical={`${DataSeo.url}/certificates`}
      />
      <CertificatesPage />
    </>
  );
};

export default Certificates;
