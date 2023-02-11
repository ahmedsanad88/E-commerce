import React, { useState } from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

import Pagination from '@/ui/components/Pagination';

const ProductsList = () => {
  const [isGridList, setIsGridList] = useState(true);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between gap-2 font-medium lg:flex-row">
        <div className="flex items-center gap-2">
          <BsGrid3X3GapFill
            className={`cursor-pointer p-1 text-2xl ${
              isGridList
                ? 'bg-[#1B4B66] text-white'
                : 'bg-transparent text-[#B6B6B6]'
            }`}
            onClick={() => setIsGridList(true)}
          />
          <FaThList
            className={`cursor-pointer p-1 text-2xl ${
              !isGridList
                ? 'bg-[#1B4B66] text-white'
                : 'bg-transparent text-[#B6B6B6]'
            }`}
            onClick={() => setIsGridList(false)}
          />
          <p className="ml-2">Showing 1 - 40 of 145 items</p>
        </div>
        <div>
          <label htmlFor="items">To Show:</label>
          <select
            name="items"
            id="items"
            className="ml-2 h-[52px] w-14 rounded bg-[#f1f1f1] pl-2"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div>
          <label htmlFor="sorted">Sort By:</label>
          <select
            name="sorted"
            id="sorted"
            className="ml-2 h-[52px] rounded bg-[#f1f1f1] pl-2"
          >
            <option value="">Sort Your data</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="rate">Rate: Higher</option>
            <option value="discount">Discount: Higher</option>
          </select>
        </div>
      </div>
      <div></div>

      <Pagination data={[...new Array(5)]} />
    </div>
  );
};

export default ProductsList;
