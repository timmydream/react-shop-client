import React, { useState } from 'react';
import { MinusOutlined } from '@ant-design/icons';
import { CategoryConfirmModal } from './CategoryConfirmModal/CategoryConfirmModal';

export const CategoryConfirmButton = (props: any) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <MinusOutlined
        onClick={() => {
          setVisible(true);
        }}
      />
      <CategoryConfirmModal
        categoryId={props.categoryId}
        removeCategory={props.removeCategory}
        visible={visible}
        onCancel={onCancel}
      />
    </>
  );
};
