import Link from 'next/link';
import React from 'react';

interface IProductCouponProps {
  percentage: number;
  value: number;
  code: string;
  setSelectedCoupon: React.Dispatch<React.SetStateAction<string>>;
}

const ProductCoupon = ({
  percentage,
  value,
  code,
  setSelectedCoupon,
}: IProductCouponProps) => {
  return (
    <div className="flex min-w-[300px] items-stretch gap-8 rounded-md border-2 border-[#1B4B66] p-2">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#171520] sm:text-base">
          {`Get upto ${percentage}% Off on order value above $${value}`}
        </p>
        <Link href={`/`} className="no-underline">
          <p className="text-sm text-[#1B4B66]">Terms & Conditions</p>
        </Link>
      </div>
      <button
        className="w-[110px] flex-1 rounded bg-[#f1f1f1] px-2"
        onClick={() => setSelectedCoupon(code)}
      >
        <p className="text-sm capitalize text-[#626262]">use code</p>
        <p className="uppercase text-[#171520]">{code}</p>
      </button>
    </div>
  );
};

export default ProductCoupon;
