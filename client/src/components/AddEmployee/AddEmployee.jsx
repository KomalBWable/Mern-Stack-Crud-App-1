import React, { Component } from "react";
import "./AddEmployee.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddEmployee extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    designation: "",
    dateofjoining: "",
    reportingmanager: "",
    salary: "",
    employeecode: "",
    location: "",
    state: "",
    country: "",
    department: "",
    response: "",
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  genderhandler = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  designationhandler = (e) => {
    this.setState({
      designation: e.target.value,
    });
  };
  addemployee = async (e) => {
    e.preventDefault();
    try {
      let object = {
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        email: this.refs.email.value,
        mobile: this.refs.mobile.value,
        gender: this.state.gender,
        designation: this.state.designation,
        designation: this.refs.designation.value,
        dateofjoining: this.refs.dateofjoining.value,
        reportingmanager: this.state.reportingmanager,
        salary: this.refs.salary.value,
        employeecode: this.refs.employeecode.value,
        location: this.refs.location.value,
        state: this.refs.state.value,
        country: this.refs.country.value,
        department: this.refs.department.value,
      };
      const NewEmployee = await axios.post("/api/employee/", object);
      toast(
        "Employee " +
          NewEmployee.data.newEmployee.firstname +
          " created successfully",
        { type: toast.TYPE.SUCCESS, autoClose: 3000 }
      );
    } catch (err) {
      console.log(err);
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddEmployee-Wrapper">
        <h1>Add Employee:</h1>
        <form onSubmit={this.addemployee}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            placeholder="Enter the firstname of the employee here"
            name="firstname"
            onChange={this.onChangeHandler}
            ref="firstname"
            className="Add-Employee-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            placeholder="Enter the lastname of the employee here"
            name="lastname"
            onChange={this.onChangeHandler}
            ref="lastname"
            className="Add-Employee-Input"
            required
            minLength="3"
            maxLength="33"
            id="lastname"
          />
          <label htmlFor="email">
            Email: <b>(must be a valid email)</b>
          </label>
          <input
            type="text"
            placeholder="Enter your email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="Add-Employee-Input"
            required
            id="email"
          />

          <label htmlFor="mobile">Mobile: </label>
          <input
            type="number"
            placeholder="Enter your mobile here"
            name="mobile"
            onChange={this.onChangeHandler}
            ref="mobile"
            className="Add-Employee-Input"
            required
            id="mobile"
          />
          <label htmlFor="gender">Gender: </label>
          <br />
          <select
            className="selectClass"
            name="gender"
            ref="gender"
            onChange={this.genderhandler}
          >
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label htmlFor="designation">Designation: </label>
          <br />
          <select
            className="selectClass"
            name="designation"
            ref="designation"
            onChange={this.designationhandler}
          >
            <option defaultValue>Select Designation</option>
            <option value="software developer">Software Developer</option>
            <option value=" senior software engineer">
              Senior Software Engineer
            </option>
            <option value="technical lead">Technical Lead</option>
          </select>
          <br />

          <label htmlFor="dateofjoining">DateOfJoining: </label>
          <input
            type="Date"
            placeholder="Enter your dateofjoining here"
            name="dateofjoining"
            onChange={this.onChangeHandler}
            ref="dateofjoining"
            className="Add-Employee-Input"
            required
            id="dateofjoining"
          />
          <label htmlFor="reportingmanager">Reporting Manager: </label>
          <input
            type="string"
            placeholder="Enter your reportingmanager here"
            name="reportingmanager"
            onChange={this.onChangeHandler}
            ref="reportingmanager"
            className="Add-Employee-Input"
            required
            id="reportingmanager"
          />
          <label htmlFor="salary">Salary: </label>
          <input
            type="number"
            placeholder="Enter your salary here"
            name="salary"
            onChange={this.onChangeHandler}
            ref="salary"
            className="Add-Employee-Input"
            required
            id="salary"
          />
          <label htmlFor="employeecode">EmployeeCode: </label>
          <input
            type="number"
            placeholder="Enter your employeecode here"
            name="employeecode"
            onChange={this.onChangeHandler}
            ref="employeecode"
            className="Add-Employee-Input"
            required
            id="employeecode"
          />
          <label htmlFor="location">Location: </label>
          <input
            type="string"
            placeholder="Enter your location here"
            name="location"
            onChange={this.onChangeHandler}
            ref="location"
            className="Add-Employee-Input"
            required
            id="location"
          />
          <label htmlFor="state">State: </label>
          <input
            type="string"
            placeholder="Enter your state here"
            name="state"
            onChange={this.onChangeHandler}
            ref="state"
            className="Add-Employee-Input"
            required
            id="state"
          />
          <label htmlFor="country">Country: </label>
          <input
            type="string"
            placeholder="Enter your country here"
            name="country"
            onChange={this.onChangeHandler}
            ref="country"
            className="Add-Employee-Input"
            required
            id="country"
          />
          <label htmlFor="department">Department: </label>
          <input
            type="string"
            placeholder="Enter your department here"
            name="department"
            onChange={this.onChangeHandler}
            ref="department"
            className="Add-Employee-Input"
            required
            id="department"
          />

          <button
            type="submit"
            className="Add-Employee-Submit fa fa-plus"
          ></button>
          <button
            type="reset"
            className="Add-Employee-Reset fa fa-refresh"
          ></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddEmployee;
