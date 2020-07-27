import React from 'react';
import { Modal, Typography } from 'antd';

export const ItemConfirmModal = (props: any) => {
  return (
    <Modal
      width={300}
      title="Подтверждение"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={() => props.removeItem(props.item._id)}
    >
      <Typography.Text>Точно удалить товар '{props.item.title}'?</Typography.Text>
    </Modal>
  );
};
