import '../styles/globals.css';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Meta component will be added in a later batch for SEO and page titles */}
      {/* e.g. <Meta title="hueneu | Where stories find their aesthetic." /> */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
