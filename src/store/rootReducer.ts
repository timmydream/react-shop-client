import { combineReducers } from 'redux';
import { categoryReducer } from './reducers/categoryReducer';
import { itemReducer } from './reducers/itemReducer';

export const rootReducer = combineReducers({
  itemsList: itemReducer,
  categoriesList: categoryReducer
});
