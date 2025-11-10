import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load saved employees when the app first loads
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Delete an employee by index
  const deleteEmployee = (index) => {
    const updatedList = employees.filter((_, i) => i !== index);
    setEmployees(updatedList);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default App;
