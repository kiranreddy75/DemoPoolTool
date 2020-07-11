import React from "react";
import Movies from "./components/movies";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PoolTableService from "./services/poolTableService";

const client = new ApolloClient({
  uri: "http://poolofdestiny.com:8090/v1/graphql",
});

function App() {
  return (
    <main className="container">
      <ApolloProvider client={client}>
        <div className="container">
          <div className="navbar navbar-dark bg-success">
            <h3 className="navbar-brand" style={{ marginLeft: "45%" }}>
              Cardano PoolTool Demo
            </h3>
          </div>
          <div>
            <PoolTableService />
          </div>
        </div>
      </ApolloProvider>
      <div style={{ marginTop: "50px" }}>
        <Movies />
      </div>
    </main>
  );
}

export default App;
