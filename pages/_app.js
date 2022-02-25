import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={6} color="#F59E0B" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;