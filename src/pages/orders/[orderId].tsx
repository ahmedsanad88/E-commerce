import { useRouter } from 'next/router';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import type { RootState } from '@/redux/store';
import { useSelector } from '@/redux/store';
import { Main } from '@/templates/Main';
import OrderDetails from '@/ui/sections/user-profile/user-option/orders/OrderDetails';
import type { AllOptions } from '@/ui/sections/user-profile/UserSidebar';
import UserSidebar from '@/ui/sections/user-profile/UserSidebar';

const ShowOrder = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const { selectedOption }: { selectedOption: AllOptions } = useSelector(
    (state: RootState) => state.userSidebar
  );

  return (
    <Main
      meta={
        <Meta
          title="Shopping Cart"
          description="Check all items you added to your cart."
        />
      }
    >
      <div className="min-h-screen">
        <div className="mt-6 mb-8 flex w-full flex-wrap items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#1B4B66]">User Profile</span>
          {selectedOption && (
            <>
              <MdKeyboardArrowRight className="text-2xl" />
              <span className="text-[#1B4B66]">{selectedOption}</span>
              <MdKeyboardArrowRight className="text-2xl" />
              <span className="text-[#626262]">{`Order#${orderId}`}</span>
            </>
          )}
        </div>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          <UserSidebar />
          <div className="flex-1">
            {/* Will receive orderId to fetch it's data */}
            <OrderDetails />
          </div>
          {/* <UserContent /> */}
        </div>
      </div>
    </Main>
  );
};

export default ShowOrder;
