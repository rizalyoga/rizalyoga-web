import DataSeo from '../data/seo.json';

export const cardOpenGraph = {
  url: DataSeo.url,
  title: DataSeo.title,
  description: DataSeo.description,
  images: [
    {
      url: DataSeo.ogimage,
      width: 1280,
      height: 720,
      alt: 'Social',
      type: 'image/png',
    },
  ],
  site_name: 'Achmad Rizal Yogaswaara - Front End Developer',
};

export const cardTwitter = {
  handle: '@_rizalyoga_',
  site: '@_rizalyoga_',
  cardType: 'summary_large_image',
};
