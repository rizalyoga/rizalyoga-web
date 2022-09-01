import React from 'react';
import AboutPage from '../../components/pages/about/About';

// Seo
import { NextSeo } from 'next-seo';
import DataSeo from '../../data/seo.json';

const About = () => {
  const title = 'About';
  const description = `My professional background and personal values.`;

  return (
    <>
      <NextSeo
        title={`${title} — Achmad Rizal Yogaswara`}
        description={`${description}`}
        canonical={`${DataSeo.url}/about`}
      />
      <AboutPage />
    </>
  );
};

export default About;
