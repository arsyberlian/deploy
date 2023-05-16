import { Button, Form, Input, Space } from "antd";
import React from "react";

const Page3 = ({ selectTap }) => {
  return (
    <div className="main">
      <div className="wrapper-form">
        <Form layout="vertical">
          <Form.Item name="hobi" label="hobi">
            <Input />
          </Form.Item>
          <Form.Item name="note" label="note">
            <Input />
          </Form.Item>

          <Space>
            <Button onClick={() => selectTap("1")}>Sebelumnya</Button>
            <Button onClick={() => alert("success")} type="primary">
              Simpan
            </Button>
          </Space>
        </Form>
      </div>
    </div>
  );
};

export default Page3;
