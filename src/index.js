import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/containers/App/App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="text-center">
          <div className="spinner-border text-secondary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
