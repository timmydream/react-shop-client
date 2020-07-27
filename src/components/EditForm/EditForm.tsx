import React, { useState } from 'react';
import { Button } from 'antd';
import { EditFormModal } from './EditFormModal/EditFormModal';

export const EditForm = (props: any) => {

  const [visible, setVisible] = useState(false);

  const onCreate = (id: any, values: any, prevItem: any) => {
    props.editItem(id, values, prevItem);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Изменить
      </Button>
      <EditFormModal
        categoriesList={props.categoriesList}
        item={props.item}
        visible={visible}
        onCreate={onCreate}
        onCancel={onCancel}
      />
    </>
  );
};