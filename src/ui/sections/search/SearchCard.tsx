import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';

import type { IProduct } from '@/global/interfaces/products/products';
import { addToCart } from '@/redux/slices/cart-slice/cartSlice';
import { addToFavorite } from '@/redux/slices/fav-slice/favSlice';
import { useDispatch } from '@/redux/store';

const SearchCard = ({ id, title, category, thumbnail, price }: IProduct) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const addItem = () => {
    dispatch(
      addToCart({
        id,
        title,
        subTitle: category,
        price,
        image: thumbnail,
        count: 1,
      })
    );
  };

  const addFavItem = () => {
    dispatch(
      addToFavorite({
        id,
        title,
        subTitle: category,
        price,
        image: thumbnail,
      })
    );
  };
  return (
    <div
      className="flex cursor-pointer flex-col items-center gap-8 border-b-2 border-gray-200 pb-2 hover:bg-gray-100 md:flex-row"
      onClick={() =>
        router.push(`/category/${category.replaceAll(' ', '')}/${id}`)
      }
    >
      <div className="h-[100px] w-[100px]">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          className="aspect-square rounded-lg drop-shadow-lg"
          blurDataURL={thumbnail}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-2 md:items-start">
        <h2 className="text-center text-xl font-semibold text-[#171520] md:text-left">
          {title}
        </h2>
        <p className="text-[#626262]">{category}</p>
        <p className="font-semibold">{`$ ${price.toFixed(3)}`}</p>
      </div>
      <div className="flex flex-row gap-2 md:flex-col">
        <MdAddShoppingCart
          className="cursor-pointer rounded-full bg-[#13101E]/80 p-2 text-4xl text-white"
          aria-label="Add to Cart"
          onClick={(e) => {
            e.stopPropagation();
            addItem();
          }}
        />
        <MdOutlineFavoriteBorder
          className="cursor-pointer rounded-full bg-[#13101E]/80 p-2 text-4xl text-white"
          aria-label="Add to Favorite"
          onClick={(e) => {
            e.stopPropagation();
            addFavItem();
          }}
        />
      </div>
    </div>
  );
};

export default SearchCard;
