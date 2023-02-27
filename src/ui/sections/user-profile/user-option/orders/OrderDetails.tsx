import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import type { ICartSliceInitialState } from '@/redux/slices/cartSlice';
import { useSelector } from '@/redux/store';
import ProductCard from '@/ui/sections/cart/cart-page/ProductCard';

const OrderDetails = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const [ordersType, setOrdersType] = useState<
    'ordered' | 'invoices' | 'shipment'
  >('ordered');
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

  const selectedStyle = (option: typeof ordersType): string => {
    return ordersType === option
      ? 'bg-[#1B4B66] text-white'
      : 'bg-transparent text-[#626262]';
  };
  return (
    <div className="w-full">
      <div className="mb-8 flex w-full flex-col items-center justify-between sm:flex-row">
        <h2 className="text-center text-[34px] font-semibold text-[#1B4B66]">
          {`Order#${orderId}`}
        </h2>
      </div>
      <div className="mb-6 flex h-[68px] w-full items-center gap-4 overflow-x-auto rounded bg-[#f1f1f1] px-4 py-2">
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'ordered'
          )}`}
          onClick={() => setOrdersType('ordered')}
        >
          Items Ordered
        </button>
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'invoices'
          )}`}
          onClick={() => setOrdersType('invoices')}
        >
          Invoices
        </button>
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'shipment'
          )}`}
          onClick={() => setOrdersType('shipment')}
        >
          Order Shipment
        </button>
      </div>
      <div>
        <div className="hidden grid-cols-8 gap-8 border-b-2 border-black/10 py-2 text-[#626262] md:grid 2xl:gap-16">
          <p className="col-span-5">Product Name</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Qty</p>
          <p className="col-span-1">Subtotal</p>
        </div>

        {data.length > 0 ? (
          data.map((item, idx) => (
            <ProductCard {...item} key={idx} showActions={false} />
          ))
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
      </div>
      <div className="mb-10 w-full border-b-2 border-[#f1f1f1] pb-2 text-xl font-semibold">
        <h2>Order Information</h2>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-2">
        <div>
          <h3 className="py-2 font-medium text-[#626262]">Order Summary</h3>
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

        <div>
          <h3 className="py-2 font-medium text-[#626262]">Payment Details</h3>
          <p className="font-medium text-[#171520]">Cash on Delivery</p>
        </div>

        <div>
          <h3 className="py-2 font-medium text-[#626262]">Address Details</h3>
          <p className="w-fit rounded bg-[#f1f1f1] p-2 text-center">Home</p>
          <address>
            Vincent Lobo
            <br />
            3068 Woodlawn Drive
            <br />
            Milwaukee
            <br />
            414-672-5388
            <br />
          </address>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-end gap-4">
        <button className="rounded-md border-2 border-transparent bg-[#1B4B66] px-4 py-2 text-white">
          Reorder
        </button>
        <button className="rounded-md border-2 border-[#1B4B66] px-4 py-2 text-[#1B4B66]">
          Add Rating
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
