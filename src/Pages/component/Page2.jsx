import { Button, Form, Input, Space } from "antd";
import React from "react";

const Page2 = ({ selectTap }) => {
  return (
    <div className="main">
      <div className="wrapper-form">
        <Form layout="vertical">
          <Form.Item name="jenis kelamin" label="jenis kelamin">
            <Input />
          </Form.Item>
          <Form.Item name="alamat" label="alamat">
            <Input />
          </Form.Item>
          <Form.Item name="usia" label="usia">
            <Input />
          </Form.Item>
          <Space>
            <Button onClick={() => selectTap("0")}>Sebelumnya</Button>
            <Button onClick={() => selectTap("2")} type="primary">
              Selanjutnya
            </Button>
          </Space>
        </Form>
      </div>
    </div>
  );
};

export default Page2;
