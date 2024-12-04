import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./public-path";
import App from './App';
import reportWebVitals from './reportWebVitals';



/************** 微前端-子应用 *********************/
import { BrowserRouter } from "react-router-dom";
let root = null;
function render(props) {
  const { container } = props;
  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector("#oneSubRoot")
        : document.getElementById("oneSubRoot")
    );
  root.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/react-app" : "/"}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

/***********************************/

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


/**************微前端-子应用*********************/

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}
// https://github.com/kobeyk/micro-app-react-template/blob/main/config-overrides.js
export async function unmount(props) {
  // const { container } = props;
  root.unmount();
  root = null;
}

/***********************************/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
