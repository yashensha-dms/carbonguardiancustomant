import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Space, Typography, Checkbox, Form, Input } from "antd";
import { Fields } from "./components/Fields/Fields";
import { Colorpala } from "./components/Colorpala/Colorpala";

function App() {
  const { Title, Text, Link } = Typography;
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Space direction="vertical" style={{ gap: 0 }}>
        <Title>Heading 40</Title>
        <Title level={2}>Heading 32</Title>
        <Title level={3}>Heading 24</Title>
        <Title level={4}>Heading 20</Title>
        <Title level={5}>Heading 16</Title>
        <Text>Body</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete>Ant Design (delete)</Text>
        <Text strong>Ant Design (strong)</Text>
        <Text italic>Ant Design (italic)</Text>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>

      <div className="card">
        <Space direction="vertical">
          <Button
            type="primary"
            variant="filled"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Button type="dashed" variant="filled">
            aaaaaaas
          </Button>
          <Button type="default" variant="filled">
            aaaaaaas
          </Button>
          <Button type="text" variant="filled">
            aaaaaaas
          </Button>
          <Button type="link" variant="filled">
            aaaaaaas
          </Button>
          <Text>
            Edit <Text code>src/App.jsx</Text> and save to test HMR
          </Text>
        </Space>
      </div>

      <Text> Click on the Vite and React logos to learn more</Text>

      <Fields />
      <Colorpala />
    </>
  );
}

export default App;
