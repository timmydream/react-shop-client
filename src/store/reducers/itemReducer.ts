export const itemReducer = (state: any = { itemsList: [], category: '' }, action: any) => {
  switch (action.type) {
    case 'ITEMS_CATEGORY':
      return { ...state, category: action.payload };
    case 'ITEMS_FETCH_SUCCESS':
      return { ...state, itemsList: action.payload };
    case 'ITEM_ADD':
      return state.category === action.payload.category
        ? { ...state, itemsList: [...state.itemsList, action.payload] }
        : { ...state };
    case 'ITEM_REMOVED':
      return {
        ...state,
        itemsList: state.itemsList.filter((item: any) => item._id !== action.payload),
      };
    case 'ITEM_EDITED':
      return {
        ...state,
        itemsList: state.itemsList.filter((x: any) => x._id !== action.payload),
      };
    case 'CATEGORY_REMOVED':
      const arr = state.itemsList.map((item: any) => {
        if (action.payload === item.category) {
          item.category = 'empty';
        }
        return item;
      });
      return { ...state, itemsList: arr };
    default:
      return state;
  }
};
