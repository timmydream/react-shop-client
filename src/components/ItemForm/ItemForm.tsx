import React, { useState } from 'react';
import { Button } from 'antd';
import { ItemFormModal } from './ItemFormModal/ItemFormModal';
import { addItem } from '../../store/actions';
import { connect } from 'react-redux';

const ItemForm = (props: any) => {

  const [visible, setVisible] = useState(false);

  const onCreate = (values: any, category: any) => {
    props.addItem(values, category);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <Button
        className='form-button'
        onClick={() => {
          setVisible(true);
        }}
      >
        Добавить товар
      </Button>
      <ItemFormModal
        categoriesList={props.categoriesList}
        visible={visible}
        onCreate={onCreate}
        onCancel={onCancel}
        category={props.category}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    category: state.itemsList.category,
    categoriesList: state.categoriesList.categoriesList
  };
};

const mapDispatchToProps = {
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);