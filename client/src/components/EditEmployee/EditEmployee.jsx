import React, { Component } from "react";
import "./EditEmployee.css";
import axios from "axios";
import { withRouter } from "react-router";
import { toast, ToastContainer } from "react-toastify";

class EditEmployee extends Component {
  state = {
    id: "",
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

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });
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
  async componentDidMount() {
    try {
      let search = this.props.location.search,
        id = search.substring(1, search.length);
      const updateEmployee = await axios(`/api/employee/${id}`);
      const {
        firstname,
        lastname,
        email,
        mobile,
        gender,
        designation,
        dateofjoining,
        reportingmanager,
        salary,
        employeecode,
        location,
        state,
        country,
        department,
      } = updateEmployee.data.employee;
      this.setState({
        id,
        firstname,
        lastname,
        email,
        mobile,
        gender,
        designation,
        dateofjoining,
        reportingmanager,
        salary,
        employeecode,
        location,
        state,
        country,
        department,
      });
    } catch (err) {
      this.setState({ response: "Employee not found!" });
    }
  }
  updateEmployeeHandler = async (e) => {
    e.preventDefault();
    try {
      const employee = await axios.put(`/api/employee/${this.state.id}`, {
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        email: this.refs.email.value,
        mobile: this.refs.mobile.value,
        gender: this.state.gender,
        designation: this.state.designation,
        dateofjoining: this.refs.dateofjoining.value,
        reportingmanager: this.refs.reportingmanager.value,
        salary: this.refs.salary.value,
        employeecode: this.refs.employeecode.value,
        location: this.refs.location.value,
        state: this.refs.state.value,
        country: this.refs.country.value,
        department: this.refs.department.value,
      });
      toast(employee.data.message, { type: toast.TYPE.INFO, autoClose: 3000 });
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Employee not found!")
      return <h1>Employee not found!</h1>;
    return (
      <div className="Edit-Employee-Wrapper">
        <h1 className="h1">Edit page:</h1>
        <form onSubmit={this.updateEmployeeHandler}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            placeholder="First Name..."
            value={this.state.firstname}
            name="firstname"
            onChange={this.onChangeHandler}
            ref="firstname"
            required
            className="Edit-Employee-Input"
            id="firstname"
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name..."
            value={this.state.lastname}
            name="lastname"
            onChange={this.onChangeHandler}
            ref="lastname"
            required
            className="Edit-Employee-Input"
            id="lastname"
          />
          <label htmlFor="email">
            Email: <b>(must be a valid email)</b>
          </label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={this.state.email}
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Employee-Input"
            id="email"
          />
          <label htmlFor="mobile">Mobile: </label>
          <input
            type="number"
            placeholder="Enter the employee's mobile"
            value={this.state.mobile}
            name="mobile"
            required
            onChange={this.onChangeHandler}
            ref="mobile"
            className="Edit-Employee-Input"
            id="mobile"
          />
          <label htmlFor="gender">Gender: </label> <br />
          <select
            type="text"
            placeholder="Enter the employee's gender"
            value={this.state.gender}
            name="gender"
            ref="gender"
            className="selectClass"
            id="gender"
            required
            onChange={this.genderhandler}
          >
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label htmlFor="designation">Designation: </label>
          <select
            type="text"
            placeholder="Enter the employee's designation"
            value={this.state.designation}
            name="designation"
            ref="designation"
            className="selectClass"
            id="designation"
            required
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
            type="date"
            placeholder="Enter the employee's dateofjoining"
            value={this.state.dateofjoining}
            name="dateofjoining"
            required
            onChange={this.onChangeHandler}
            ref="dateofjoining"
            className="Edit-Employee-Input"
            id="dateofjoining"
          />
          <label htmlFor="reportingmanager">ReportingManager: </label>
          <input
            type="text"
            placeholder="Enter the employee's reportingmanager"
            value={this.state.reportingmanager}
            name="reportingmanager"
            required
            onChange={this.onChangeHandler}
            ref="reportingmanager"
            className="Edit-Employee-Input"
            id="reportingmanager"
          />
          <label htmlFor="salary">Salary: </label>
          <input
            type="number"
            placeholder="Enter the employee's salary"
            value={this.state.salary}
            name="salary"
            required
            onChange={this.onChangeHandler}
            ref="salary"
            className="Edit-Employee-Input"
            id="salary"
          />
          <label htmlFor="employeecode">EmployeeCode: </label>
          <input
            type="number"
            placeholder="Enter the employee's employeecode"
            value={this.state.employeecode}
            name="employeecode"
            required
            onChange={this.onChangeHandler}
            ref="employeecode"
            className="Edit-Employee-Input"
            id="employeecode"
          />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            placeholder="Enter the employee's location"
            value={this.state.location}
            name="location"
            required
            onChange={this.onChangeHandler}
            ref="location"
            className="Edit-Employee-Input"
            id="location"
          />
          <label htmlFor="state">State: </label>
          <input
            type="text"
            placeholder="Enter the employee's state"
            value={this.state.state}
            name="state"
            required
            onChange={this.onChangeHandler}
            ref="state"
            className="Edit-Employee-Input"
            id="state"
          />
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            placeholder="Enter the employee's country"
            value={this.state.country}
            name="country"
            required
            onChange={this.onChangeHandler}
            ref="country"
            className="Edit-Employee-Input"
            id="country"
          />
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            placeholder="Enter the employee's department"
            value={this.state.department}
            name="department"
            required
            onChange={this.onChangeHandler}
            ref="department"
            className="Edit-Employee-Input"
            id="department"
          />
          <button
            type="submit"
            className="Edit-Employee-Submit fa fa-pencil"
          ></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditEmployee);
