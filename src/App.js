import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = (employee) => {
    setEmployees(prev => {
      const updated = [...prev, employee];
      localStorage.setItem('employees', JSON.stringify(updated));
      console.log("Saved to localStorage:", updated);
      return updated;
    });
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
}

export default App;
