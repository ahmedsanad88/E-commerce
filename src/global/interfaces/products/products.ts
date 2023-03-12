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

// export interface IProductCardProps {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
//   thumbnail: string;
//   rating?: number;
//   discountPercentage?: number;
// }

// interface IProductDetailsProps {
//   title: string;
//   subTitle: string;
//   stars: number;
//   price: number;
//   discount: number;
//   image: string | StaticImageData;
// }
