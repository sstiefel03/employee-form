import React, { useState } from "react";

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    department: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Saves to state AND localStorage
    setFormData({ name: "", email: "", title: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
