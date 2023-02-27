import React from 'react';

import type { RootState } from '@/redux/store';
import { useSelector } from '@/redux/store';

import Addresses from './user-option/Addresses';
import Cards from './user-option/Cards';
import Orders from './user-option/orders/Orders';
import PersonalInfo from './user-option/PersonalInfo';
import ReferEarn from './user-option/ReferEarn';
import Reviews from './user-option/Reviews';
import Wishlist from './user-option/Wishlist';
import type { AllOptions } from './UserSidebar';

const showContent = {
  'Personal Information': <PersonalInfo />,
  'Refer and Earn': <ReferEarn />,
  'My Orders': <Orders />,
  'My Wishlist': <Wishlist />,
  'My Reviews': <Reviews />,
  'My Address Book': <Addresses />,
  'My Saved Cards': <Cards />,
};

const UserContent = () => {
  const { selectedOption }: { selectedOption: AllOptions } = useSelector(
    (state: RootState) => state.userSidebar
  );

  return <div className="flex-1">{showContent[selectedOption]}</div>;
};

export default UserContent;
