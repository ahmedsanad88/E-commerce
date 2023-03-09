import type { StaticImageData } from 'next/image';

import cat1 from '@/public/assets/images/cat1.png';
import cat2 from '@/public/assets/images/cat2.png';
import cat3 from '@/public/assets/images/cat3.png';
import cat4 from '@/public/assets/images/cat4.png';
import cat5 from '@/public/assets/images/cat5.png';
import cat6 from '@/public/assets/images/cat6.png';

export const collections: {
  image: string | StaticImageData;
  alt: string;
}[] = [
  {
    alt: 'Personal Care',
    image: cat2,
  },
  {
    alt: 'Handbags',
    image: cat1,
  },
  {
    alt: 'Wrist Watches',
    image: cat4,
  },
  {
    alt: 'Sun Glasses',
    image: cat3,
  },
  {
    alt: 'Jewelry',
    image: cat5,
  },
  {
    alt: 'apparel',
    image: cat6,
  },
];
