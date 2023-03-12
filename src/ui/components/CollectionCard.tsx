import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ICollectionCardProps {
  image: string | StaticImageData;
  alt: string;
  path: string;
}

const CollectionCard = ({ image, alt, path }: ICollectionCardProps) => {
  return (
    <Link href={`/category/${path.toLowerCase()}`}>
      <div className="w-[280px]">
        <div className="relative w-[280px] cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={alt}
            className="aspect-square"
            width={280}
            height={280}
          />
          <div className="absolute bottom-2 left-2">
            <p className="text-3xl font-bold text-black">{alt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
