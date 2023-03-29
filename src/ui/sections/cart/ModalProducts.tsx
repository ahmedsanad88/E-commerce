import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cart-slice/cartSlice';
import { useSelector } from '@/redux/store';

import CartProductTemplate from './CartProductTemplate';

const ModalProducts = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { data }: { data: ICartSliceInitialState[] } = useSelector(
    (state) => state.cart
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data.length > 0) {
      let accumulator = 0;
      // eslint-disable-next-line array-callback-return
      data.map((item) => {
        accumulator += item.count * item.price;
      });
      setSubtotal(+accumulator.toFixed(3));
    }
  }, [data]);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <div className="max-h-[120px] w-full overflow-y-auto py-2 xxs:max-h-[160px] xs:max-h-[200px] lg:max-h-[500px] 2xl:max-h-[800px]">
            {data.map((item, idx) => (
              <CartProductTemplate {...item} key={idx} />
            ))}
          </div>
          <div className="my-6 flex flex-col gap-4">
            <div className="flex w-full justify-between">
              <p>Subtotal:</p>
              <p>{`$${subtotal}`}</p>
            </div>
            <div className="flex w-full justify-between">
              <p>Tax:</p>
              <p>{`$${5}`}</p>
            </div>
            <div className="flex w-full justify-between">
              <p>Total:</p>
              <p>{`$${subtotal + 5}`}</p>
            </div>
          </div>

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

          <Link href={'/cart'}>
            <button className="my-4 h-[44px] w-full rounded-md bg-[#1B4B66] font-medium text-white shadow-lg hover:shadow-none">
              Place Order
            </button>
          </Link>
        </div>
      ) : (
        <p>No Items added to the cart</p>
      )}
    </div>
  );
};

export default ModalProducts;
