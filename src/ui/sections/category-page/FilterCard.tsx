import React, { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

interface IFilterCardProps {
  title: string;
  data: string[];
}

const FilterCard = ({ title, data }: IFilterCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full cursor-pointer border-b-2 border-gray-100 py-4"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="font-medium text-black">{title}</h3>
        {isOpen ? (
          <HiMinus
            className="cursor-pointer text-2xl text-black"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
        ) : (
          <HiPlus
            className="cursor-pointer text-2xl text-black"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <div className={`w-full ${isOpen ? 'block h-fit' : 'hidden h-0'}`}>
        {data.length > 0 ? (
          data.map((item, i) => (
            <div
              className="flex h-[50px] items-center bg-white px-4 hover:bg-gray-100"
              key={i}
            >
              <input
                id={item}
                type="checkbox"
                value=""
                className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor={item}
                className="ml-2 w-full cursor-pointer font-medium text-gray-900"
              >
                {item}
              </label>
            </div>
          ))
        ) : (
          <p>No Options available.</p>
        )}
      </div>
    </div>
  );
};

export default FilterCard;
