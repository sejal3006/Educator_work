import React from 'react';
import './style.css'

const EmployeeItem = ({ employee, onAdd }) => {
  console.log(employee);
  const { first_name, age, last_name } = employee;

  const handleAdd = () => {
    onAdd(employee);
  };

  return (
    <div className='employeeitem'>
      <div className='employeeitem1'>
        <p>{`${first_name} ${last_name}`}</p>
        <p> {`${age}`}</p>
      </div>
      <button className='employeeitem-btn' onClick={handleAdd}>Add</button>
    </div>
  );
};

export default EmployeeItem;


