export const categoryReducer = (state: any = { categoriesList: [] }, action: any) => {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCESS':
      return { ...state, categoriesList: action.payload };
    case 'CATEGORY_ADD':
      return { ...state, categoriesList: [...state.categoriesList, action.payload] };
    case 'CATEGORY_REMOVED':
      return {
        ...state,
        categoriesList: state.categoriesList.filter(
          (category: any) => category.category !== action.payload
        ),
      };
    default:
      return state;
  }
};