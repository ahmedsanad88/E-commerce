import type { ReactNode } from 'react';

import Alert from '@/ui/components/Alert';
import Navbar from '@/ui/components/Navbar';
import Footer from '@/ui/sections/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex w-full justify-center bg-white antialiased">
    {props.meta}
    <div className="w-full max-w-[1920px]">
      <Navbar />
      <Alert />
      {/* max-w-[95%] */}
      <div className="mx-auto px-5">
        <main className="py-5 text-xl">{props.children}</main>
      </div>
      <Footer />
    </div>
  </div>
);

export { Main };
