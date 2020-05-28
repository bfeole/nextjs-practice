// top-level component across all pages
// used similarly to keep state between pages

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
