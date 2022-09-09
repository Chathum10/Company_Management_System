import React, { Component } from "react";
import axios from "axios";

export default class FinancialDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      financial: [],
    };
  }

  componentDidMount() {
    this.retrieveFinancial();
  }

  retrieveFinancial() {
    axios.get("http://localhost:8001/financial").then((res) => {
      if (res.data.success) {
        this.setState({
          financial: res.data.existingFinancial,
        });

        console.log(this.state.financial);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/financial/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveFinancial();
    });
  };

  filterData(financial, searchKey) {
    const result = financial.filter(
      (financial) =>
        financial.fID.toLowerCase().includes(searchKey) ||
        financial.totalIncome.toLowerCase().includes(searchKey) ||
        financial.totalOutcome.toLowerCase().includes(searchKey) ||
        financial.money.toLowerCase().includes(searchKey) ||
        financial.date.toLowerCase().includes(searchKey) ||
        financial.status.toLowerCase().includes(searchKey)
    );

    this.setState({ financial: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/financial").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingFinancial, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="Khome">
        <br />
        <div style={{ width: "20%", marginLeft: "80%" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleSearchArea}
            ></input>
          </form>
        </div>

        <center>
          <h1>
            <span class="badge bg-warning text-dark opacity-90 fs-1">
              All financial details
            </span>
          </h1>
        </center>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FID</th>
              <th scope="col">Month</th>
              {/* <th scope="col">Income List</th>
              <th scope="col">Outcome List</th> */}
              <th scope="col">Total Income</th>
              <th scope="col">Total Outcome</th>
              <th scope="col">Profit or Loss</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.financial.map((financial, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/financial/${financial._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {financial.fId}
                  </a>
                </td>

                <td class="table-light">{financial.date}</td>
                <td class="table-light">{financial.totalIncome}</td>
                <td class="table-light">{financial.totalOutcome}</td>
                <td class="table-light">{financial.money}</td>

                <td class="table-light">{financial.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a href="/AddFinancialDetails" style={{ textDecoration: "none", color: "white" }}>
            Create This Month Financial Statement
          </a>
        </button>

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
