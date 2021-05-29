import React from "react";

function DashboardCard(props) {
    
  return (
    <div className="card">
      <div className="content">
      <h3 className='goalheading'>{props.goal_category}</h3>
          <p className='goalInfo'>
            <strong>Type</strong>: {props.goal_name}
          </p>
          <p className='goalInfo'>
            <strong>Description</strong>: {props.goal_description}
          </p>
          <p className='goalInfo'>
            <strong>Start</strong>: {props.goal_start}
          </p>
      </div>
      <div className='contentRight'>
              <p className='endDate'> <strong>Frequency</strong>: {props.goal_frequency}</p>
              <p className='endDate'><strong>End date:</strong> {props.goal_finish}</p>
              </div>
      <span onClick={() => props.removeGoal(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default DashboardCard;
