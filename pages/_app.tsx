/* eslint-disable prettier/prettier */
import "styles/index.scss";

import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
// import { DefaultSeo } from "next-seo";
// eslint-disable-next-line prettier/prettier
import { ThemeProvider } from 'next-themes';

// import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {/* <DefaultSeo {...SEO} /> */}
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
