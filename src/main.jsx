import "./styles";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { StoreContext } from "./stores";
import { configure } from "mobx";
import VoltApp from "./features/voltApp";
import Home from "./features/home";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

configure({ enforceActions: "observed" });
const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/voltfinance/voltage-exchange',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
