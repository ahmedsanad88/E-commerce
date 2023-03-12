import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { SwiperSlide } from 'swiper/react';

// import type { IProductCardProps } from '@/ui/components/ProductCard';
import ProductCard from '@/ui/components/ProductCard';
import ProductsSlider from '@/ui/components/ProductsSlider';

import type { IProductsListProps } from '../category-page/ProductsList';

// const product1: IProductCardProps = {
//   id: 1111,
//   title: 'Grande',
//   category: 'Blossom Pouch',
//   price: 39.49,
//   thumbnail:
//     'https://cdnd.lystit.com/photos/99ad-2014/03/25/fendi-black-2jours-grande-shopping-bag-product-1-18679366-1-477799868-normal.jpeg',
// };

const NewArrivals = ({ products }: IProductsListProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="mt-16 flex w-full items-center justify-between">
        <h2 className="text-3xl font-medium">New Arrivals</h2>
        <button className="flex items-center rounded-md px-4 py-2 hover:bg-gray-200">
          <span className="text-sm">View All</span>
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        </button>
      </div>
      <div className="mx-auto w-full pb-16">
        <ProductsSlider>
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </ProductsSlider>
      </div>
      {/* <div className="flex w-full gap-4 overflow-auto pb-2">
        {[...new Array(10)].map((_, i) => (
          <ProductCard {...product1} key={i} />
        ))}
      </div> */}
    </div>
  );
};

export default NewArrivals;
