import React from 'react';
import { Modal, Input, Form, Select } from 'antd';

export const ItemFormModal = (props: any) => {
  const [form] = Form.useForm();

  return (
    <Modal
      width={300}
      title="Добавить товар"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values: any) => {
            form.resetFields();
            props.onCreate(values, props.category);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form layout="horizontal" form={form}>
        <Form.Item name="category">
          <Select placeholder="Категория">
            {props.categoriesList.map((category: any) => {
              return (
                <Select.Option key={category._id} value={category._id}>
                  {category.category}
                </Select.Option>
              );
            })}
            <Select.Option key={0} value={''}>
              Без категории
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="title" rules={[{ required: true, message: 'Введите название!' }]}>
          <Input placeholder="Название" />
        </Form.Item>
        <Form.Item name="purchase" rules={[{ required: true, message: 'Введите название!' }]}>
          <Input placeholder="Закупочная стоимость" type="number" />
        </Form.Item>
        <Form.Item name="price" rules={[{ required: true, message: 'Введите название!' }]}>
          <Input placeholder="Розничная цена" type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
