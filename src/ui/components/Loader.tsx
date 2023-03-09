import Lottie from 'lottie-react';
import React from 'react';

import loader from '@/public/assets/json/cart-loader.json';

const Loader = () => {
  return (
    <div className="grid w-full place-items-center gap-4 bg-black text-red-500">
      <div className="w-[90%] md:w-[60%]">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
