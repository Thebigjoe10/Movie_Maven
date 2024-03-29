import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";
import App from "./App.jsx";

const Main = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/client/public/sw.js");
    });
  }
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  );
};

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<Main />, rootElement);
} else {
  render(<Main />, rootElement);
}
