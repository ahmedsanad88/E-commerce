import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface IAboutDetails {
  heading: string;
  text: string;
  image: StaticImageData | string;
  direction: 'right' | 'left';
}

const AboutDetails = ({ heading, text, image, direction }: IAboutDetails) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
      <div
        className={`relative overflow-hidden rounded-lg ${
          direction === 'right' ? 'sm:order-1' : 'sm:order-2'
        }`}
      >
        <Image
          src={image}
          alt="about banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <article
        className={`flex flex-col items-start justify-center text-left ${
          direction === 'right' ? 'sm:order-2' : 'sm:order-1'
        }`}
      >
        <h3 className="text-xl font-semibold text-[#171520]">{heading}</h3>
        <p className="text-[#626262]">{text}</p>
      </article>
    </div>
  );
};

export default AboutDetails;
