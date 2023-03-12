import type { NextApiRequest, NextApiResponse } from 'next';

import type { ICategory } from '@/global/interfaces/categories/category';
import { getSearchProducts } from '@/global/server/search/getSearchProducts';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  const { searchTerm } = req.query;

  const searchData: ICategory = await getSearchProducts(searchTerm as string);

  res.status(200).json(searchData.products);
}
