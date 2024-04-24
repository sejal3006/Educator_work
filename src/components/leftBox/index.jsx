import React from 'react';
import EmployeeItem from '../employeeItem';
import './style.css'

const LeftBox = ({ employees, onAdd }) => {
  // console.log("Employees:", employees);
  return (
    <div className='leftbox'>

      <h2>Employees</h2>
      {employees.map(employee => (
        <EmployeeItem key={employee.id} employee={employee} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default LeftBox;