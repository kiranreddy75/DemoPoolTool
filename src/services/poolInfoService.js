import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PoolInfo from "../components/poolInfo";

const infoService = gql`
  query PoolInfo($id: bigint!) {
    pool_by_pk(id: $id) {
      poolid: id
      poolpubkey: hash
      fixedfee: fixed_cost
      variablefee: margin
      pledge: pledge
      pool_meta_datum {
        poolmetadataurl: url
        poolmetadatahash: hash
      }
    }
  }
`;

class PoolInfoService extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", tickerID: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ tickerID: event });
  }

  render() {

    return (
      <React.Fragment>
        <h3>Please Enter your Pool Id to Fetch the Info....</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Please enter Pool ID"
            aria-label="Pool ID"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              onClick={() => this.handleSubmit(this.state.value)}
              className="btn btn-danger btn-lg"
            >
              Search
            </button>
          </div>
        </div>
        <Query
          query={infoService}
          variables={{
            id: this.state.tickerID,
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p> </p>;
            return <PoolInfo poolInfo={data.pool_by_pk} />;
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default PoolInfoService;
