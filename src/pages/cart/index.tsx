import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import OrderSummary from '@/ui/sections/cart/cart-page/OrderSummary';
import ProductsSummary from '@/ui/sections/cart/cart-page/ProductsSummary';

const Cart = () => (
  <Main
    meta={
      <Meta
        title="Shopping Cart"
        description="Check all items you added to your cart."
      />
    }
  >
    <div className="min-h-screen">
      <div className="my-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
        <span className="text-[#1B4B66]">Home</span>
        <MdKeyboardArrowRight className="text-2xl" />
        <span className="text-[#1B4B66]">My Cart</span>
      </div>
      <h2 className="mb-8 text-[34px] font-semibold text-[#1B4B66]">My Cart</h2>
      <div className="flex flex-col gap-16 xl:flex-row xl:items-start">
        <ProductsSummary />
        <OrderSummary />
      </div>
    </div>
  </Main>
);

export default Cart;
