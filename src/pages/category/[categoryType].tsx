import { useRouter } from 'next/router';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import category1 from '@/public/assets/images/category1.png';
import { Main } from '@/templates/Main';
import SubBanner from '@/ui/components/SubBanner';
import ProductsList from '@/ui/sections/category-page/ProductsList';

const Categories = () => {
  const router = useRouter();
  const { categoryType } = router.query;

  return (
    <Main
      meta={
        <Meta
          title="Categories"
          description={`List of ${categoryType} category.`}
        />
      }
    >
      <SubBanner
        image={category1}
        isImageRight={false}
        head1="UPTO 70% OFF"
        head2="BLACK FRIDAY"
        direction="right-7"
        color="text-[#B00020]"
        isThinHeading={true}
      />
      <div className="mt-14 mb-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
        <span className="text-[#1B4B66]">Home</span>
        <MdKeyboardArrowRight className="text-2xl" />
        <span className="text-[#626262]">Handbag</span>
      </div>
      <h2 className="text-2xl font-bold text-[#1B4B66] lg:text-5xl">
        Handbags
      </h2>
      {/* <FilterOptions /> */}
      <ProductsList />
    </Main>
  );
};

export default Categories;
