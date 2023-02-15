import Image from 'next/image';
import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper as SWMain, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper/types';

import cat1 from '@/public/assets/images/cat1.png';
import cat2 from '@/public/assets/images/cat2.png';
import cat3 from '@/public/assets/images/cat3.png';

export default function ImageSwiper() {
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
        <SwiperSlide>
          <Image src={cat1} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat2} alt="product" loading="lazy" placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat3} alt="product" loading="lazy" placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat1} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat2} alt="product" loading="lazy" placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat3} alt="product" loading="lazy" placeholder="blur" />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image src={cat1} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat2} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat3} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat1} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat2} alt="product" priority placeholder="blur" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat3} alt="product" priority placeholder="blur" />
        </SwiperSlide>
      </SWMain>
    </div>
  );
}
