import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default class Financial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      financial: {},
    };
  }

  createPdf = (pdfBody) => {
    var doc = new jsPDF();
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages
    doc.autoTable({
      didDrawPage: function (data) {
        // Header
        doc.setFontSize(18);
        var fileTitle1 = "White Light pvt.ltd ";
        doc.text(fileTitle1, 15, 20);

        doc.setFontSize(12);
        var fileTitle2 = "Financial Report 2022";
        var img = "https://ibb.co/9VtNvcB";
        doc.text(fileTitle2, 15, 40);
        doc.addImage(img, "JPEG", 0, 0, 210, 30);

        doc.setFontSize(9);
        var today = new Date();
        var newdat = "Date Printed : " + today;
        doc.text(100, 40, newdat);

        // Footer
        var pageSize = doc.internal.pageSize;
        //jsPDF 1.4+ uses getHeight, <1.4 uses .height
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

        doc.autoTable({ html: "#my-table", startY: pageHeight - 250 });

        doc.autoTable({ html: "#my-table2" });
        doc.autoTable({ html: "#my-table3", theme: "striped" });

        var str = "Page " + doc.internal.getNumberOfPages();
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === "function") {
          str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(10);
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: {
        bottom: 60, //this decides how big your footer area will be
        top: 40, //this decides how big your header area will be.
      },
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }

    doc.save("Financial_Report.pdf"); //this downloads a copy of the pdf in your local instance.
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/financial/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          financial: res.data.financial,
        });

        console.log(this.state.financial);
      }
    });
  }

  render() {
    const {
      fId,
      totalIncome,
      totalOutcome,
      money,
      date,
      status,
      ifweek,
      isweek,
      itweek,
      ifoweek,
      ifiweek,
      ofweek,
      osweek,
      otweek,
      ofoweek,
      ofiweek,
      ifweekd,
      isweekd,
      itweekd,
      ifoweekd,
      ifiweekd,
      ofweekd,
      osweekd,
      otweekd,
      ofoweekd,
      ofiweekd,
    } = this.state.financial;

    return (
      <div style={{ marginTop: "20px" }}>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <br /> <br /> <br /> <br />
        <center>
          <MDBCard
            className="text-black mb-3"
            style={{ maxWidth: "55rem", backgroundColor: "white" }}
          >
            <MDBIcon fas icon="file-invoice-dollar" size="10x" />

            <MDBCardBody>
              <MDBCardTitle>
                <b>Financial Report 2022</b>

                <br />
                <br />
                <b>White Light Pvt.Ltd </b>
                <br />
                <br />

                <b>{}</b>
              </MDBCardTitle>
              <br />
              <hr />
              <h3>Income List</h3>
              <MDBTable small id="my-table">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Week</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount(Rs.)</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>Week 1</td>
                    <td>{ifweekd}</td>
                    <td>{ifweek}</td>
                  </tr>
                  <tr>
                    <td>Week 2</td>
                    <td>{isweekd}</td>
                    <td>{isweek}</td>
                  </tr>
                  <tr>
                    <td>Week 3</td>
                    <td>{itweekd}</td>
                    <td>{itweek}</td>
                  </tr>
                  <tr>
                    <td>Week 4</td>
                    <td>{ifoweekd}</td>
                    <td>{ifoweek}</td>
                  </tr>
                  <tr>
                    <td>Week 5</td>
                    <td>{ifiweekd}</td>
                    <td>{ifiweek}</td>
                  </tr>
                  <tr striped hover className="table-info">
                    <td>Total Income</td>
                    <td>{}</td>
                    <td>{totalIncome}</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>

              <h4 textAlign="left">Outcome List</h4>
              <MDBTable small id="my-table2">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Week</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount(Rs.)</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>Week 1</td>
                    <td>{ofweekd}</td>
                    <td>{ofweek}</td>
                  </tr>
                  <tr>
                    <td>Week 2</td>
                    <td>{osweekd}</td>
                    <td>{osweek}</td>
                  </tr>
                  <tr>
                    <td>Week 3</td>
                    <td>{otweekd}</td>
                    <td>{otweek}</td>
                  </tr>
                  <tr>
                    <td>Week 4</td>
                    <td>{ofoweekd}</td>
                    <td>{ofoweek}</td>
                  </tr>
                  <tr>
                    <td>Week 5</td>
                    <td>{ofoweekd}</td>
                    <td>{ofoweek}</td>
                  </tr>
                  <tr striped hover className="table-info">
                    <td>Total Outcome</td>
                    <td>{}</td>
                    <td>{totalOutcome}</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>

              <MDBTable small id="my-table3">
                <MDBTableHead>
                  <br />
                  <br />

                  <tr>
                    <td>
                      <b>Total Amount = Rs.{money}</b>
                    </td>
                    <br />
                    <td>
                      <b>Status = {status}</b>
                    </td>
                  </tr>
                </MDBTableHead>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
          <br />
          <div>
            <center>
              <a
                className="btn btn-warning text-dark "
                onClick={this.createPdf}
              >
                <b>Download PDF</b> &nbsp;
                <MDBIcon far icon="file-pdf" size="2x" />
              </a>
            </center>
          </div>
        </center>
        <br /> <br /> <br /> <br />
      </div>
    );
  }
}
