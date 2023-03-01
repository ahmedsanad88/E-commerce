import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Addresses from './user-option/Addresses';
import Cards from './user-option/Cards';
import Orders from './user-option/orders/Orders';
import PersonalInfo from './user-option/PersonalInfo';
import ReferEarn from './user-option/ReferEarn';
import Reviews from './user-option/Reviews';
import Wishlist from './user-option/Wishlist';

const showContent = {
  'personal-information': <PersonalInfo />,
  'refer-and-earn': <ReferEarn />,
  'my-orders': <Orders />,
  'my-wishlist': <Wishlist />,
  'my-reviews': <Reviews />,
  'my-address-book': <Addresses />,
  'my-saved-cards': <Cards />,
};

interface IUserContentProps {
  path: string | string[];
}

const UserContent = ({ path }: IUserContentProps) => {
  const [targetContent, setTargetContent] =
    useState<keyof typeof showContent>();

  const router = useRouter();

  // const { selectedOption }: { selectedOption: AllOptions } = useSelector(
  //   (state: RootState) => state.userSidebar
  // );

  useEffect(() => {
    if (path[0] === '') {
      setTargetContent('personal-information');
      return;
    }
    if (typeof path === 'object' && path[0]) {
      if (Object.hasOwn(showContent, path[0])) {
        setTargetContent(path[0] as keyof typeof showContent);
      } else {
        router.replace('/404');
      }
    }
  }, [path]);

  return (
    <div className="flex-1">
      {targetContent ? showContent[targetContent] : <p>Loading</p>}
    </div>
  );
};

export default UserContent;
