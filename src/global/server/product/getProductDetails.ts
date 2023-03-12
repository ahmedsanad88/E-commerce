import ApiClient from '@/global/utils/ApiClient';

export const getProductDetails = async (productId: string) => {
  return ApiClient.get(`/${productId}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
