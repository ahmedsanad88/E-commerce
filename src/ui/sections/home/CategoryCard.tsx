import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

interface ICategoryCardProps {
  image: string | StaticImageData;
  head1: string;
  head2: string;
  btnBgColor: string;
  btnColor: string;
}

const CategoryCard = ({
  image,
  head1,
  head2,
  btnBgColor,
  btnColor,
}: ICategoryCardProps) => {
  return (
    <div className="relative min-h-[230px] w-full overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="banner"
        placeholder="blur"
        className="min-h-[230px] w-full object-cover object-left"
      />
      <div className="absolute right-4 top-[50%] flex translate-y-[-50%] flex-col items-end px-2 py-4 backdrop-blur-sm md:backdrop-blur-none">
        <h1 className={`text-right text-4xl font-bold ${btnColor}`}>
          {head1} <br /> {head2}
        </h1>
        <button
          className={`mt-2 rounded-full p-2 text-2xl ${btnBgColor} ${btnColor}`}
        >
          <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
