import Image from 'next/image';
import React from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cartSlice';
import { removeFromCart } from '@/redux/slices/cartSlice';
import { useDispatch } from '@/redux/store';

const ProductCard = ({
  id,
  title,
  subTitle,
  image,
  count,
  price,
}: ICartSliceInitialState) => {
  const dispatch = useDispatch();
  return (
    <div className="my-6 grid grid-cols-8 gap-8 2xl:gap-16">
      <div className="col-span-5 flex items-start gap-4">
        <div className="h-[100px] w-[100px]">
          <Image
            src={image}
            alt={title}
            placeholder="blur"
            className="aspect-square rounded-lg shadow"
            blurDataURL={title}
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold text-[#171520]">{title}</h2>
            <p className="text-[#626262]">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-between">
        <div className="grid w-full grid-cols-3 gap-8 2xl:gap-16">
          <p>{`$${price}`}</p>
          <p>{count}</p>
          <p>{`$${price * count}`}</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-8 2xl:gap-16">
          <button className="col-span-2 border-none text-left font-semibold text-[#1B4B66] underline">
            Move To Wishlist
          </button>
          <button
            className="border-none text-left font-semibold text-[#B00020] underline"
            onClick={() => {
              dispatch(removeFromCart(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
