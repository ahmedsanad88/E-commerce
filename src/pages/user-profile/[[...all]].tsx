import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import PageNesting from '@/ui/components/PageNesting';
import UserContent from '@/ui/sections/user-profile/UserContent';
import UserSidebar from '@/ui/sections/user-profile/UserSidebar';

const UserProfile = () => {
  const router = useRouter();
  const { all } = router.query;
  // const { selectedOption }: { selectedOption: AllOptions } = useSelector(
  //   (state: RootState) => state.userSidebar
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(router.pathname);
  // }, [router.pathname]);

  // if (!all) {
  //   router.push('/user-profile/personal-information');
  // }

  return (
    <Main
      meta={
        <Meta
          title="User Profile"
          description="Edit and check your profile, control all process across you data."
        />
      }
    >
      <div className="min-h-screen">
        {/* <div className="mt-6 mb-8 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#1B4B66]">User Profile</span>
          {selectedOption && (
            <>
              <MdKeyboardArrowRight className="text-2xl" />
              <span className="text-[#626262]">{selectedOption}</span>
            </>
          )}
        </div> */}
        {typeof all === 'object' && all.length > 0 ? (
          <PageNesting category="User Profile" data={[...all]} />
        ) : (
          <PageNesting category="User Profile" />
        )}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          <UserSidebar />
          <UserContent path={all || ['']} />
        </div>
      </div>
    </Main>
  );
};

export default UserProfile;
