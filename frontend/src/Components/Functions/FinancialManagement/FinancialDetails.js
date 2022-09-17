import React, { Component } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

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
    axios.get("/financial").then((res) => {
      if (res.data.success) {
        this.setState({
          financial: res.data.existingFinancial,
        });

        console.log(this.state.financial);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/financial/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveFinancial();
    });
  };

  filterData(financial, searchKey) {
    const result = financial.filter(
      (financial) =>
        financial.fID.toLowerCase().includes(searchKey) ||
        financial.date.toLowerCase().includes(searchKey) ||
        financial.status.toLowerCase().includes(searchKey)
    );

    this.setState({ financial: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/financial").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingFinancial, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <div className="hc">
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
          <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All financial details</h1>
            </center>
          </div>
          <br />
          <h3>
            <span class="badge bg-info text-dark opacity-90 ">
              Financial Information
            </span>
          </h3>
          <table class="table table-bordered ">
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">FID</th>
                <th scope="col">Month</th>
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
                  <td class="table-light">
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
          <br></br>
          <div>
            <center>
              <a
                className="btn btn-warning text-dark "
                href="/AddFinancialDetails"
              >
                <MDBIcon fas icon="user-plus" />
                &nbsp;<b>Create This Month Financial Statement</b>
              </a>
            </center>
          </div>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
