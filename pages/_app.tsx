import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import DataSeo from '../data/seo.json';
import { cardOpenGraph, cardTwitter } from '../lib/seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={DataSeo.title}
        description={DataSeo.description}
        canonical={DataSeo.url}
        openGraph={cardOpenGraph}
        twitter={cardTwitter}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
