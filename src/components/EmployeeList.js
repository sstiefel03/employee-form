function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div className="employee-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.jobTitle}</td>
              <td>{emp.department}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
