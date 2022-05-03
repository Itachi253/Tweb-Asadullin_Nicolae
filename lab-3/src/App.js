import React from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { message } from 'antd';



const {Header, Footer, Sider, Content} = Layout;
const { Meta } = Card;




const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const info = () => {
  message.info('Fast LogIn');
};


function App() {
  return(
    <div className='App'>
      <Layout>
      <Header>

      </Header>
        <Layout>
          <Sider>
            <Menu>
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu
              title={
                <span>About Us</span>
              }
              >
                <Menu.ItemGroup key='AboutUs' title='Information'>
                  <Menu.Item key='Folder1'>Folder 1</Menu.Item>
                  <Menu.Item key='Folder2'>Folder 2</Menu.Item>
                   <Menu.Item key='Folder3'>Folder 3</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://i.pinimg.com/736x/64/b1/7f/64b17ffc6af201d2eb2569dbaeb7b12c.jpg" />}
            >
            <Meta title="INSTAGRAM" description="www.instagram.com" />
            </Card>
                </Col>

              </Row>
            </div>,
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit" onClick={info}>
          Submit
        </Button>
        
        
      </Form.Item>
    </Form>
          </Content>
          </Layout>
        </Layout>
      </Layout>
      <Layout/>
    </div>
  );
}

export default App;


