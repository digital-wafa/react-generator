import { axiosInstance } from 'shared/helpers/api/api';

const PATH = ''

export const adherentsRequestApi = () => {
  return axiosInstance().get(PATH);
};
