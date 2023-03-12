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
      <div className="group w-[280px]">
        <div className="relative w-[280px] cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={alt}
            className="aspect-square transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            width={280}
            height={280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
          <div className="absolute bottom-2 left-2">
            <p className="text-3xl font-bold text-[#1B4B66]">{alt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
