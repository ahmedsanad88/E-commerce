import React, { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';

import PriceDiscount from '@/ui/components/PriceDiscount';
import RatingStar from '@/ui/components/RatingStar';

import ProductCoupon from './ProductCoupon';

interface IProductDetailsProps {
  title: string;
  subTitle: string;
  stars: number;
  price: number;
  discount: number;
}

const ProductDetails = ({
  title,
  subTitle,
  stars,
  price,
  discount,
}: IProductDetailsProps) => {
  const [numOfUnits, setNumOfUnits] = useState(1);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <RatingStar rate={stars} />
      <PriceDiscount
        price={price}
        discount={discount}
        mainTextSize="text-[25px] md:text-[40px]"
        SubTextSize="text-[20px] md:text-[30px]"
      />
      <hr />
      <div className="flex items-center gap-2">
        <p className="font-semibold">Quantity:</p>
        <div className="flex items-center gap-2 rounded border-2 border-[#1B4B66] p-2 text-[#1B4B66]">
          <HiMinus
            onClick={() => setNumOfUnits((prev) => prev - 1)}
            className="cursor-pointer"
          />
          <p>{numOfUnits}</p>
          <HiPlus
            onClick={() => setNumOfUnits((prev) => prev + 1)}
            className="cursor-pointer"
          />
        </div>
      </div>

      <form
        onSubmit={handelSubmit}
        className={`mb-4 flex h-[52px] w-full items-center overflow-hidden rounded-md bg-[#f1f1f1]`}
      >
        <input
          type="text"
          id="coupon"
          name="coupon"
          aria-label="Enter your coupon"
          placeholder="Enter your coupon"
          className="h-full w-full bg-transparent px-4 focus:outline-transparent"
        />
        <button
          type="submit"
          className="h-full bg-transparent px-4 uppercase text-[#1B4B66] hover:bg-gray-300"
        >
          Check
        </button>
      </form>

      <div className="flex w-full items-center gap-4 overflow-x-auto">
        {[...new Array(2)].map((_, i) => (
          <ProductCoupon key={i} percentage={30} value={100} code="order100" />
        ))}
      </div>

      <div className="flex w-full gap-4">
        <button className="flex h-[44px] flex-1 items-center justify-center gap-2 rounded-md bg-[#1B4B66] text-white">
          <MdAddShoppingCart />
          <p>Add To Cart</p>
        </button>
        <button className="flex h-[44px] flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#1B4B66] text-[#1B4B66]">
          <MdOutlineFavoriteBorder />
          <p>Add To Favorite</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
