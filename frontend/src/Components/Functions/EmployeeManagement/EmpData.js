/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";

export default class EmpData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/employee").then((res) => {
      if (res.data.success) {
        this.setState({
          employee: res.data.existingPosts,
        });

        console.log(this.state.employee);
      }
    });
  }

  filterData(employee, searchKey) {
    const result = employee.filter(
      (post) =>
        post.empId.toLowerCase().includes(searchKey) ||
        post.dept.toLowerCase().includes(searchKey)
    );

    this.setState({ employee: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/employee").then((res) => {
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
              <h1 className="gifJoin">All Employees</h1>
            </center>
          </div>

          <div>
            <br />

            <h3>
              <span class="badge bg-info text-dark opacity-90 ">
                Employee Information
              </span>
            </h3>
            <table class="table table-bordered ">
              <thead class="table-info">
                <tr>
                  <th scope="col">EMP ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Personal Information</th>
                  <th scope="col">Employment</th>
                  <th scope="col">Performance</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employee.map((employee, index) => (
                  <tr>
                    <td class="table-light">
                      <a
                        href={`/employee/${employee._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {employee.empId}
                      </a>
                    </td>
                    <td class="table-light">{employee.name}</td>
                    <td class="table-light">
                      {employee.nic}
                      <br />
                      {employee.gender}
                      <br />
                      {employee.contactNo}
                      <br />
                      {employee.email}
                      <br />
                    </td>
                    <td class="table-light">
                      {employee.joinDate}
                      <br />
                      {employee.dueDate}
                      <br />
                      {employee.dept}
                      <br />
                      {employee.designation}
                      <br />
                    </td>

                    <td class="table-light">
                      {employee.performance}
                      <br />
                      <a
                        className="btn btn-success"
                        href={`/#/${employee._id}`}
                      >
                        &nbsp;Add This Month
                      </a>
                    </td>

                    <td class="table-light">
                      <a
                        className="btn btn-warning"
                        href={`/#/${employee._id}`}
                      >
                        &nbsp;Edit
                      </a>
                      &nbsp; // eslint-disable-next-line
                      jsx-a11y/anchor-is-valid
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() =>
                          window.confirm(
                            "Are You Sure You Want To Delete This User Profile ?"
                          ) && this.onDelete(employee._id)
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
                <a className="btn btn-warning text-dark " href="/createEmpData">
                  <MDBIcon fas icon="user-plus" size="2x" />
                  &nbsp;<b>Add New Employee Information</b>
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
