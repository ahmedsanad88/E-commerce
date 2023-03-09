import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';

import { addToCart } from '@/redux/slices/cart-slice/cartSlice';
import { addToFavorite } from '@/redux/slices/fav-slice/favSlice';
import { useDispatch } from '@/redux/store';

import PriceDiscount from './PriceDiscount';
import type { IProductCardProps } from './ProductCard';
import RatingStar from './RatingStar';

const WideProductCard = ({
  id,
  title,
  category,
  price,
  thumbnail,
  rating,
  discountPercentage,
}: IProductCardProps) => {
  const router = useRouter();
  const { categoryType } = router.query;
  const dispatch = useDispatch();

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
      className="relative flex w-full cursor-pointer flex-col items-center gap-4 overflow-hidden bg-gray-50 lg:flex-row"
      onClick={() =>
        router.push(
          `/category/${categoryType || category.replaceAll(' ', '')}/${title}`
        )
      }
    >
      <div className="h-[286px] w-[286px]">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          className="aspect-square w-full rounded-lg shadow-md"
          blurDataURL={thumbnail}
          width={286}
          height={286}
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 text-xl font-semibold">{title}</h2>
          {/* <GrFavorite className="cursor-pointer" /> */}
        </div>
        <div className="mb-1">
          <p>{category}</p>
          {rating && <RatingStar rate={rating} />}
        </div>
        {discountPercentage ? (
          <PriceDiscount price={price} discount={discountPercentage} />
        ) : (
          <div className="flex items-center gap-2">
            <p className="font-semibold">{`$ ${price.toFixed(3)}`}</p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="group/cart flex h-fit w-fit cursor-pointer items-center justify-center rounded-full bg-[#13101E]/80 py-2 px-4 text-white hover:gap-2"
            onClick={(e) => {
              e.stopPropagation();
              addItem();
            }}
          >
            <MdAddShoppingCart className="text-2xl" aria-label="Add to Cart" />
            <p className="w-0 whitespace-nowrap font-medium capitalize opacity-0 transition-width duration-300 group-hover/cart:w-[105px] group-hover/cart:opacity-100">
              Add to cart
            </p>
          </div>
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="group/fav flex h-fit w-fit cursor-pointer items-center justify-center rounded-full bg-[#13101E]/80 py-2 px-4 text-white hover:gap-2"
            onClick={(e) => {
              e.stopPropagation();
              addFavItem();
            }}
          >
            <MdOutlineFavoriteBorder
              className="text-2xl"
              aria-label="Add to Favorite"
            />
            <p className="w-0 whitespace-nowrap font-medium capitalize opacity-0 transition-width duration-300 group-hover/fav:w-[135px] group-hover/fav:opacity-100">
              Add to Favorite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideProductCard;
