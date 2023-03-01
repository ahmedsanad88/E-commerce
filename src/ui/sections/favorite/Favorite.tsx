import React from 'react';

import type { IFavSliceInitialState } from '@/redux/slices/fav-slice/favSlice';
import type { RootState } from '@/redux/store';
import { useSelector } from '@/redux/store';

import FavTemplateCard from './FavTemplateCard';

const Favorite = () => {
  const { data }: { data: IFavSliceInitialState[] } = useSelector(
    (state: RootState) => state.favorite
  );

  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((item, idx) => (
            <FavTemplateCard {...item} key={idx} />
          ))}
        </div>
      ) : (
        <p>No Items added to the favorite list.</p>
      )}
    </div>
  );
};

export default Favorite;
