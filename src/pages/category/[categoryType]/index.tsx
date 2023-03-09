import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import category1 from '@/public/assets/images/category1.png';
import { Main } from '@/templates/Main';
import PageNesting from '@/ui/components/PageNesting';
import SubBanner from '@/ui/components/SubBanner';
import FilterOptions from '@/ui/sections/category-page/FilterOptions';
import ProductsList from '@/ui/sections/category-page/ProductsList';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

/**
 * 
 * {
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>
 */
const Categories = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
      <div className="mt-16 w-full md:mt-8">
        <SubBanner
          image={category1}
          isImageRight={false}
          head1="UPTO 70% OFF"
          head2="BLACK FRIDAY"
          direction="right-7"
          color="text-[#B00020]"
          isThinHeading={true}
        />
        {/* <div className="mt-14 mb-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#626262]">Handbag</span>
        </div> */}
        {categoryType && categoryType.constructor === String ? (
          <PageNesting category="category" data={[categoryType]} />
        ) : (
          <PageNesting category="category" />
        )}

        <h2 className="text-2xl font-bold text-[#1B4B66] lg:text-5xl">
          Handbags
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <FilterOptions />
          <ProductsList products={data} />
        </div>
      </div>
    </Main>
  );
};

export default Categories;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { categoryType } = ctx.query;
  if (!categoryType) {
    return {
      props: { data: [] },
    };
  }
  const res = await fetch(`http://localhost:3000/api/category/${categoryType}`);
  const data: IProduct[] = await res.json();

  return {
    props: { data },
  };
}
