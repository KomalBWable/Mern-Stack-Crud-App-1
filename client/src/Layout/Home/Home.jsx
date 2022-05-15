import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
// Components
import Employee from "../../components/Employee/Employee";
import SearchEmployee from "../../components/SearchEmployee/SearchEmployee";

class Home extends Component {
  state = {
    data: null,
    allEmployee: null,
    error: "",
    reportingmanager: "",
    designation: "",
  };
  async componentDidMount() {
    try {
      const employee = await axios.get("/api/employee/");
      console.log(employee);
      this.setState({ data: employee.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }
  removeEmployee = async (id) => {
    try {
      const employeeRemoved = await axios.delete(`/api/employee/${id}`);
      const employee = await axios("/api/employee/");
      this.setState({ data: employee.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };
  activateEmployee = async (id) => {
    try {
      const employeeRemoved = await axios.delete(
        `/api/employee/activate/${id}`
      );
      const employee = await axios("/api/employee/");
      this.setState({ data: employee.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };
  filters = async (passingObject) => {
    try {
      const filterEmployee = await axios.get("/api/employee/", {
        params: { passingObject },
      });
      await this.setState({ data: filterEmployee.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };
  SearchEmployee = async (username, passingObject) => {
    let allEmployee = [...this.state.data.employee];
    if (this.state.allEmployee === null) this.setState({ allEmployee });
    let employee = this.state.data.employee.map((item) => {
      if (
        item &&
        item.firstname.toLowerCase().includes(username.toLowerCase())
      ) {
        return item;
      } else {
        return null;
      }
    });
    if (employee.length > 0) this.setState({ data: { employee } });
    if (username.trim() === "")
      this.setState({ data: { employee: this.state.allEmployee } });
  };
  render() {
    let employee;
    if (this.state.data)
      employee =
        this.state.data.employee &&
        this.state.data.employee.map(
          (employee) =>
            employee != null && (
              <Employee
                key={employee._id}
                {...employee}
                removeEmployee={this.removeEmployee}
                activateEmployee={this.activateEmployee}
              />
            )
        );
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <PropagateLoader color={"#333"} />{" "}
        </div>
      );
    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.employee.length)
        return <h1 className="No-Employee">No employee!</h1>;
    return (
      <div className="Table-Wrapper">
        <h1 className="h1">Employee</h1>
        <SearchEmployee
          SearchEmployee={this.SearchEmployee}
          filters={this.filters}
        />
        <table className="Table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{employee}</tbody>
        </table>

        <div id="container"></div>
      </div>
    );
  }
}

export default Home;
