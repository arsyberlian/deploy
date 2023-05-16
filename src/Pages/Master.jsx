import { Tabs } from "antd";
import { useState } from "react";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";

const Master = () => {
  const [activeKey, setActiveKey] = useState("0");

  const selectTap = (key) => {
    setActiveKey(key);
  };
  const renderTabContent = (i) => {
    if (i === 0) {
      return <Page1 selectTap={selectTap} />;
    } else if (i === 1) {
      return <Page2 selectTap={selectTap} />;
    } else {
      return <Page3 selectTap={selectTap} />;
    }
  };

  return (
    <div>
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={"top"}
          centered={true}
          onTabClick={(a) => selectTap(a)}
          activeKey={activeKey}
          style={{
            height: 220,
          }}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i);
            return {
              label: `Form ${i + 1}`,
              key: id,
              //   disabled: i === 8,
              children: renderTabContent(i),
            };
          })}
        />
      </div>
    </div>
  );
};

export default Master;
