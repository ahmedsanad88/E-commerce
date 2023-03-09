import type { NextApiRequest, NextApiResponse } from 'next';

import { allCategories } from '@/data/apiCategories';
import { getCategoryData } from '@/global/server/category/getCategoryData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  const { categoryId } = req.query;

  const chosenCategory: string =
    allCategories[categoryId as keyof typeof allCategories];

  const cateData = await getCategoryData(chosenCategory);

  res.status(200).json(cateData.products);
}
