import React from 'react';
import { Modal, Typography } from 'antd';

export const CategoryConfirmModal = (props: any) => {
  return (
    <Modal
      width={300}
      title="Хотите удалить категорию?"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={() => props.removeCategory(props.categoryId)}
    >
      <Typography.Text>Все товары этой категории будут перемещеный в 'Без категории'</Typography.Text>
    </Modal>
  );
};
