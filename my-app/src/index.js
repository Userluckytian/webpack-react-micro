import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*******************微前端：项目依赖库********************** */
// 参考：https://blog.csdn.net/qq_37070696/article/details/133816896
// 参考：https://blog.csdn.net/weixin_43503080/article/details/131814068
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";

/*******************微前端：qiankun********************** */

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // 子应用的名称，必须唯一。
    entry: "//localhost:3004", // 子应用项目本地运行地址
    container: "#lyContainer", //  子应用的容器（子应用嵌入到主项目id为lyContainer的地方）
    activeRule: "/react-app", // 子应用激活时的路由规则（子应用路由）
  },
  {
    name: "vue app",
    entry: "//localhost:5173",
    container: "#lyContainer",
    activeRule: "/vue-app",
  },
]);

start({ sandbox : { experimentalStyleIsolation: true }});


/***************************************** */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
