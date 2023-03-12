import ApiClient from '@/global/utils/ApiClient';

export const getSearchProducts = async (searchTerm: string) => {
  return ApiClient.get(`/search?q=${searchTerm}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
