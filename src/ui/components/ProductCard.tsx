import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';

import { addToCart } from '@/redux/slices/cart-slice/cartSlice';
import { addToFavorite } from '@/redux/slices/fav-slice/favSlice';
import { useDispatch } from '@/redux/store';

import PriceDiscount from './PriceDiscount';
import RatingStar from './RatingStar';

export interface IProductCardProps {
  title: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
  discount?: number;
}

const ProductCard = ({
  title,
  category,
  price,
  image,
  rating,
  discount,
}: IProductCardProps) => {
  const router = useRouter();
  const { categoryType } = router.query;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      addToCart({
        id: title,
        title,
        subTitle: category,
        price,
        image,
        count: 1,
      })
    );
  };

  const addFavItem = () => {
    dispatch(
      addToFavorite({
        id: title,
        title,
        subTitle: category,
        price,
        image,
      })
    );
  };

  return (
    <div
      className="group relative flex max-w-[450px] cursor-pointer flex-col gap-4 overflow-hidden lg:w-full"
      onClick={() =>
        router.push(
          `/category/${categoryType || category.replaceAll(' ', '')}/${title}`
        )
      }
    >
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <MdAddShoppingCart
          className="translate-x-[150%] cursor-pointer rounded-full bg-[#13101E]/80 p-2 text-4xl text-white transition-transform duration-200 group-hover:translate-x-0"
          aria-label="Add to Cart"
          onClick={(e) => {
            e.stopPropagation();
            addItem();
          }}
        />
        <MdOutlineFavoriteBorder
          className="translate-x-[150%] cursor-pointer rounded-full bg-[#13101E]/80 p-2 text-4xl text-white transition-transform delay-100 duration-200 group-hover:translate-x-0"
          aria-label="Add to Favorite"
          onClick={(e) => {
            e.stopPropagation();
            addFavItem();
          }}
        />
      </div>
      <div className="h-full w-full">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="aspect-square w-full rounded-lg shadow-md"
          blurDataURL={image}
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
        {discount ? (
          <PriceDiscount price={price} discount={discount} />
        ) : (
          <div className="flex items-center gap-2">
            <p className="font-semibold">{`$ ${price.toFixed(3)}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
