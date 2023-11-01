import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsThreeDots, BsPlus, BsTrash } from 'react-icons/bs';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer"; // 修改为您的真实路径
import "./Assignments.css";

function Assignments() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();

  const assignments = useSelector((state) => state.assignments.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const handleDeleteClick = (assignmentId) => {
    setSelectedAssignment(assignmentId);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    dispatch(deleteAssignment(selectedAssignment));
    setSelectedAssignment(null);
    setShowDialog(false);
  };

  return (
    <div className="assignment-container">
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
          <button className="btn-assignment" onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/New`)}>
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
          <div key={assignment._id} className="assignment-list-item">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              {assignment.title}
            </Link>
            <button className="btn-delete" onClick={() => handleDeleteClick(assignment._id)}>
              <BsTrash />
            </button>
          </div>
        ))}
      </div>

      {showDialog && (
        <div className="delete-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={() => setShowDialog(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Assignments;
