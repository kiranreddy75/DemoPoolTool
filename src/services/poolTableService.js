import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PoolTable from "./../components/pooltable";

const PoolTableService = () => (
  <Query
    query={gql`
      {
        cardano {
          tip {
            number
            slotNo
            epoch {
              number
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.cardano.map((poolTable) => (
        <PoolTable pooltable={poolTable.tip} />
      ));
    }}
  </Query>
);

export default PoolTableService;
