import React, { useMemo, useState } from 'react';

import { createArray } from '@/utils/paginationHelper';

interface IPaginationProps {
  data: number[];
}

const Pagination = ({ data }: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const allResults = useMemo(() => createArray(data.length), [data]);

  const handlePagination = () => {
    if (allResults.indexOf(currentPage) === 4) return;
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex h-[52px] w-full items-center gap-2 rounded bg-[#f1f1f1] p-1 text-black md:w-fit">
        {allResults.length > 0 &&
          allResults.map((num, i) => (
            <button
              key={i}
              className={`h-full w-1/5 rounded md:w-[42px] ${
                currentPage === num
                  ? 'bg-[#1B4B66] text-white'
                  : 'bg-gray-400 text-[#1B4B66]'
              }`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
      </div>
      <button
        className="h-[52px] rounded bg-[#f1f1f1] px-6 text-black"
        onClick={handlePagination}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
