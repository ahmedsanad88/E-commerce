import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import banner from '@/public/assets/images/hero.png';

const Banner = () => {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-xl xl:h-[400px]">
      <Image
        src={banner}
        alt="banner"
        className="h-auto w-full object-cover object-left"
        priority
      />
      <div className="absolute right-[50%] top-[50%] h-full w-full translate-x-[50%] translate-y-[-50%] rounded-l-xl bg-[#DEDEDE]/70 p-8 text-[#1B4B66] sm:h-fit sm:w-[600px] xl:right-[-10px] xl:translate-x-0">
        <h2 className="text-3xl font-bold sm:text-6xl">Carry Your Funk</h2>
        <p className="text-xl font-medium">
          Trendy handbags collection for your party animals
        </p>
        <button className="group mt-8 flex items-center gap-2 rounded-md bg-[#1B4B66] p-2 px-8 text-white">
          <FiArrowRight className="translate-x-0 transition-transform duration-150 group-hover:translate-x-2" />
          <span>See More</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
