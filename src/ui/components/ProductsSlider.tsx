/* eslint-disable import/no-extraneous-dependencies */

import type { ReactNode } from 'react';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

interface IProductSliderProps {
  children: ReactNode;
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     >
//       NEXT
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     >
//       BACK
//     </div>
//   );
// }

const ProductsSlider = ({ children }: IProductSliderProps) => {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   arrows: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,

  //   // customPaging: function (i) {
  //   //   return <p>{i + 1}</p>;
  //   // },

  //   responsive: [
  //     {
  //       breakpoint: 1424,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },

  //     {
  //       breakpoint: 1124,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 300,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //   ],

  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
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
