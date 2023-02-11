import Image from 'next/image';
import React from 'react';
import { GrFavorite } from 'react-icons/gr';

export interface IProductCardProps {
  title: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, category, price, image }: IProductCardProps) => {
  return (
    <div className="flex w-[286px] cursor-pointer flex-col gap-4">
      <div className="h-[286px] w-[286px]">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="aspect-square rounded-lg shadow-md"
          blurDataURL={image}
          width={286}
          height={286}
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 text-xl font-semibold">{title}</h2>
          <GrFavorite className="cursor-pointer" />
        </div>
        <div>
          <p>{category}</p>
          <p className="font-semibold">{`$ ${price.toLocaleString()}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
