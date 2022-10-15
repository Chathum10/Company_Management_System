import React, { Component } from "react";
import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";

export default class DepData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/departments").then((res) => {
      if (res.data.success) {
        this.setState({
          departments: res.data.existingPosts,
        });

        console.log(this.state.departments);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/departments/delete/${id}`).then((res) => {
      alert("Department Data Deleted Successfully");
      this.retrievePosts();
    });
  };

  filterData(departments, searchKey) {
    const result = departments.filter((post) =>
      post.dCategory.toLowerCase().includes(searchKey)
    );

    this.setState({ departments: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/departments").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <div className="hc">
          <br />
          <a className="btn btn-warning text-dark " href="/home">
            <b>Dashboard</b>
          </a>

          <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All Departments</h1>
            </center>
          </div>

          <div style={{ width: "20%", marginLeft: "70%" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Department"
                aria-label="Search"
                onChange={this.handleSearchArea}
              ></input>
            </form>
          </div>

          <div>
            <br />

            <h3>
              <span class="badge bg-info text-dark opacity-90 ">
                Departments Information
              </span>
            </h3>
            <table class="table table-bordered ">
              <thead class="table-info">
                <tr>
                  <th scope="col">Department Name</th>
                  <th scope="col">Department Information</th>
                  <th scope="col">Department Head Infomation</th>
                  <th scope="col">Total Employees</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.departments.map((departments, index) => (
                  <tr>
                    <td class="table-light">
                      <a
                        href={`/departments/${departments._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {departments.dName}
                      </a>
                    </td>
                    <td class="table-light">
                      <b>Category:</b> {departments.dCategory}
                      <br />
                      <b>Dept Email:</b> {departments.dEmail}
                      <br />
                      <b>Reporting Teams:</b> {departments.dTeams}
                      <br />
                    </td>
                    <td class="table-light">
                      <b>Director's Name:</b> {departments.hName}
                      <br />
                      <b>Director's Email:</b> {departments.hEmail}
                      <br />
                      <b>Contact No:</b> {departments.hNo}
                      <br />
                    </td>

                    <td class="table-light">
                      {departments.total}
                      <br />
                      <a
                        className="btn btn-success"
                        href={`EmpCount/${departments._id}`}
                      >
                        &nbsp;Cal Emp Count
                      </a>
                    </td>

                    <td class="table-light">
                      <a
                        className="btn btn-warning"
                        href={`EditDeptData/${departments._id}`}
                      >
                        &nbsp;Edit
                      </a>
                      &nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() =>
                          window.confirm(
                            "Are You Sure You Want To Delete This Department Info?"
                          ) && this.onDelete(departments._id)
                        }
                      >
                        &nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <br />

            <div>
              <center>
                <a
                  className="btn btn-warning text-dark "
                  href="/CreateDeptData"
                >
                  <b>Create New Department</b>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="btn btn-warning text-dark " href="/DeptReport">
                  <b>Generate Report</b>
                </a>
              </center>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
