import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

import type { IProduct } from '@/global/interfaces/products/products';
import Loader from '@/ui/components/Loader';
import Pagination from '@/ui/components/Pagination';
import ProductCard from '@/ui/components/ProductCard';
import WideProductCard from '@/ui/components/WideProductCard';

// const product1: IProductCardProps = {
//   title: 'Grande',
//   category: 'Blossom Pouch',
//   price: 39.49,
//   image:
//     'https://cdnd.lystit.com/photos/99ad-2014/03/25/fendi-black-2jours-grande-shopping-bag-product-1-18679366-1-477799868-normal.jpeg',
//   rating: 4.3,
//   discount: 20,
// };

export interface IProductsListProps {
  products: IProduct[];
}

type SortOptions = 'lowToHigh' | 'highToLow' | 'rate' | 'discount' | '';

const ProductsList = ({ products }: IProductsListProps) => {
  const [isGridList, setIsGridList] = useState(true);
  const [sortOption, setSortOption] = useState<SortOptions>('');
  const [sortedData, setSortedData] = useState<IProduct[]>(() => products);
  const [isChangeSort, setIsChangeSort] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    let sub = true;
    if (sub) {
      setSortedData(products);
    }

    return () => {
      sub = false;
    };
  }, [dynamicRoute]);

  useEffect(() => {
    let sub = true;
    if (sub && sortOption) {
      setIsChangeSort(true);
      switch (sortOption) {
        case 'lowToHigh':
          setSortedData((prev) =>
            [...prev].sort((a: IProduct, b: IProduct) => a.price - b.price)
          );
          break;
        case 'highToLow':
          setSortedData((prev) =>
            [...prev].sort((a: IProduct, b: IProduct) => b.price - a.price)
          );
          break;
        case 'discount':
          setSortedData((prev) =>
            [...prev].sort(
              (a: IProduct, b: IProduct) =>
                b.discountPercentage - a.discountPercentage
            )
          );
          break;
        case 'rate':
          setSortedData((prev) =>
            [...prev].sort((a: IProduct, b: IProduct) => b.rating - a.rating)
          );
          break;
        default:
          setSortedData(products);
          break;
      }
    }

    return () => {
      sub = false;
    };
  }, [sortOption]);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value as SortOptions);
  };

  // console.log(sortedData);

  return (
    <div className="flex w-full flex-col gap-6">
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
            onChange={(e) => handleSort(e)}
          >
            <option value="" disabled={isChangeSort}>
              Sort Your data
            </option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="rate">Rate: Higher</option>
            <option value="discount">Discount: Higher</option>
          </select>
        </div>
      </div>
      {/* grid grid-cols-products gap-x-8 gap-y-16 */}
      {/* flex flex-wrap items-start justify-between gap-x-8 gap-y-16 */}
      <div
        className={`grid justify-items-center ${
          isGridList
            ? 'grid-cols-products gap-x-8 gap-y-16'
            : 'grid-cols-1 gap-y-8'
        }`}
      >
        {sortedData?.length ? (
          sortedData.map((product, i) =>
            isGridList ? (
              <ProductCard {...product} key={i} />
            ) : (
              <WideProductCard {...product} key={i} />
            )
          )
        ) : (
          <Loader />
        )}
      </div>

      <Pagination data={[...new Array(5)]} />
    </div>
  );
};

export default ProductsList;
