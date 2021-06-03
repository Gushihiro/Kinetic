import React from 'react';
import "./style.scss"
import { Link } from "react-router-dom";

export default function OldGoalsBtn() {
  return (
    <div className="text-center completed-goals">
      <Link to="/dashboard/completed-goals" className="completed-goals">
        <a href="#" class="btny btn-5">See Completed Goals</a>
      </Link>
    </div>
  )
}
