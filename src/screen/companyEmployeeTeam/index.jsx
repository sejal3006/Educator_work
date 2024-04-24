import React, { useState } from 'react';
import LeftBox from '../../components/leftBox';
import RightBox from '../../components/rightBox';
import  EmployeesData  from './Data.js';
import './style.css'

const CompanyEmployeeTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [allEmployees, setAllEmployees] = useState([...EmployeesData]);

  const handleAdd = employee => {
    const updatedTeam = [...teamMembers, employee];
    const updatedEmployees = allEmployees.filter(emp => emp.id !== employee.id);
    setTeamMembers(updatedTeam);
    setAllEmployees(updatedEmployees);
  };

  const handleRemove = member => {
    const updatedTeam = teamMembers.filter(m => m.id !== member.id);
    const updatedEmployees = [...allEmployees, member];
    setTeamMembers(updatedTeam);
    setAllEmployees(updatedEmployees);
  };

  const calculateAverageAge = () => {
    const totalAge = teamMembers.reduce((acc, member) => acc + member.age, 0);
    return totalAge / teamMembers.length || 0;
  };

  const handleSort = () => {
    const sortedTeam = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeam);
  };

  return (
    <div style={{ display: 'flex' }}>
      <LeftBox employees={allEmployees} onAdd={handleAdd} className='leftbox'/>
      <RightBox
        teamMembers={teamMembers}
        onRemove={handleRemove}
        averageAge={calculateAverageAge()}
        onSort={handleSort}
      />
    </div>
  );
};

export default CompanyEmployeeTeam;