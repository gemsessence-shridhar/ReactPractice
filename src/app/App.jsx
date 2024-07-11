"use client"

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getSelectedMenuKeys = () => {
    if (pathName === "/") {
      return ['1']
    }
    else if (pathName.startsWith("/authors")) {
      return ['2']
    }
    else if (pathName.startsWith("/posts")) {
      return ['3']
    }
  }

  const handleMenuSelect = ({ key }) => {
    switch(key) {
      case "1": {
        router.push("/")
        break;
      }
      case "2": {
        router.push("/authors")
        break;
      }
      case "3": {
        router.push("/posts")
        break;
      }
    } 
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="px-4 py-2">
          <h1 className='text-3xl text-white font-bold'>Library</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={getSelectedMenuKeys()}
          onSelect={handleMenuSelect}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Books',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Authors',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Posts',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />


        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;