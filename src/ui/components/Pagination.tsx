import React, { useState } from 'react';

interface IPaginationProps {
  data: number[];
}

const Pagination = ({ data }: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const allResults = useMemo(() => data, [data]);
  // const [showingData, setShowingData] = useState<number[]>(() =>
  //   allResults.slice(0, 6)
  // );

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[52px] w-fit items-center gap-2 rounded bg-[#f1f1f1] p-1 text-black">
        {data.map((_, i) => (
          <button
            key={i}
            className={`h-full w-[42px] rounded ${
              currentPage === i + 1
                ? 'bg-[#1B4B66] text-white'
                : 'bg-gray-400 text-[#1B4B66]'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="h-[52px] rounded bg-[#f1f1f1] px-6 text-black"
        onClick={() => setCurrentPage((prev) => (prev + 1 > 5 ? 5 : prev + 1))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
