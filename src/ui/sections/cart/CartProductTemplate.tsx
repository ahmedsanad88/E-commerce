import Image from 'next/image';
import React, { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import {
  addToCart,
  removeFromCart,
  removeOneProduct,
} from '@/redux/slices/cart-slice/cartSlice';
import { useDispatch } from '@/redux/store';

const CartProductTemplate = ({
  id,
  title,
  subTitle,
  image,
  count,
  price,
}: ICartSliceInitialState) => {
  const [numOfUnits, setNumOfUnits] = useState(1);
  const dispatch = useDispatch();

  const handleCount = (isAdd: boolean) => {
    if (isAdd) {
      setNumOfUnits((prev) => (prev >= 100 ? 100 : prev + 1));
      dispatch(
        addToCart({ id, title, subTitle, image, count: numOfUnits, price })
      );
    } else {
      setNumOfUnits((prev) => (prev <= 1 ? 1 : prev - 1));
      dispatch(removeOneProduct(id));
    }
  };

  return (
    <div className="flex items-center gap-4 border-b-2 border-black/10 pb-10">
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
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-start justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold text-[#171520]">{title}</h2>
            <p className="text-[#626262]">{subTitle}</p>
          </div>
          <IoClose
            className="cursor-pointer text-xl text-[#B00020]"
            onClick={() => {
              dispatch(removeFromCart(id));
            }}
          />
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded border-2 border-[#1B4B66] p-2 text-[#1B4B66]">
            <HiMinus
              onClick={() => handleCount(false)}
              className="cursor-pointer"
            />
            <p>{count}</p>
            <HiPlus
              onClick={() => handleCount(true)}
              className="cursor-pointer"
            />
          </div>
          <p className="font-semibold">{`$ ${price.toFixed(3)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductTemplate;
