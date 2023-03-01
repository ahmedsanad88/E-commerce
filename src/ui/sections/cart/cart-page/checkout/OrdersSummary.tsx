import React, { useEffect, useState } from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import { useSelector } from '@/redux/store';

import SimpleProduct from './SimpleProduct';

const OrdersSummary = () => {
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
      {data.length > 0 ? (
        <div className="mb-6">
          {data.map((item, idx) => (
            <SimpleProduct {...item} quantity={item.count} key={idx} />
          ))}
        </div>
      ) : (
        <p>No Items added!</p>
      )}

      <h3 className="border-b-2 border-black/10 py-2 text-xl font-semibold text-[#13101E]">
        Order Details
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
    </div>
  );
};

export default OrdersSummary;
