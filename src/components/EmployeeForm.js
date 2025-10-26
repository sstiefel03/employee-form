import React, { Component } from "react";
import "./EmployeeForm.css";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      department: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data:", this.state);


    this.setState({
      name: "",
      email: "",
      title: "",
      department: ""
    });
  };

  render() {
    return (
      <div className="employee-form">
        <h2>New Employee Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
