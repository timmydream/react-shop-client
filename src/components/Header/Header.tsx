import React from 'react';
import 'antd/dist/antd.css';
import { StyledHeader } from '../../styles/StyledHeader';
import CategoryForm from '../CategoryForm/CategoryForm';
import ItemForm from '../ItemForm/ItemForm';

export const Header = () => {
  return (
    <StyledHeader>
      <CategoryForm />
      <ItemForm />
    </StyledHeader>
  );
};
