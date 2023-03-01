import Image from 'next/image';
import React from 'react';
import { IoHeartDislikeOutline } from 'react-icons/io5';

import type { IFavSliceInitialState } from '@/redux/slices/fav-slice/favSlice';
import { removeFromFavorite } from '@/redux/slices/fav-slice/favSlice';
import { useDispatch } from '@/redux/store';

const FavTemplateCard = ({
  id,
  title,
  subTitle,
  image,
  price,
}: IFavSliceInitialState) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-8 border-b-2 border-black/10 pb-10">
      <div className="h-[100px] w-[100px]">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="aspect-square rounded-lg drop-shadow-lg"
          blurDataURL={title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#171520]">{title}</h2>
            <p className="text-[#626262]">{subTitle}</p>
          </div>
          <IoHeartDislikeOutline
            className="cursor-pointer text-xl text-[#B00020]"
            onClick={() => {
              dispatch(removeFromFavorite(id));
            }}
          />
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <p className="font-semibold">{`$ ${price.toFixed(3)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default FavTemplateCard;
