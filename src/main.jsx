import "./styles";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { StoreContext } from "./stores";
import { configure } from "mobx";

const App = lazy(() => import("./App"));

configure({ enforceActions: "observed" });

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Suspense fallback={<>loading...</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app" element={<div>Volt App page</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
