// import { useRouter } from 'next/router';

import type { InferGetServerSidePropsType } from 'next';

import type { IProduct } from '@/global/interfaces/products/products';
import ApiClientLocal from '@/global/utils/ApiClientLocal';
import { Meta } from '@/layouts/Meta';
import cream from '@/public/assets/images/cream.png';
import girl from '@/public/assets/images/girl.png';
import banner from '@/public/assets/images/makeup-banner.png';
import { Main } from '@/templates/Main';
import Banner from '@/ui/components/Banner';
import SubBanner from '@/ui/components/SubBanner';
import Brands from '@/ui/sections/home/Brands';
import CategoryCard from '@/ui/sections/home/CategoryCard';
import Collections from '@/ui/sections/home/Collections';
import NewArrivals from '@/ui/sections/home/NewArrivals';

const Index = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Buy/2 E-commerce"
          description="Online shopping from one of the earth's biggest online stores provides wide range of selection of apparel & accessories, jewelry, beauty & personal care & just about anything else.With Buy/2, You will find the best deals on your favorite products."
        />
      }
    >
      <Banner />
      <NewArrivals products={data} />
      <Collections />
      <Brands />
      <div className="flex w-full flex-col gap-10">
        <SubBanner
          image={banner}
          isImageRight={true}
          head1="Makeup Accessories"
          head2="from Top Brands"
          text="lifestyle"
          direction="left-7"
          color="text-[#97451F]"
          isThinHeading={false}
        />
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <CategoryCard
            image={cream}
            head1="Skincare"
            head2="Essentials"
            btnBgColor="bg-white"
            btnColor="text-[#A53F64]"
          />
          <CategoryCard
            image={girl}
            head1="Facepacks"
            head2="& Peels"
            btnBgColor="bg-gray-400"
            btnColor="text-[#1B4B66]"
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;

export async function getServerSideProps() {
  const arrOfCategories = ['fragrances', 'tops', 'womens-shoes'];
  const randomCate = arrOfCategories[Math.round(Math.random() * 2)];

  const res = await ApiClientLocal.get(`/api/category/${randomCate}`);
  const data: IProduct[] = await res.data;

  return {
    props: { data },
  };
}
