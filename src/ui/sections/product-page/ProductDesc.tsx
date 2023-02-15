import React, { useState } from 'react';

interface IProductDescProps {
  productDescription: string;
  relatedProducts: string; // array of products
  reviews: string; // array of reviews
}

const ProductDesc = ({
  productDescription,
  relatedProducts,
  reviews,
}: IProductDescProps) => {
  const [selectedOption, setSelectedOption] = useState<
    'description' | 'related' | 'rating'
  >('description');

  const selectedStyle = (option: typeof selectedOption): string => {
    return selectedOption === option
      ? 'bg-[#1B4B66] text-white'
      : 'bg-transparent text-[#626262]';
  };

  const displayObj = {
    description: productDescription,
    related: relatedProducts,
    rating: reviews,
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex h-fit w-full items-center gap-4 overflow-x-auto rounded bg-[#f1f1f1] px-4 py-2 md:h-12">
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'description'
          )}`}
          onClick={() => setSelectedOption('description')}
        >
          Product Description
        </button>
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'related'
          )}`}
          onClick={() => setSelectedOption('related')}
        >
          Related Products
        </button>
        <button
          className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
            'rating'
          )}`}
          onClick={() => setSelectedOption('rating')}
        >
          Ratings and Reviews
        </button>
      </div>
      <div>{displayObj[selectedOption]}</div>
    </div>
  );
};

export default ProductDesc;
