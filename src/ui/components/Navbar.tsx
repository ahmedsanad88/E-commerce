/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RiUserLine } from 'react-icons/ri';

import logo from '@/public/assets/images/Buy2.gif';

const HeadTags: string[] = [
  'Handbags',
  'Watches',
  'Skincare',
  'Jewellery',
  'Apparels',
];

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="relative flex h-20 w-full items-center justify-between gap-6 bg-white px-5 xl:justify-start">
      <Link href="/" className="w-[60px] overflow-hidden rounded-full">
        <Image src={logo} alt="logo" className="object-cover" />
      </Link>
      <nav className="hidden flex-1 xl:block">
        <ul className="flex flex-wrap gap-5">
          {HeadTags.map((tag, i) => (
            <li key={i} className="under-line relative overflow-hidden">
              <Link
                href={`/${tag.toLowerCase()}`}
                className="border-none text-gray-700 hover:text-[#1B4B66]"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <form className="relative hidden h-11 w-[360px] overflow-hidden rounded-md bg-gray-200 sm:block">
        <input
          type="search"
          placeholder="Search for products or brands"
          className="h-full w-full bg-transparent p-2 pl-10"
        />
        <button
          type="submit"
          className="absolute left-2 top-[50%] translate-y-[-50%] text-2xl"
        >
          <FiSearch />
        </button>
      </form>
      <div className="flex gap-5">
        <div className="relative cursor-pointer">
          <GrFavorite className="h-6 w-6" />
          <div className="absolute top-0 -right-1 h-3 w-3 animate-ping rounded-full bg-[#FF8C4B]"></div>
          <div className="absolute top-0 -right-1 h-3 w-3 rounded-full bg-[#FF8C4B]"></div>
        </div>
        <RiUserLine className="h-6 w-6 cursor-pointer" />
        <div className="relative cursor-pointer">
          <HiOutlineShoppingBag className="h-6 w-6" />
          <div className="absolute top-1 right-0 h-3 w-3 animate-ping rounded-full bg-[#4b9fff]"></div>
          <div className="absolute top-1 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-[#4b9fff]">
            <p className="text-[0.5rem] text-white">1</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className={`absolute left-[100px] bottom-[-12px] z-30 block h-fit w-fit cursor-pointer rounded-full bg-white transition-transform duration-200 xl:hidden ${
          showCategories ? 'rotate-180' : 'rotate-0'
        }`}
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <FaArrowCircleDown className="h-6 w-6 text-[#1B4B66]" />
      </div>
      {/* Nav for small devices */}
      <nav
        className={`absolute left-[100px] bottom-[-215px] z-20 block rounded-md bg-white shadow-md transition-transform duration-300 xl:hidden ${
          showCategories
            ? 'translate-y-0 translate-x-0 scale-100'
            : 'translate-y-[-100px] translate-x-[-40px] scale-0'
        }`}
      >
        <ul className="flex flex-col">
          {HeadTags.map((tag, i) => (
            <Link
              href={`/${tag.toLowerCase()}`}
              className="border-none text-gray-700 hover:text-[#1B4B66]"
              key={i}
            >
              <li className="under-line relative overflow-hidden py-2 px-4 hover:bg-gray-200">
                {tag}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
