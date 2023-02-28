import type { StaticImageData } from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import cat1 from '@/public/assets/images/cat1.png';
import { Main } from '@/templates/Main';
import ImageSwiper from '@/ui/components/ImageSwiper';
import ProductDesc from '@/ui/sections/product-page/ProductDesc';
import ProductDetails from '@/ui/sections/product-page/ProductDetails';

const productA: {
  title: string;
  subTitle: string;
  stars: number;
  price: number;
  discount: number;
  desc: string;
  image: StaticImageData | string;
} = {
  title: 'Coach',
  subTitle: 'Leather Coach Bag with adjustable starps.',
  stars: 4,
  price: 54.69,
  discount: 50,
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 

Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 

Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.`,
  image: cat1,
};

const ProductPage = () => {
  return (
    <Main meta={<Meta title="Product A" description="Product description" />}>
      <div className="min-h-screen">
        <div className="my-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
          <span className="text-[#1B4B66]">Home</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#1B4B66]">Handbag</span>
          <MdKeyboardArrowRight className="text-2xl" />
          <span className="text-[#626262]">bag</span>
        </div>
        <div className="mb-12 flex flex-col gap-6 xl:flex-row">
          <ImageSwiper />
          <div className="flex-1">
            <ProductDetails {...productA} />
          </div>
        </div>
        <div>
          <ProductDesc
            productDescription={productA.desc}
            relatedProducts="Related Products"
            reviews="Good Item"
          />
        </div>
      </div>
    </Main>
  );
};

export default ProductPage;
