import { Button, Form, Input } from "antd";
import React from "react";

const Page1 = ({ selectTap }) => {
  const [form] = Form.useForm();

  return (
    <div className="main">
      <div className="wrapper-form">
        <Form form={form} layout="vertical">
          <Form.Item name="nama" label="nama">
            <Input />
          </Form.Item>
          <Form.Item name="kelas" label="kelas">
            <Input />
          </Form.Item>
          <Form.Item name="jurusan" label="jurusan">
            <Input />
          </Form.Item>

          <Button onClick={() => selectTap("1")} type="primary">
            Selanjutnya
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Page1;
