import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { antTheme } from "./customStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={antTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
