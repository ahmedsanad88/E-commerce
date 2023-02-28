import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwiperSlide } from 'swiper/react';

import { collections } from '@/data/collection';
import CollectionCard from '@/ui/components/CollectionCard';
import ProductsSlider from '@/ui/components/ProductsSlider';

const Collections = () => {
  return (
    <div className="w-full bg-[#1B4B66] py-10 px-5">
      <h2 className="mb-6 text-3xl font-medium text-white">
        Handpicked Collections
      </h2>
      <div className="mx-auto w-full pb-2">
        <ProductsSlider>
          {collections.map((collection, i) => (
            <SwiperSlide key={i}>
              <CollectionCard {...collection} />
            </SwiperSlide>
          ))}
        </ProductsSlider>
      </div>
      {/* <div className="flex w-full gap-4 overflow-auto pb-2">
        {collections.map((collection, i) => (
          <CollectionCard {...collection} key={i} />
        ))}
      </div> */}
    </div>
  );
};

export default Collections;
