import Image from 'next/image';
import React from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import { removeFromCart } from '@/redux/slices/cart-slice/cartSlice';
import { useDispatch } from '@/redux/store';

interface IProductCardProps extends ICartSliceInitialState {
  showActions: boolean;
}

const ProductCard = ({
  id,
  title,
  subTitle,
  image,
  count,
  price,
  showActions,
}: IProductCardProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="my-6 hidden grid-cols-8 gap-8 md:grid 2xl:gap-16">
        <div className="col-span-5 flex items-start gap-4">
          <div className="h-[100px] w-[100px]">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              className="aspect-square rounded-lg shadow"
              blurDataURL={image}
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
          {showActions && (
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
          )}
        </div>
      </div>
      {/* Mobile view */}
      <div className="my-6 flex flex-col items-center md:hidden">
        <div className="mb-4 flex flex-col items-center gap-4">
          <div className="h-[130px] w-[130px]">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              className="aspect-square rounded-lg shadow"
              blurDataURL={image}
              width={130}
              height={130}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-semibold text-[#171520]">{title}</h2>
            <p className="text-center text-[#626262]">{subTitle}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-start justify-center">
            <p className="font-medium">{`Subtotal:`}</p>
            <p className="pl-4">{`$${price} X ${count} = $${price * count}`}</p>
          </div>
          {showActions && (
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
              <button className="border-none text-left font-semibold text-[#1B4B66] underline">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
