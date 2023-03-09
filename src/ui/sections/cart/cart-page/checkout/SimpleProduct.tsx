import Image from 'next/image';
import React from 'react';

interface ISimpleProductProps {
  title: string;
  subTitle: string;
  image: string;
  quantity: number;
}

const SimpleProduct = ({
  title,
  subTitle,
  image,
  quantity,
}: ISimpleProductProps) => {
  return (
    <div>
      <div className="col-span-5 flex items-start gap-4">
        <div className="h-[120px] w-[120px]">
          <Image
            src={image}
            alt={title}
            placeholder="blur"
            className="aspect-square rounded-lg shadow"
            blurDataURL={image}
            width={120}
            height={120}
          />
        </div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold text-[#171520]">{title}</h2>
            <p className="text-[15px] text-[#626262]">{subTitle}</p>
            <p className="text-[#626262]">{`Qty-${quantity}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProduct;
