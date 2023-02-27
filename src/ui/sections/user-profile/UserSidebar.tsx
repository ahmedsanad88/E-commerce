import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { changeOption } from '@/redux/slices/user-slice/userSidebarSlice';
import type { RootState } from '@/redux/store';
import { useDispatch, useSelector } from '@/redux/store';

const userSidebarData = [
  'Personal Information',
  'Refer and Earn',
  'My Orders',
  'My Wishlist',
  'My Reviews',
  'My Address Book',
  'My Saved Cards',
] as const;
type Option = typeof userSidebarData;
export type AllOptions = Option[number];

const UserSidebar = () => {
  // const [selectedOption, setSelectedOption] = useState<AllOptions>(
  //   'Personal Information'
  // );
  const { selectedOption } = useSelector(
    (state: RootState) => state.userSidebar
  );
  const dispatch = useDispatch();

  return (
    <div className="flex w-full flex-row gap-2 overflow-x-auto whitespace-nowrap rounded-lg bg-[#f1f1f1] py-3 font-medium lg:w-[286px] lg:flex-col lg:overflow-hidden">
      {userSidebarData.map((item, idx) => (
        <div
          className={`relative flex w-full cursor-pointer items-center justify-between gap-2 border-l-4 border-transparent py-4 pr-2 pl-1 ${
            selectedOption === item
              ? 'user-profile-option font-bold text-[#1B4B66] lg:font-medium'
              : 'text-[#13101E]'
          }`}
          key={idx}
          onClick={() => dispatch(changeOption({ selectedOption: item }))}
        >
          <h2>{item}</h2>
          <IoIosArrowForward className="hidden text-2xl lg:block" />
        </div>
      ))}
    </div>
  );
};

export default UserSidebar;
