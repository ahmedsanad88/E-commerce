import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import { useSelector } from '@/redux/store';

const OrderSummary = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { data }: { data: ICartSliceInitialState[] } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (data.length > 0) {
      let accumulator = 0;
      // eslint-disable-next-line array-callback-return
      data.map((item) => {
        accumulator += item.count * item.price;
      });
      setSubtotal(+accumulator.toFixed(3));
    } else {
      setSubtotal(0);
    }
  }, [data]);

  return (
    <div className="mx-auto flex w-full flex-col gap-4 sm:w-[400px]">
      <h3 className="border-b-2 border-black/10 py-2 text-xl font-semibold text-[#13101E]">
        Order Summary
      </h3>
      <div className="flex w-full justify-between gap-4">
        <p>Subtotal:</p>
        <p>{`$${subtotal}`}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <p>Discount:</p>
        <p>{`-$${13}`}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <p>Delivery Fee:</p>
        <p>{`$${0}`}</p>
      </div>
      <div className="flex w-full justify-between gap-4 font-semibold">
        <p>Grand Total:</p>
        <p>{`$${subtotal === 0 ? 0 : subtotal - 13}`}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href={`/cart/checkout`} className="h-10 w-full">
          <button className="h-full w-full rounded-md bg-[#1B4B66] text-white">
            Confirm Address
          </button>
        </Link>
        <Link href="/" className="h-10 w-full">
          <button className="h-full w-full rounded-md border border-[#1B4B66] text-[#1B4B66]">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
