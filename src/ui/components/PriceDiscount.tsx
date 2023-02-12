import React from 'react';

interface IPriceDiscountProps {
  price: number;
  discount: number;
  mainTextSize?: string;
  SubTextSize?: string;
}

const PriceDiscount = ({
  price,
  discount,
  mainTextSize = 'text-base',
  SubTextSize = 'text-sm',
}: IPriceDiscountProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className={`font-semibold ${mainTextSize}`}>{`$ ${price.toFixed(
        3
      )}`}</p>
      <p className={`line-through ${SubTextSize}`}>{`$ ${(
        (price * discount) / 100 +
        price
      ).toFixed(3)}`}</p>
      <p
        className={`font-semibold text-[#E21D1D] ${mainTextSize}`}
      >{`${discount}% OFF`}</p>
    </div>
  );
};

export default PriceDiscount;
