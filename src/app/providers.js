"use client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { store } from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";

export function Providers({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
}
