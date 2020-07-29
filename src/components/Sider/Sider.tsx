import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { fetchCategories, fetchItems, filterItems, removeCategory, getCategory } from '../../store/actions';
import { StyledSider } from '../../styles/StyledSider';
import { SiderProps } from '../../interfaces/interfaces';
import { CategoryConfirmButton } from '../CategoryConfirmButton/CategoryConfirmButton';

const Sider = (props: SiderProps) => {
  React.useEffect(() => {
    props.fetchCategories();
  }, []);
  return (
    <StyledSider>
      <Menu mode="inline" style={{ height: '100%' }}>
        {props.categoriesList.map((category: any) => {
          return (
            <Menu.Item
              onClick={() => {
                props.filterItems(category._id);
                props.getCategory(category._id);
              }}
              key={category._id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {category.category}
              <CategoryConfirmButton
                removeCategory={props.removeCategory}
                categoryId={category._id}
              />
            </Menu.Item>
          );
        })}
        <Menu.Item
          onClick={() => {
            props.filterItems('empty');
            props.getCategory('empty');
          }}
        >
          Без категории
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            props.filterItems('all');
            props.getCategory('all');
          }}
        >
          Все
        </Menu.Item>
      </Menu>
    </StyledSider>
  );
};

const mapStateToProps = (state: any) => ({
  categoriesList: state.categoriesList.categoriesList,
});

const mapDispatchToProps = {
  fetchCategories,
  fetchItems,
  filterItems,
  removeCategory,
  getCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Sider as React.FC);
