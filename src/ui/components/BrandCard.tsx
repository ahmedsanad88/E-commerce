import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ICollectionCardProps } from './CollectionCard';

const BrandCard = ({ image, alt, path }: ICollectionCardProps) => {
  return (
    <Link href={path}>
      <div className="h-[168px] w-[168px] cursor-pointer rounded-lg bg-gray-300">
        <div className="grid h-[168px] w-[168px] place-items-center">
          <Image
            src={image}
            alt={alt}
            className="w-auto"
            width={110}
            height={70}
          />
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
