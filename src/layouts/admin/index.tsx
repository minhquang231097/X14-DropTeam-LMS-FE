import React, { PropsWithChildren, useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Button, Layout, Space, Input, Avatar, Typography, Image } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  TranslationOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons'
import { MdDarkMode } from 'react-icons/md'
import Logo from '@/assets/images/logo/logo-with-shadow.png'
import { ColorModeContext } from '@/contexts/colorMode'

interface LayoutProps extends PropsWithChildren {
  sider: React.ReactNode
  content: React.ReactNode
}

const { Header, Footer, Sider, Content } = Layout
const { Search } = Input

const AdminLayout: React.FC<LayoutProps> = ({ sider, content }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { mode, setMode } = useContext(ColorModeContext)
  const onSearch = (value: string) => console.log(value)

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    color: mode === 'light' ? 'black' : 'white',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: mode === 'light' ? '#e5e7eb' : '#374151', // bg-gray-300/700 (tailwind)
  }

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
  }

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    background: '#111827', // bg-gray-900 (tailwind)
  }

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: mode === 'light' ? 'black' : 'white',
    backgroundColor: mode === 'light' ? '#e5e7eb' : '#374151', // bg-gray-300/700 (tailwind)
  }

  const ButtonStyle: React.CSSProperties = {
    width: '3rem',
    height: '3rem',
    verticalAlign: 'middle',
  }

  return (
    <>
      <Helmet>
        <title>Vite Education - Admin</title>
        <meta charSet='UTF-8' />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/vite.svg'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Helmet>
      <Space
        direction='vertical'
        style={{ width: '100%' }}
        size={[0, 48]}
      >
        <Layout>
          <Sider
            style={siderStyle}
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            width='20%'
            className='min-h-screen'
          >
            <Typography.Link
              href='/admin'
              className='-m-1.5 p-1.5 flex items-center justify-center'
            >
              <Image
                src={Logo}
                preview={false}
                style={{ height: '4rem' }}
              />
              <Typography.Text
                className='font-semibold'
                style={{ fontSize: '18px', color: 'white' }}
              >
                Vite Education
              </Typography.Text>
            </Typography.Link>
            {sider}
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <Space size='middle'>
                <Button
                  type='text'
                  icon={
                    collapsed ? (
                      <MenuUnfoldOutlined
                        style={{ fontSize: '20px', verticalAlign: 'middle' }}
                        className={`text-${mode === 'light' ? 'black' : 'white'}`}
                      />
                    ) : (
                      <MenuFoldOutlined
                        style={{ fontSize: '20px', verticalAlign: 'middle' }}
                        className={`text-${mode === 'light' ? 'black' : 'white'}`}
                      />
                    )
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
                <Search
                  placeholder='Search Entire Dashboard'
                  allowClear
                  enterButton={<SearchOutlined className='text-white' />}
                  size='large'
                  onSearch={onSearch}
                  style={{ display: 'flex' }}
                />
              </Space>
              <Space size='middle'>
                <Button
                  shape='circle'
                  icon={<TranslationOutlined style={{ fontSize: '22px' }} />}
                  style={ButtonStyle}
                />
                <Button
                  shape='circle'
                  icon={
                    <MdDarkMode
                      style={{
                        fontSize: '24px',
                        verticalAlign: 'middle',
                      }}
                    />
                  }
                  style={ButtonStyle}
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                />
                <Button
                  shape='circle'
                  icon={<BellOutlined style={{ fontSize: '22px' }} />}
                  style={ButtonStyle}
                />
                <Avatar
                  icon={<UserOutlined style={{ fontSize: '24px' }} />}
                  size={44}
                  style={{ verticalAlign: 'middle' }}
                />
              </Space>
            </Header>
            <Content style={contentStyle}>{content}</Content>
            <Footer style={footerStyle}>© 2023 Drop Team. All Rights Reserved.</Footer>
          </Layout>
        </Layout>
      </Space>
    </>
  )
}

export default AdminLayout
