import Image from 'next/image';
import React from 'react';

import aboutBanner from '@/public/assets/images/about-banner.png';
import about1 from '@/public/assets/images/about1.png';
import about2 from '@/public/assets/images/about2.png';
import about3 from '@/public/assets/images/about3.png';

import AboutDetails from './AboutDetails';

const aboutDetails = [
  {
    heading: 'About',
    text: 'Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. ',
    image: about1,
  },
  {
    heading: 'About',
    text: 'Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. ',
    image: about2,
  },
  {
    heading: 'About',
    text: 'Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. ',
    image: about3,
  },
];

const AboutContent = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="relative w-full">
        <Image
          src={aboutBanner}
          alt="about banner"
          className="h-auto w-full"
          placeholder="blur"
        />
        <div className="absolute right-[20%] top-[50%] translate-y-[-50%] rounded-md p-4 backdrop-blur">
          <h1 className="text-3xl font-semibold text-[#FF8C4B] sm:text-5xl">
            About <span className="text-[#1B4B66]">Buy/2</span>
          </h1>
        </div>
      </div>
      <article className="mx-auto w-full text-center sm:w-[50%]">
        <h2 className="text-xl font-semibold text-[#171520]">About</h2>
        <p className="text-[#626262]">
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
          simply dummy text of the printing. Lorem Ipsum is simply dummy text of
          the printing. Lorem Ipsum is simply dummy text of the printing. Lorem
          Ipsum is simply dummy text of the printing. Lorem Ipsum is simply
          dummy text of the printing.{' '}
        </p>
      </article>
      {aboutDetails.map((detail, idx) => (
        <AboutDetails
          key={idx}
          {...detail}
          direction={idx % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default AboutContent;
