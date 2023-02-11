/* eslint-disable import/no-extraneous-dependencies */
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
