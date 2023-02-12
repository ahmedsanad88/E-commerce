import { MdKeyboardArrowRight } from 'react-icons/md';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import ImageSwiper from '@/ui/components/ImageSwiper';
import ProductDetails from '@/ui/sections/product-page/ProductDetails';

const productA = {
  title: 'Coach',
  subTitle: 'Leather Coach Bag with adjustable starps.',
  stars: 4,
  price: 54.69,
  discount: 50,
};

const ProductPage = () => (
  <Main meta={<Meta title="Product A" description="Product description" />}>
    <div>
      <div className="mt-14 mb-6 flex w-full items-center gap-4 text-center font-medium text-black lg:text-left">
        <span className="text-[#1B4B66]">Home</span>
        <MdKeyboardArrowRight className="text-2xl" />
        <span className="text-[#1B4B66]">Handbag</span>
        <MdKeyboardArrowRight className="text-2xl" />
        <span className="text-[#626262]">bag</span>
      </div>
      <div className="flex gap-6">
        <ImageSwiper />
        <div className="flex-1">
          <ProductDetails {...productA} />
        </div>
      </div>
    </div>
  </Main>
);

export default ProductPage;
