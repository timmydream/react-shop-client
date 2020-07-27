import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { addItem, removeItem, editItem, fetchItems } from '../../store/actions';
import { EditForm } from '../EditForm/EditForm';
import { StyledTable } from '../../styles/StyledTable';
import { ItemConfirmButton } from '../ItemConfirmButton/ItemConfirmButton';

const ItemTable = (props: any) => {
  React.useEffect(() => {
    props.fetchItems();
  }, []);

  const data = props.itemsList.map((item: any) => {
    return {
      category: item.category,
      key: item._id,
      title: item.title,
      purchase: item.purchase,
      price: item.price,
      actions: (
        <>
          <ItemConfirmButton item={item} removeItem={props.removeItem} />
          <EditForm item={item} editItem={props.editItem} categoriesList={props.categoriesList} />
        </>
      ),
    };
  });

  return <StyledTable columns={columns} pagination={false} dataSource={data} />;
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
  },
  {
    title: 'Категория',
    dataIndex: 'category'
  },
  {
    title: 'Название товара',
    dataIndex: 'title',
  },
  {
    title: 'Цена/закуп',
    dataIndex: 'purchase',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
  },
  {
    title: 'Действия',
    dataIndex: 'actions',
  },
];

const mapStateToProps = (state: any) => {
  return {
    itemsList: state.itemsList.itemsList,
    categoriesList: state.categoriesList.categoriesList,
  };
};

const mapDispatchToProps = {
  fetchItems,
  addItem,
  removeItem,
  editItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);
