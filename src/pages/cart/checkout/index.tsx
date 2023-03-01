import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import PageNesting from '@/ui/components/PageNesting';
import AddressForm from '@/ui/sections/cart/cart-page/checkout/AddressForm';
import OrdersSummary from '@/ui/sections/cart/cart-page/checkout/OrdersSummary';
import PaymentForm from '@/ui/sections/cart/cart-page/checkout/PaymentForm';

const Address = () => {
  const [isOpenPath, setIsOpenPath] = useState<'address' | 'payment'>(
    'address'
  );

  return (
    <Main
      meta={
        <Meta
          title="Address page"
          description="Add your address to complete your order."
        />
      }
    >
      <div className="min-h-screen">
        {/* <div className="my-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#1B4B66]">Checkout</span>
        </div> */}
        <PageNesting category="My Cart" data={['Checkout']} />
        <h2 className="mb-8 text-[34px] font-semibold text-[#1B4B66]">
          My Cart
        </h2>
        <div className="flex flex-col gap-16 xl:flex-row xl:items-start">
          <div className="flex flex-1 flex-col gap-4">
            <div>
              <div
                className="mb-8 flex w-full cursor-pointer items-center justify-between border-b-2 border-black/10 py-2"
                onClick={() => setIsOpenPath('address')}
              >
                <h3
                  className={`font-semibold ${
                    isOpenPath === 'address'
                      ? 'text-[#171520]'
                      : 'text-gray-500'
                  }`}
                >
                  Add New Address
                </h3>
                <IoIosArrowUp
                  className={`text-2xl transition-transform duration-150 ${
                    isOpenPath === 'address' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`${
                  isOpenPath === 'address'
                    ? 'h-fit'
                    : 'pointer-events-none h-0 opacity-0'
                }`}
              >
                <AddressForm />
              </div>
            </div>

            <div>
              <div
                className="mb-8 flex w-full cursor-pointer items-center justify-between border-b-2 border-black/10 py-2"
                onClick={() => setIsOpenPath('payment')}
              >
                <h3
                  className={`font-semibold ${
                    isOpenPath === 'payment'
                      ? 'text-[#171520]'
                      : 'text-gray-500'
                  }`}
                >
                  Select Payment Method
                </h3>
                <IoIosArrowUp
                  className={`text-2xl transition-transform duration-150 ${
                    isOpenPath === 'payment' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`${
                  isOpenPath === 'payment'
                    ? 'h-fit'
                    : 'pointer-events-none h-0 opacity-0'
                }`}
              >
                <PaymentForm />
              </div>
            </div>

            <div className="mt-8 flex flex-row-reverse flex-wrap items-center justify-between gap-2">
              <Link href={`/cart/checkout`} className="h-10 w-full md:w-fit">
                <button
                  className="h-full w-full rounded-md bg-[#1B4B66] px-4 text-white"
                  // onClick={() => submitForm()}
                >
                  Pay
                </button>
              </Link>
              <Link href="/" className="h-10 w-full md:w-fit">
                <button className="h-full w-full rounded-md border border-[#1B4B66] px-4 text-[#1B4B66]">
                  Back To Cart
                </button>
              </Link>
            </div>
          </div>
          <OrdersSummary />
        </div>
      </div>
    </Main>
  );
};

export default Address;
