import axios from 'axios';

const url = 'https://sleepy-chamber-68489.herokuapp.com';

export const Axios = {
  fetchItems: () => axios.get(`${url}/items`),
  fetchCategories: () => axios.get(`${url}/categories`),
  fetchCategory: (category: string) => axios.get(`${url}/categories/${category}`),
  postitem: (item: any) => axios.post(`${url}/items`, item),
  deleteItem: (id: string) => axios.delete(`${url}/items/${id}`),
  editItem: (id: string, item: any) => axios.put(`${url}/items/${id}`, item),
  postCategory: (category: string) => axios.post(`${url}/categories`, category),
  deleteCategory: (id: string) => axios.delete(`${url}/categories/${id}`),
};
