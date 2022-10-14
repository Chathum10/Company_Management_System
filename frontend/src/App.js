import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./Home";

//Dashboard

//Employee Management
import CreateEmpData from "./Components/Functions/EmployeeManagement/CreateEmpData";
import EmpData from "./Components/Functions/EmployeeManagement/EmpData";
import Employee from "./Components/Functions/EmployeeManagement/Employee";
import EditEmpData from "./Components/Functions/EmployeeManagement/EditEmpData";

//Project Management
import CreateProjectData from "./Components/Functions/ProjectManagement/CreateProjectData";
import ProjectData from "./Components/Functions/ProjectManagement/ProjectData";

//Department Management
import CreateDeptData from "./Components/Functions/DepartmentManagement/CreateDeptData";
import DeptData from "./Components/Functions/DepartmentManagement/DeptData";

//Financial Management
import AddFinancialDetails from "./Components/Functions/FinancialManagement/AddFinancialDetails";
import FinancialDetails from "./Components/Functions/FinancialManagement/FinancialDetails";
import EditFinancialDetails from "./Components/Functions/FinancialManagement/EditFinancialDetails";
import Financial from "./Components/Functions/FinancialManagement/Financial";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />

        <Route path="/CreateEmpData" component={CreateEmpData} />
        <Route path="/EmpData" component={EmpData} />
        <Route path="/Employee/:id" component={Employee} />
        <Route path="/EditEmpData/:id" component={EditEmpData} />

        <Route path="/CreateProjectData" component={CreateProjectData} />
        <Route path="/ProjectData" component={ProjectData} />

        <Route path="/CreateDeptData" component={CreateDeptData} />
        <Route path="/DeptData" component={DeptData} />

        <Route path="/AddFinancialDetails" component={AddFinancialDetails} />
        <Route path="/FinancialDetails" component={FinancialDetails} />
        <Route
          path="/EditFinancialDetails/:id"
          component={EditFinancialDetails}
        />
        <Route path="/Financial/:id" component={Financial} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
