import { axiosInstance } from 'shared/helpers/api/api';

const PATH = ''

export const {{pascalCase name}}RequestApi = () => {
  return axiosInstance().get(PATH);
};
