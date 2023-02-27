import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import type { RootState } from '@/redux/store';
import { useSelector } from '@/redux/store';
import { Main } from '@/templates/Main';
import UserContent from '@/ui/sections/user-profile/UserContent';
import type { AllOptions } from '@/ui/sections/user-profile/UserSidebar';
import UserSidebar from '@/ui/sections/user-profile/UserSidebar';

const UserProfile = () => {
  const { selectedOption }: { selectedOption: AllOptions } = useSelector(
    (state: RootState) => state.userSidebar
  );
  return (
    <Main
      meta={
        <Meta title="User Profile" description="Edit and Update your profile" />
      }
    >
      <div className="min-h-screen">
        <div className="mt-6 mb-8 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#1B4B66]">User Profile</span>
          {selectedOption && (
            <>
              <MdKeyboardArrowRight className="text-2xl" />
              <span className="text-[#626262]">{selectedOption}</span>
            </>
          )}
        </div>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          <UserSidebar />
          <UserContent />
        </div>
      </div>
    </Main>
  );
};

export default UserProfile;
