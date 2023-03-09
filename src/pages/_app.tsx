// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';
import Loader from '@/ui/components/Loader';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Component {...pageProps} />
    </Suspense>
  </Provider>
);

export default MyApp;
