import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, email, jobTitle, department });
    setName('');
    setEmail('');
    setJobTitle('');
    setDepartment('');
  };

  return (
    <div className="employee-form-wrapper">
      <h2 className="form-title">Add Employees</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <label>Department</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
