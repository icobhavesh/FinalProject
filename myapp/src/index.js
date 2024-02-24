import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Practice from "./Restaurent/Practice.jsx/Practice";
import Styling from "./Restaurent/Practice.jsx/Styling";
import Apps from "./Container/Ecommerce/Apps";
import Contact from "./Contact";
import Login from "./login";
import Serachfilter from "./Serachfilter";
import ProductList from "./Container/Ecommerce/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Apps />
      {/* <ProductList/> */}
      {/* <App /> */}
      {/* <Practice/> */}
      {/* <Styling/> */}
      <Serachfilter />
      <Login />
      {/* <Contact/> */}
      {/* <Apps/> */}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  // "start": "react-scripts start",