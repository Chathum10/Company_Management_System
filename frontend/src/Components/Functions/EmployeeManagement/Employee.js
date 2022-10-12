import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/employee/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);

            }

        });

    }

    render() {

        const { name, nic, gender, contactNo, email, empId, joinDate, dueDate, dept, designation } = this.state.post;

        return (



            <div style={{ marginTop: '20px' }}>
                 <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <br /> <br /> <br /> <br />
                <center>
                    <MDBCard className='text-black mb-3' style={{ maxWidth: '40rem',  backgroundColor: 'white'  }}>
                    <MDBIcon fas icon="file-invoice-dollar" size='10x' />

                     <MDBCardBody>
                            <MDBCardTitle><b>Employee Profile</b></MDBCardTitle><br/>
                            <hr />

                            <dl className="row">

                            <h5>Personal Information</h5><br /><br /><br />

                                <dt className="col-sm-3">Employee Name</dt>
                                <dd className="col-sm-9">{name}</dd>

                                <dt className="col-sm-3">NIC</dt>
                                <dd className="col-sm-9">{nic}</dd>

                                <dt className="col-sm-3">Gender</dt>
                                <dd className="col-sm-9">{gender}</dd>

                                <dt className="col-sm-3">Contact Number</dt>
                                <dd className="col-sm-9">{contactNo}</dd>


                                <dt className="col-sm-3">Email</dt>
                                <dd className="col-sm-9">{email}</dd><br /><br /><br /><br />


                                <h5>Employeement</h5><br /><br /><br />

                                <dt className="col-sm-3">EMP ID</dt>
                                <dd className="col-sm-9">{empId}</dd>

                                <dt className="col-sm-3">Department</dt>
                                <dd className="col-sm-9">{dept}</dd><br /><br /><br /><br />

                                <dt className="col-sm-3">Designation</dt>
                                <dd className="col-sm-9">{designation}</dd>

                                <dt className="col-sm-3">Join Date</dt>
                                <dd className="col-sm-9">{joinDate}</dd>

                                <dt className="col-sm-3">Due Date</dt>
                                <dd className="col-sm-9">{dueDate}</dd>



                            </dl>




                        </MDBCardBody>
                    </MDBCard>
                    <br />
                </center>
                <br /> <br /> <br /> <br />
            </div>
        )
    }
}


