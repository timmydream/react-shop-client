import { Axios } from '../services/api';

export const getCategory = (category: any) => {
  return { type: 'ITEMS_CATEGORY', payload: category };
};

export const fetchCategories = () => (dispatch: any) => {
  Axios.fetchCategories()
    .then((res) => {
      dispatch({
        type: 'CATEGORIES_FETCH_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchItems = () => (dispatch: any) => {
  dispatch({ type: 'ITEMS_FETCH_REQUEST' });
  Axios.fetchItems()
    .then((res) => {
      dispatch({
        type: 'ITEMS_FETCH_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filterItems = (category: any) => (dispatch: any) => {
  dispatch({ type: 'ITEMS_FETCH_REQUEST' });
  Axios.fetchCategory(category)
    .then((response: any) =>
      dispatch({
        type: 'ITEMS_FETCH_SUCCESS',
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addItem = (item: any, currentCategory: any) => (dispatch: any) => {
  Axios.postItem(item)
    .then(() => dispatch(filterItems(currentCategory)))
    .catch((err) => console.log(err));
};

export const removeItem = (id: any, currentCategory: any) => (dispatch: any) => {
  Axios.deleteItem(id)
    .then(() => dispatch(filterItems(currentCategory)))
    .catch((err) => console.log(err));
};

export const editItem = (id: any, item: any, currentCategory: any) => (dispatch: any) => {
  Axios.editItem(id, item)
    .then(() => dispatch(filterItems(currentCategory)))
    .catch((err) => console.log(err));
};

export const addCategory = (category: any) => (dispatch: any) => {
  Axios.postCategory(category)
    .then(() => dispatch(fetchCategories()))
    .catch((err) => console.log(err));
};

export const removeCategory = (id: any) => (dispatch: any) => {
  Axios.deleteCategory(id)
    .then(() => {
      dispatch(fetchCategories());
      dispatch(fetchItems());
    })
    .catch((err) => console.log(err));
};
