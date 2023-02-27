import Link from 'next/link';
import React, { useRef } from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cartSlice';
import { useSelector } from '@/redux/store';

import ProductCard from './ProductCard';

const ProductsSummary = () => {
  const { data }: { data: ICartSliceInitialState[] } = useSelector(
    (state) => state.cart
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex-1">
      {/* <div className="flex gap-16 border-b-2 border-black/10 py-2 text-[#626262]"> */}
      <div className="hidden grid-cols-8 gap-8 border-b-2 border-black/10 py-2 text-[#626262] md:grid 2xl:gap-16">
        <p className="col-span-5">Product Name</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Qty</p>
        <p className="col-span-1">Subtotal</p>
      </div>

      {data.length > 0 ? (
        data.map((item, idx) => <ProductCard {...item} key={idx} showActions />)
      ) : (
        <div className="mt-8 grid w-full place-items-center">
          <p className="text-center text-xl font-semibold text-[#1B4B66]">
            No products added to the cart 😭
          </p>
          <Link href={'/'}>
            <p>{`Let's Add Some!`}</p>
          </Link>
        </div>
      )}

      <div className="mt-16 w-full lg:w-[60%]">
        <form
          onSubmit={handelSubmit}
          className={`mb-4 flex h-[52px] w-full items-center overflow-hidden rounded-md border-2 border-transparent bg-[#f1f1f1] focus-within:border-[#FF8C4B]`}
        >
          <input
            type="text"
            id="coupon"
            name="coupon"
            aria-label="Enter your coupon"
            placeholder="Enter your coupon"
            className="h-full w-full bg-transparent px-4 focus:outline-none"
            ref={inputRef}
          />
          <button
            type="submit"
            className="h-full bg-transparent px-4 uppercase text-[#1B4B66] hover:bg-gray-300"
          >
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductsSummary;
