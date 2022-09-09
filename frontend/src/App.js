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


//Project Management




//Department Management




//Financial Management





const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />

        <Route path="/CreateEmpData" component={CreateEmpData} />
        <Route path="/EmpData" component={EmpData} />
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
