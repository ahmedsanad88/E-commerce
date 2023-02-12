import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface IRatingStarProps {
  rate: number;
}

const RatingStar = ({ rate }: IRatingStarProps) => {
  const [starNumbers, setStarNumbers] = useState(0);

  useEffect(() => {
    const numOfStars = Math.round(rate);
    setStarNumbers(numOfStars);
  }, [rate]);

  return (
    <div className="flex items-center gap-1">
      {[...new Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-2xl ${
            i < starNumbers ? 'text-[#FF8C4B]' : 'text-[#F1F1F1]'
          }`}
        />
      ))}
      <p className="ml-4 text-sm text-gray-400">(45) Ratings</p>
    </div>
  );
};

export default RatingStar;
