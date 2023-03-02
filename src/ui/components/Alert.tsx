import Link from 'next/link';
import React from 'react';

const Alert = () => {
  return (
    <div className="flex min-h-[50px] w-full items-center justify-center bg-gray-200 px-2 py-4 text-center text-black">
      <p>
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status{' '}
        <Link href="/">here</Link>
      </p>
    </div>
  );
};

export default Alert;
