import React from 'react';

import { filterOptions } from '@/data/filterOptions';

import FilterCard from './FilterCard';

const FilterOptions = () => {
  return (
    <div className="w-full md:w-[400px]">
      {filterOptions.map((item, i) => (
        <FilterCard {...item} key={i} />
      ))}
    </div>
  );
};

export default FilterOptions;
