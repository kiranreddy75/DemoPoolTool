import React from "react";
import Movies from "./components/movies";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PoolTableService from "./services/poolTableService";
import PoolInfoService from "./services/poolInfoService";

const client = new ApolloClient({
  uri: "http://poolofdestiny.com:8090/v1/graphql",
});

function App() {
  return (
    <main>
      <ApolloProvider client={client}>
        <div>
          <div className="navbar navbar-dark bg-success">
            <h3 className="navbar-brand" style={{ marginLeft: "45%" }}>
              Cardano PoolTool Demo
            </h3>
          </div>
          <div>
            <PoolTableService />
            <div style={{ margin: "5% 5% 5% 5%" }}>
              <PoolInfoService />
            </div>
          </div>
        </div>
      </ApolloProvider>
    </main>
  );
}

export default App;
