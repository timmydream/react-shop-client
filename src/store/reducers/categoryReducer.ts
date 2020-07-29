export const categoryReducer = (state: any = { categoriesList: [] }, action: any) => {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCESS':
      return { ...state, categoriesList: action.payload };
    default:
      return state;
  }
};