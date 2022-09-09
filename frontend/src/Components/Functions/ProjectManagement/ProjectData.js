import React, { Component } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class ProjectData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/projects").then(res => {
      if (res.data.success) {
        this.setState({
          projects: res.data.existingPosts
        });

        console.log(this.state.projects);
      }


    });
  }


  filterData(projects, searchKey) {

    const result = projects.filter((post) =>
      post.projectId.toLowerCase().includes(searchKey) ||
      post.pLevel.toLowerCase().includes(searchKey)

    )

    this.setState({ projects: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/projects").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
      <div className="hc">
        <br />
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All projects</h1>

            </center>
          </div>
          
        <div >
          <br />

          <h3><span class="badge bg-info text-dark opacity-90 ">projects Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">Project ID</th>
                <th scope="col">Client Information</th>
                <th scope="col">Project Information</th>
                <th scope="col">Progress</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map((projects, index) => (
                <tr>
                  <td class="table-light">
                    <a href={`/projects/${projects._id}`} style={{ textDecoration: 'none' }}>
                      {projects.projectId}
                    </a>
                  </td>
                  <td class="table-light">
                      {projects.cName}<br />
                      {projects.email}<br />
                      {projects.contactNo}<br />
                  </td>
                  <td class="table-light">
                      {projects.description}<br />
                      {projects.dept}<br />
                      {projects.pLevel}<br />
                      {projects.sDate}<br />
                      {projects.eDate}<br />
                      {projects.remarks}<br />
                      
                  </td>

                  <td class="table-light">
                  {projects.progress}<br />
                    <a className="btn btn-success" href={`/#/${projects._id}`}>
                      &nbsp;Add Progress
                    </a>
                </td>


                  <td class="table-light">
                    <a className="btn btn-warning" href={`/#/${projects._id}`}>
                     &nbsp;Edit
                    </a>
                    &nbsp;
                   
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This User Profile ?") && this.onDelete(projects._id)}>
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
              <a className="btn btn-warning text-dark " href="/CreateProjectData" >
                <MDBIcon fas icon="user-plus" size='2x' />&nbsp;<b>Add New projects Information</b>
              </a>
            </center>
          </div>

        </div>
        <br /><br />
        <br /><br />
      </div>
      </div>
    )
  };
};






