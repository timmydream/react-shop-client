export const itemReducer = (state: any = { itemsList: [], category: 'all' }, action: any) => {
  console.log(state)
  switch (action.type) {
    case 'ITEMS_FETCH_REQUEST':
      return { ...state, loading: true }
    case 'ITEMS_FETCH_SUCCESS':
      return { ...state, itemsList: action.payload, loading: false };
    case 'ITEMS_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
