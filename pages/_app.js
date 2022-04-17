import React from 'react';

import '../styles/globals.scss';
import {Layout} from '../components';
import NextNProgress from 'nextjs-progressbar';
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    return (
        <>
            <NextNProgress height={3} color="#F59E0B"/>
            <Layout>
                <Component {...pageProps} key={router.asPath} />
            </Layout>
        </>
    );
}

export default MyApp;