import React from "react";
import { BsThreeDots, BsPlus } from 'react-icons/bs';
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./Assignments.css";
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    
    <div className="assignment-container">
      {/* Top Section */}
      <div className="assignment-top-section">
        <input 
          type="text" 
          placeholder="Search for Assignment" 
          className="assignment-search"
        />
        <div className="assignment-action-buttons">
          <button className="btn-group-btn">
            <BsPlus />
            Group
          </button>
          <button className="btn-assignment">
            <BsPlus />
            Assignment
          </button>
          <button className="btn-three-dots">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;