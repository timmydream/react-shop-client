import React from 'react';
import { Modal, Input, Form } from 'antd';

export const CategoryFormModal = (props: any) => {
  const [form] = Form.useForm();

  return (
    <Modal
      width={300}
      title="Добавить категорию"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values: any) => {
            form.resetFields();
            props.onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form layout="horizontal" form={form}>
        <Form.Item
          name="category"
          rules={[
            { required: true, message: 'Введите название!' },
            { max: 10, message: 'Название не должно превышать 10 символов!' },
          ]}
        >
          <Input placeholder="Название" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
