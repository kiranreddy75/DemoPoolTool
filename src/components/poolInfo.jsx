import React, { Component } from "react";

class PoolInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolInfo: this.props.poolInfo,
    };
  }

  render() {
    const info = this.state.poolInfo;
    return (
      <React.Fragment>
        {info !== undefined && info !== null && (
          <div className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="thead-dark">
                <tr>
                  <th>Fixed Fee</th>
                  <th>Pledge</th>
                  <th>Pool ID</th>
                  <th>Variable Fee</th>
                  <th>Pool Key</th>
                  <th>Pool Hash</th>
                  <th>Pool Url</th>
                </tr>
              </thead>
              <tbody className="table-striped">
                <tr key={info._id}>
                  <td>{info.fixedfee}</td>
                  <td>{info.pledge}</td>
                  <td>{info.poolid}</td>
                  <td>{info.variablefee}</td>
                  <td>{info.poolpubkey}</td>
                  <td>{info.pool_meta_datum.poolmetadatahash}</td>
                  <td>{info.pool_meta_datum.poolmetadataurl}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PoolInfo;
