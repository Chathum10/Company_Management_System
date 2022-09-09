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


//Project Management
import CreateProjectData from "./Components/Functions/ProjectManagement/CreateProjectData"
import ProjectData from "./Components/Functions/ProjectManagement/ProjectData";


//Department Management
import CreateDeptData from "./Components/Functions/DepartmentManagement/CreateDeptData";
import DeptData from "./Components/Functions/DepartmentManagement/DeptData";



//Financial Management





const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />

        <Route path="/CreateEmpData" component={CreateEmpData} />
        <Route path="/EmpData" component={EmpData} />
        <Route path="/Employee/:id" component={Employee} />

        <Route path="/CreateProjectData" component={CreateProjectData} />
        <Route path="/ProjectData" component={ProjectData} />

        <Route path="/CreateDeptData" component={CreateDeptData} />
        <Route path="/DeptData" component={DeptData} />

        
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
