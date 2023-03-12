/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';

import type { IProduct } from '@/global/interfaces/products/products';
import logo from '@/public/assets/images/Buy2.gif';
import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import type { RootState } from '@/redux/store';
import { useSelector } from '@/redux/store';

import ModalProducts from '../sections/cart/ModalProducts';
import Favorite from '../sections/favorite/Favorite';
import Search from '../sections/search/Search';
import Loader from './Loader';
import Modal from './Modal';

const HeadTags: string[] = [
  'Handbags',
  'Watches',
  'Skincare',
  'Jewellery',
  'Apparels',
];

const Navbar = () => {
  const { data }: { data: ICartSliceInitialState[] } = useSelector(
    (state: RootState) => state.cart
  );
  const [showCategories, setShowCategories] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showFavModel, setShowFavModel] = useState(false);
  const [showSearchModel, setShowSearchModel] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchProducts, setSearchProducts] = useState<IProduct[]>();
  const [searchLoader, setSearchLoader] = useState(false);

  const router = useRouter();
  const { categoryType } = router.query;

  useEffect(() => {
    if (data) {
      // might Need to be adjusted with different products
      if (data.length === 1) {
        data.map((item) => setCartCount(item.count));
      } else if (data.length === 0) {
        setCartCount(0);
      } else {
        data.map((item) => setCartCount((prev) => prev + item.count));
      }
    }
  }, [data]);

  // Handle Search
  useEffect(() => {
    const reqTime = setTimeout(async () => {
      if (!searchValue) {
        setSearchProducts([]);
        return;
      }
      setShowSearchModel(true);
      setSearchLoader(true);
      const res = await fetch(`/api/search/${searchValue}`);
      const allSearchProducts = await res.json();
      setSearchProducts(allSearchProducts);
      setSearchLoader(false);
    }, 2000);

    return () => clearTimeout(reqTime);
  }, [searchValue]);

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
                href={`/category/${tag.toLowerCase()}`}
                className={`border-none text-gray-700 hover:text-[#1B4B66] ${
                  categoryType === tag.toLowerCase() && 'font-semibold'
                }`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <form className="relative hidden h-11 w-[360px] overflow-hidden rounded-md bg-gray-200 sm:block">
        <input
          type="text"
          placeholder="Search for products or brands"
          className="h-full w-full rounded-md bg-transparent p-2 pl-10 focus:outline-[#FF8C4B]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute left-2 top-[50%] translate-y-[-50%] text-2xl"
        >
          <FiSearch />
        </button>
      </form>
      <div className="flex gap-5">
        <div
          className="relative cursor-pointer"
          onClick={() => setShowFavModel(true)}
        >
          <MdOutlineFavoriteBorder className="h-6 w-6 text-[#1B4B66]" />
          <div className="absolute top-0 -right-1 h-3 w-3 animate-ping rounded-full bg-[#FF8C4B]"></div>
          <div className="absolute top-0 -right-1 h-3 w-3 rounded-full bg-[#FF8C4B]"></div>
        </div>
        <Link href={`/user-profile/personal-information`}>
          <RiUserLine className="h-6 w-6 cursor-pointer text-[#1B4B66]" />
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <HiOutlineShoppingBag className="h-6 w-6 text-[#1B4B66]" />
          <div className="pointer-events-none absolute top-1 right-0 h-3 w-3 animate-ping rounded-full bg-[#4b9fff]"></div>
          <div className="pointer-events-none absolute top-1 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-[#4b9fff]">
            <p className="text-[0.5rem] text-white">
              {/* {data
                ? data.reduce((acc, current) => {})
                : '0'} */}
              {cartCount}
            </p>
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
              href={`/category/${tag.toLowerCase()}`}
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
      {/* Modal for cart */}
      <Modal
        shown={showModal}
        close={setShowModal}
        position="right-2 top-24 sm:top-20"
      >
        <ModalProducts />
      </Modal>
      {/* Modal for favorite */}
      <Modal
        shown={showFavModel}
        close={setShowFavModel}
        position="right-2 top-24 sm:top-20"
      >
        <Favorite />
      </Modal>
      {/* Modal for Search */}
      <Modal
        shown={showSearchModel}
        close={setShowSearchModel}
        position="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[80%] overflow-auto overscroll-none"
      >
        {searchLoader ? <Loader /> : <Search data={searchProducts} />}
      </Modal>
    </header>
  );
};

export default Navbar;
