import { Axios } from '../services/api';

export const getCategory = (category: any) => {
  return { type: 'ITEMS_CATEGORY', payload: category }
}

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
  Axios.fetchCategory(category).then((response: any) =>
    dispatch({
      type: 'ITEMS_FETCH_SUCCESS',
      payload: response.data,
    })
  );
  dispatch({ type: 'ITEMS_CATEGORY', payload: category });
};

export const addItem = (item: any) => (dispatch: any) => {
  Axios.postitem(item).then((response: any) =>
    dispatch({
      type: 'ITEM_ADD',
      payload: response.data
    })
  );
};

export const removeItem = (id: any) => (dispatch: any) => {
  Axios.deleteItem(id).then((response: any) =>
    dispatch({
      type: 'ITEM_REMOVED',
      payload: response.data._id,
    })
  );
};

export const editItem = (id: any, item: any, prevItem: any) => (dispatch: any) => {
  Axios.editItem(id, item)
    .then(() => {
      dispatch(filterItems(prevItem.category));
    })
    .catch((err) => console.log(err));   
};

export const addCategory = (category: any) => (dispatch: any) => {
  Axios.postCategory(category).then((response: any) =>
    dispatch({
      type: 'CATEGORY_ADD',
      payload: response.data,
    })
  );
};

export const removeCategory = (id: any) => (dispatch: any) => {
  Axios.deleteCategory(id).then((response: any) =>
    dispatch({
      type: 'CATEGORY_REMOVED',
      payload: response.data.category,
    })
  );
  return dispatch(fetchItems());
};
