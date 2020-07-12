import React, { Component } from "react";

class PoolTable extends Component {
  render() {
    const epoch = this.props.pooltable.epoch;
    let epochNumber;
    if (!epoch) {
      epochNumber = "N/A";
    } else {
      epochNumber = epoch.number;
    }
    return (
      <React.Fragment>
        <div className="navbar navbar-dark bg-danger">
          <h5 className="card-title" style={{ color: "white" }}>
            KES Period: {this.props.pooltable.number}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
            SlotNo: {this.props.pooltable.slotNo}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
            Epoch: {epochNumber}
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default PoolTable;
