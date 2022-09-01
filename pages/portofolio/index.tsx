import React from 'react';
import PortofolioPage from '../../components/pages/portofolio/Portofolio';

// Seo
import { NextSeo } from 'next-seo';
import DataSeo from '../../data/seo.json';

const Portofolio = () => {
  const title = 'Portofolio';
  const description = `I've been creating projects since I join bootcamp program as front end developer. I love to create new things, and I can't wait to see what I create next.`;

  return (
    <>
      <NextSeo
        title={`${title} — Achmad Rizal Yogaswara`}
        description={`${description}`}
        canonical={`${DataSeo.url}/portofolio`}
      />
      <PortofolioPage />
    </>
  );
};

export default Portofolio;
