import React from 'react';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { AppConfig } from '@/utils/AppConfig';

const footer1: string[] = [
  'skincare',
  'Personal Care',
  'Handbags',
  'Apparels',
  'Watches',
  'Eye Wear',
  'Jewellery',
];

const footer2: string[] = ['contact us', 'about us', 'careers', 'press'];

const footer3: string[] = [
  'Return Policy',
  'Terms of Use',
  'Sitemap',
  'Security',
  'Privacy',
  'EPR Compliance',
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-between gap-4 bg-[#1B4B66] px-10 pb-16 pt-7 md:flex-row">
      <div className="flex flex-col gap-8 capitalize sm:flex-row md:items-start md:justify-start md:gap-14">
        <div className="flex flex-col items-start">
          <h2 className="mb-4 font-medium text-white">shop by category</h2>
          {footer1.map((item, i) => (
            <p
              key={i}
              className="cursor-pointer text-[#B6B6B6] hover:text-gray-100 hover:underline"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 font-medium text-white">about</h2>
          {footer2.map((item, i) => (
            <p
              key={i}
              className="cursor-pointer text-[#B6B6B6] hover:text-gray-100 hover:underline"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 font-medium text-white">policy</h2>
          {footer3.map((item, i) => (
            <p
              key={i}
              className="cursor-pointer text-[#B6B6B6] hover:text-gray-100 hover:underline"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <div className="mb-8 flex items-center gap-4">
          <FaFacebookF className="cursor-pointer rounded-full bg-[#639599] p-2 text-4xl text-[#1B4B66] hover:bg-white hover:text-[#1B4B66]" />
          <AiFillInstagram className="cursor-pointer rounded-full bg-[#639599] p-2 text-4xl text-[#1B4B66] hover:bg-white hover:text-[#1B4B66]" />
          <AiOutlineTwitter className="cursor-pointer rounded-full bg-[#639599] p-2 text-4xl text-[#1B4B66] hover:bg-white hover:text-[#1B4B66]" />
          <AiFillYoutube className="cursor-pointer rounded-full bg-[#639599] p-2 text-4xl text-[#1B4B66] hover:bg-white hover:text-[#1B4B66]" />
        </div>
        <div className="mb-4 flex items-center gap-4">
          <HiOutlineLocationMarker className="text-2xl text-white" />
          <p className="text-white">United States</p>
        </div>
        <p className="text-center text-sm text-[#B6B6B6]">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made by{' '}
          <a href="https://ahmedsanad.net" className="text-white">
            Ahmed Sanad
          </a>
          .
        </p>
        <p className="text-center text-sm text-[#B6B6B6]">
          Thanks to{' '}
          <a href="https://creativedesignsguru.com" className="text-white">
            CreativeDesignsGuru
          </a>{' '}
          and
          <a href="https://www.figma.com/@webkuldesign" className="text-white">
            webkuldesign
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
