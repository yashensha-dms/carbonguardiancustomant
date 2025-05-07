import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./customAnt.css";

import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { antTheme } from "./customStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={antTheme}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
