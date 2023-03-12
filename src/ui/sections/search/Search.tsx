import React from 'react';

import type { IProduct } from '@/global/interfaces/products/products';

import SearchCard from './SearchCard';

interface ISearchProps {
  data: IProduct[] | undefined;
}

const Search = ({ data }: ISearchProps) => {
  if (!data) {
    return (
      <h2 className="text-lg font-semibold text-blue-600">No Result Found</h2>
    );
  }
  return (
    <div>
      {data.length > 0 ? (
        <div className="flex flex-col gap-6">
          {data.map((product) => (
            <SearchCard {...product} key={product.id} />
          ))}
        </div>
      ) : (
        <h2 className="text-lg font-semibold text-blue-600">No Result Found</h2>
      )}
    </div>
  );
};

export default Search;
