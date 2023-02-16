import type { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';

import { addToCart } from '@/redux/slices/cartSlice';
import { useDispatch } from '@/redux/store';
import PriceDiscount from '@/ui/components/PriceDiscount';
import RatingStar from '@/ui/components/RatingStar';

import ProductCoupon from './ProductCoupon';

interface IProductDetailsProps {
  title: string;
  subTitle: string;
  stars: number;
  price: number;
  discount: number;
  image: string | StaticImageData;
}

const ProductDetails = ({
  title,
  subTitle,
  stars,
  price,
  discount,
  image,
}: IProductDetailsProps) => {
  // const { data }: { data: ICartSliceInitialState[] } = useSelector(
  //   (state: RootState) => state.cart
  // );
  const dispatch = useDispatch();
  const [numOfUnits, setNumOfUnits] = useState(1);
  const [selectedCoupon, setSelectedCoupon] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.value = selectedCoupon;
  }, [selectedCoupon]);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     console.log('Here product');
  //     // eslint-disable-next-line array-callback-return
  //     data.map((item) => {
  //       if (item.id === title) {
  //         setNumOfUnits(item.count);
  //       }
  //     });
  //   } else {
  //     setNumOfUnits(1);
  //   }
  // }, [data]);

  const addItem = () => {
    dispatch(
      addToCart({
        id: title,
        title,
        subTitle,
        price,
        image,
        count: numOfUnits,
      })
    );
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
        display="flex-wrap"
        mainTextSize="text-[25px] md:text-[40px]"
        SubTextSize="text-[20px] md:text-[30px]"
      />
      <hr />
      <div className="flex items-center gap-2">
        <p className="font-semibold">Quantity:</p>
        <div className="flex items-center gap-2 rounded border-2 border-[#1B4B66] p-2 text-[#1B4B66]">
          <HiMinus
            onClick={() => setNumOfUnits((prev) => (prev <= 1 ? 1 : prev - 1))}
            className="cursor-pointer"
          />
          <p>{numOfUnits}</p>
          <HiPlus
            onClick={() =>
              setNumOfUnits((prev) => (prev >= 100 ? 100 : prev + 1))
            }
            className="cursor-pointer"
          />
        </div>
        <p className="text-xs text-gray-600">from 1 upto 100</p>
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

      <div className="flex w-full items-center gap-4 overflow-x-auto pb-4">
        <ProductCoupon
          percentage={30}
          value={100}
          code="order100"
          setSelectedCoupon={setSelectedCoupon}
        />
        <ProductCoupon
          percentage={30}
          value={100}
          code="order200"
          setSelectedCoupon={setSelectedCoupon}
        />
        {/* {[...new Array(2)].map((_, i) => (
          <ProductCoupon
            key={i}
            percentage={30}
            value={100}
            code="order100"
            setSelectedCoupon={setSelectedCoupon}
          />
        ))} */}
      </div>

      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <button
          className="group flex h-[44px] flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#1B4B66] bg-[#1B4B66] text-white"
          onClick={() => addItem()}
        >
          <MdAddShoppingCart className="group-hover:animate-bounce" />
          <p>Add To Cart</p>
        </button>
        <button className="group flex h-[44px] flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#1B4B66] text-[#1B4B66]">
          <MdOutlineFavoriteBorder className="group-hover:animate-ping" />
          <p>Add To Favorite</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
