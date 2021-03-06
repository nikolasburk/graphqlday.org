import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import lighten from 'polished/lib/color/lighten'

import { specialRed } from 'utils/colors'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "proxima-nova", sans-serif;
    font-size: 18px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${lighten(0.2, specialRed)};
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <link rel="icon" type="image/png" href="/static/favicon.png" />
          {/* <link
            rel="apple-touch-icon"
            type="image/png"
            href="/static/icons/graphql-eu-icon-180x180.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#DB3F74" />
          */}
          <meta
            name="keywords"
            content="GraphQL,conference,Canada,Toronto,2019"
          />
          <meta
            name="description"
            content="GraphQL Day Toronto - Toronto, February 28th, 2018 - Hear from thought leaders in the GraphQL space including speakers from
            GitHub, Shopify, Amazon, TELUS, and more!"
          />

          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://graphqlday.org/" />
          <meta
            property="og:description"
            content="GraphQL Day Toronto - Toronto, February 28th, 2018 - Hear from thought leaders in the GraphQL space including speakers from
            GitHub, Shopify, Amazon, TELUS, and more!"
          />
          <meta
            property="og:image:url"
            content="https://www.graphqlday.org/static/GrapQL-Toronto-2019-banner.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ok_grow" />
          <meta name="twitter:creator" content="@ok_grow" />
          <meta
            name="twitter:description"
            content="GraphQL Day Toronto - Toronto, February 28th, 2018 - Hear from thought leaders in the GraphQL space including speakers from
            GitHub, Shopify, Amazon, TELUS, and more!"
          />
          <meta
            name="twitter:image"
            content="https://www.graphqlday.org/static/GrapQL-Toronto-2019-banner.jpg"
          />

          <link rel="canonical" href="https://graphqlday.org" />

          <link rel="stylesheet" href="https://use.typekit.net/sez2ksz.css" />

          {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-28443514-15"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-28443514-15');`,
            }}
          />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `adroll_adv_id = "CNEQ6KVS2ZCBXOEMY3LARP";
          adroll_pix_id = "Q33SPCGKXBHV5IKK3N7VOV";
      
          (function () {
              var _onload = function(){
                  if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
                  if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
                  var scr = document.createElement("script");
                  var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
                  scr.setAttribute('async', 'true');
                  scr.type = "text/javascript";
                  scr.src = host + "/j/roundtrip.js";
                  ((document.getElementsByTagName('head') || [null])[0] ||
                      document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
              };
              if (window.addEventListener) {window.addEventListener('load', _onload, false);}
              else {window.attachEvent('onload', _onload)}
          }());`,
            }}
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
