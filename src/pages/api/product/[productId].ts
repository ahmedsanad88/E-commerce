import type { NextApiRequest, NextApiResponse } from 'next';

import type { IProduct } from '@/global/interfaces/products/products';
import { getProductDetails } from '@/global/server/product/getProductDetails';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  const { productId } = req.query;

  const productData: IProduct = await getProductDetails(productId as string);

  res.status(200).json(productData);
}
