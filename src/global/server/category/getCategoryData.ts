import ApiClient from '@/global/utils/ApiClient';

export const getCategoryData = async (category: string) => {
  return ApiClient.get(`/${category}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
