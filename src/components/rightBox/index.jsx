import React from 'react';
import TeamMemberItem from '../teamMemberItem';
import './style.css'

const RightBox = ({ teamMembers, onRemove, averageAge, onSort }) => {
  return (
    <>
      <div className='rightbox'>
        <h2>Team</h2>
        <button id='rightboxbtn' className='teammember-btn' onClick={onSort}>Sort by Age</button>
        <div>
          {teamMembers.map(member => (
            <TeamMemberItem key={member.id} member={member} onRemove={onRemove} />
          ))}
        </div>
        <div className='rightbox-average'>
          <h3>Average Age </h3>
          <h3>{averageAge}</h3>
        </div>
      </div>
    </>
  );
};

export default RightBox;