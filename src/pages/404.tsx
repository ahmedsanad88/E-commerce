import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import React from 'react';

import error from '@/public/assets/json/404.json';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="grid min-h-screen w-full place-items-center gap-4 bg-black text-red-500">
      <div className="w-[90%] md:w-[60%]">
        <Lottie animationData={error} loop={true} />
      </div>
      <button
        className="rounded-md border-2 border-red-500 px-4 py-2 text-red-500"
        onClick={() => router.replace('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
