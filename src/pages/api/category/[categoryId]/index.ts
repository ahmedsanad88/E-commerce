import type { NextApiRequest, NextApiResponse } from 'next';

import { getCategoryData } from '@/global/server/category/getCategoryData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  const { categoryId } = req.query;

  const cateData = await getCategoryData(categoryId as string);

  res.status(200).json(cateData.products);
}
