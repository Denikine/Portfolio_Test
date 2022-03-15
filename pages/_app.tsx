import type { AppProps } from "next/app";
import "../styles/globals.css";

import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <NextSeo
        title="Tugdual | Ingénieur Informatique"
        titleTemplate="Tugdual | Ingénieur Informatique"
        defaultTitle="Tugdual | Ingénieur Informatique"
        description="Hey! Je suis Tugdual, Ingénieur Informatique !"
        openGraph={{
          url: "https://www.Tugdual.tech/",
          title: "Tugdual | Ingénieur Informatique",
          description:
            "Hey! Je suis Tugdual, Ingénieur Informatique !",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "Tugdual | Ingénieur Informatique",
            },
          ],
        }}
        twitter={{
          handle: "@kr_Tugdual_",
          site: "@kr_Tugdual_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Ingénieur Informatique, Tugdual, Tugdualkr, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
