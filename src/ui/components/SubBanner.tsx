import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import banner from '@/public/assets/images/makeup-banner.png';

interface ISubBannerProps {
  image: string | StaticImageData;
  isImageRight: boolean;
  text?: string;
  head1: string;
  head2: string;
  direction: string;
  color: string;
  isThinHeading: boolean;
}

const SubBanner = ({
  image = banner,
  isImageRight,
  text,
  head1,
  head2,
  direction,
  color,
  isThinHeading,
}: ISubBannerProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl xl:h-[400px]">
      <Image
        src={image}
        alt="banner"
        placeholder="blur"
        className={`min-h-[250px] w-full object-cover ${
          isImageRight ? 'object-right' : 'object-left'
        }`}
      />
      {/* backdrop-blur-sm md:backdrop-blur-none px-2 py-4 */}
      <div
        className={`absolute top-[50%] translate-y-[-50%] px-2 py-4 backdrop-blur-sm md:backdrop-blur-none  ${direction} ${color}`}
      >
        {text && (
          <p className="text-2xl font-extralight uppercase lg:text-4xl">
            {text}
          </p>
        )}
        <h2 className="text-2xl font-bold lg:text-5xl">
          {head1} <br />{' '}
          <span className={`${isThinHeading && 'font-light'}`}>{head2}</span>
        </h2>
      </div>
    </div>
  );
};

export default SubBanner;
