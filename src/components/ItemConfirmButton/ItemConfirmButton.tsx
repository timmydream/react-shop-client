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
        removeItem={props.removeItem}
        visible={visible}
        onCancel={onCancel}
      />
    </>
  );
};
