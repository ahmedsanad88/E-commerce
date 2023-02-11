import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwiperSlide } from 'swiper/react';

import { brands } from '@/data/brands';

import BrandCard from '../components/BrandCard';
import ProductsSlider from '../components/ProductsSlider';

const Brands = () => {
  return (
    <div className="w-full py-10">
      <h2 className="mb-6 text-3xl font-medium text-black">Shop by Brands</h2>
      <div className="mx-auto w-full pb-2">
        <ProductsSlider>
          {brands.map((brand, i) => (
            <SwiperSlide key={i}>
              <BrandCard {...brand} key={i} />
            </SwiperSlide>
          ))}
        </ProductsSlider>
      </div>
      {/* <div className="flex w-full gap-4 overflow-auto pb-2">
        {brands.map((brand, i) => (
          <BrandCard {...brand} key={i} />
        ))}
      </div> */}
    </div>
  );
};

export default Brands;
