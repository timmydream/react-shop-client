export interface SiderProps {
  fetchCategories: () => void;
  fetchItems: () => void,
  filterItems: (category: string) => void;
  removeCategory: (id: number) => void;
  categoriesList: CategoriesList[];
  itemsList: ItemsList[];
}

export interface ItemsList {
  category: string;
  title: string;
  price: number;
  purchase: number;
}

export interface CategoriesList {
  category: string;
}