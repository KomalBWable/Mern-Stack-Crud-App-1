import React, { Component } from "react";
import "./SearchEmployee.css";

class SearchEmployee extends Component {
  state = {
    value: "",
    firstname: "",
    reportingManager: "",
    designation: "",
    status: "",
    deletedAt: null,
    passingObject: {},
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value }, () => {
      this.props.SearchEmployee(this.state.value, this.state.passingObject);
    });
  };

  onChangeSelectHandler = async (e) => {
    if (
      e.target.name == "managerSelect" &&
      e.target.value != "Select Reporting Manager"
    ) {
      this.setState({ reportingManager: e.target.value });
      this.state.passingObject["reportingmanager"] = e.target.value;
    }
    if (
      e.target.name == "managerSelect" &&
      e.target.value == "Select Reporting Manager"
    ) {
      delete this.state.passingObject["reportingmanager"];
      await this.setState({ passingObject: this.state.passingObject });
    }
    if (
      e.target.name == "designationSelect" &&
      e.target.value != "Select Designation"
    ) {
      this.setState({ designation: e.target.value });
      this.state.passingObject["designation"] = e.target.value;
    }
    if (
      e.target.name == "designationSelect" &&
      e.target.value == "Select Designation"
    ) {
      delete this.state.passingObject["designation"];
      await this.setState({ passingObject: this.state.passingObject });
    }
    if (e.target.name == "statusSelect" && e.target.value != "Select Status") {
      if (e.target.value == "activate") {
        this.setState({ status: e.target.value });
        this.state.passingObject["deletedAt"] = null;
      }
      if (e.target.value == "deactivate") {
        this.setState({ status: e.target.value });
        this.state.passingObject["deletedAt"] = true;
      }
    }
    if (e.target.name == "statusSelect" && e.target.value == "Select Status") {
      delete this.state.passingObject["deletedAt"];
      await this.setState({ passingObject: this.state.passingObject });
    }
    await this.props.filters(this.state.passingObject);
    this.props.SearchEmployee(this.state.value, this.state.passingObject);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Filter by firstname..."
          name="name"
          onChange={this.onChangeHandler}
          className="Search-Employee-Input"
        />
        <table className="sel">
          <tbody>
            <tr>
              <th className="select">
                <select
                  type="text"
                  placeholder="Filter by reporting Manager..."
                  name="managerSelect"
                  className="selectClass2"
                  onChange={this.onChangeSelectHandler}
                >
                  <option defaultValue>Select Reporting Manager</option>
                  <option value="r">R</option>
                  <option value="k">K</option>
                  <option value="w">W</option>
                </select>
              </th>
              <th className="select">
                <select
                  type="text"
                  placeholder="Filter by designation..."
                  name="designationSelect"
                  className="selectClass3"
                  onChange={this.onChangeSelectHandler}
                >
                  <option defaultValue>Select Designation</option>
                  <option value="software developer">Software Developer</option>
                  <option value=" senior software engineer">
                    Senior Software Engineer
                  </option>
                  <option value="technical lead">Technical Lead</option>
                </select>
              </th>
              <th className="select">
                <select
                  type="text"
                  placeholder="Filter by status..."
                  name="statusSelect"
                  className="selectClass3"
                  onChange={this.onChangeSelectHandler}
                >
                  <option defaultValue>Select Status</option>
                  <option value="activate">Activate</option>
                  <option value="deactivate">Deactivate</option>
                </select>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchEmployee;
