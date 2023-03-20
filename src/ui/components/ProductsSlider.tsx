/* eslint-disable import/no-extraneous-dependencies */

import type { ReactNode } from 'react';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

interface IProductSliderProps {
  children: ReactNode;
}

const ProductsSlider = ({ children }: IProductSliderProps) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          676: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1660: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
};

export default ProductsSlider;
