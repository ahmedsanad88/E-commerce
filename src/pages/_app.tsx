/* eslint-disable import/no-extraneous-dependencies */
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
