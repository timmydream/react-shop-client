import React from 'react';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../styles/GlobalStyles';
import { LayoutWrapper } from '../styles/LayoutWrapper';
import { Layout } from 'antd';
import Sider from '../components/Sider/Sider';
import ItemTable from '../components/ItemTable/ItemTable';
import { Header } from '../components/Header/Header';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Layout.Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0' }}>
          <Sider />
          <LayoutWrapper>
            <ItemTable />
          </LayoutWrapper>
        </Layout>
      </Layout.Content>
    </Layout>
  );
};
