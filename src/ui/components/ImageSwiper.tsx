import Image from 'next/image';
import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper as SWMain, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper/types';

interface ISwiperProps {
  images: string[];
}

export default function ImageSwiper({ images }: ISwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  return (
    <div className="h-full w-full xl:w-[600px]">
      <SWMain
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {images.length &&
          images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={image}
                alt="product"
                placeholder="blur"
                blurDataURL={image}
                width={600}
                height={600}
              />
            </SwiperSlide>
          ))}
      </SWMain>
      {/* 2nd Swiper */}
      <SWMain
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper3"
      >
        {images.length &&
          images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={image}
                alt="product"
                placeholder="blur"
                blurDataURL={image}
                width={75}
                height={75}
              />
            </SwiperSlide>
          ))}
      </SWMain>
    </div>
  );
}
