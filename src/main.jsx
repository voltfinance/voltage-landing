import "./styles";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { StoreContext } from "./stores";
import { configure } from "mobx";
import VoltApp from "./features/voltApp";
import Home from "./features/home";

configure({ enforceActions: "observed" });

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Suspense fallback={<>loading...</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<VoltApp />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
