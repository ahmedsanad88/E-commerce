import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IPageNestingProps {
  category: string;
  data?: string[];
}

const PageNesting = ({ category, data }: IPageNestingProps) => {
  return (
    <div className="mt-6 mb-8 flex w-full flex-wrap items-center gap-4 text-center font-medium text-black lg:text-left">
      <span className="text-[#1B4B66]">Home</span>
      {category && (
        <>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className={`${data ? 'text-[#1B4B66]' : 'text-[#626262]'}`}>
            {category}
          </span>
        </>
      )}
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <MdKeyboardArrowRight className="text-2xl" />
            <span
              className={`capitalize ${
                idx === data.length - 1 ? 'text-[#626262]' : 'text-[#1B4B66]'
              }`}
            >
              {item.replaceAll('-', ' ')}
            </span>
          </div>
        ))}
    </div>
  );
};

export default PageNesting;
