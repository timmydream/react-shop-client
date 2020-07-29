import React, { useState } from 'react';
import { Button } from 'antd';
import { ItemConfirmModal } from './ItemConfirmModal/ItemConfirmModal';

export const ItemConfirmButton = (props: any) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Удалить
      </Button>
      <ItemConfirmModal
        item={props.item}
        currentCategory={props.currentCategory}
        removeItem={props.removeItem}
        visible={visible}
        onCancel={onCancel}
      />
    </>
  );
};
