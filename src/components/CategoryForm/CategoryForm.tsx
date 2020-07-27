import React, { useState } from 'react';
import { Button } from 'antd';
import { CategoryFormModal } from './CategoryFormModal/CategoryFormModal';
import { connect } from 'react-redux';
import { addCategory } from '../../store/actions';

const CategoryForm = (props: any) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    props.addCategory(values);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        className='form-button'
        onClick={() => {
          setVisible(true);
        }}
      >
        Добавить категорию
      </Button>
      <CategoryFormModal visible={visible} onCreate={onCreate} onCancel={onCancel} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    itemsList: state.itemsList.filteredItemsList,
    categoriesList: state.categoriesList.categoriesList
  };
};

const mapDispatchToProps = {
  addCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
