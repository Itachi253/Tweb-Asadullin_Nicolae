import { Form, Input, Select, Checkbox, Button } from 'antd';
import { useState } from 'react';
import './CustomForm.css';

const { Option } = Select;

export function CustomForm() {
  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');


  const onSubmit = (values: any) => {
    console.log(values);
    alert(`${nick} ${phone} `);
  };

  return (
    <Form
      style={{ width: '30%', margin: '0 auto' }}
      onFinish={onSubmit}
      scrollToFirstError
    >
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Required field',
            whitespace: true,
          },
        ]}
      >
        <Input onChange={(e) => setNick(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="Password"
        label="Password"
        rules={[{ required: true, message: 'Required field' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="Confirm"
        label="Confirm your password"
        dependencies={['Password']}
        hasFeedback
        rules={[
          { required: true, message: 'Required field' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('Password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(

              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="email"
        rules={[
          { type: 'email', message: 'Invalid mail' },
          { required: true, message: 'Required field!' },
        ]}
      >
        <Input onChange={(e) => setPhone(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="Tel."
        label="Tel."
        rules={[{ required: true, message: 'Required field!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="Comment"
        label="Comment"
        rules={[{ message: 'Your Comment' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>



      <Form.Item


      >

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
