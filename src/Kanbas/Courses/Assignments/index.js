import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsThreeDots, BsPlus, BsTrash } from 'react-icons/bs';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchAssignments, deleteAssignmentAsync } from "./assignmentsReducer";
import { getAssignments, deleteAssignment } from './client.js';

import "./Assignments.css";

function Assignments() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching assignments for course:", courseId);
    dispatch(fetchAssignments(courseId)); // Dispatch the thunk with the course ID
  }, [courseId, dispatch]);
  

  const assignments = useSelector((state) => state.assignments.assignments);
  console.log("Assignments in Redux state:", assignments);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  console.log("Filtered assignments for course:", courseAssignments);

  const handleDeleteClick = (assignmentId) => {
    setSelectedAssignment(assignmentId);
    setShowDialog(true);
  };
  

  const confirmDelete = async () => {
    try {
      dispatch(deleteAssignmentAsync(selectedAssignment));
    } catch (error) {
      console.error("Failed to delete assignment:", error);
      // Handle error (e.g., show error message)
    }
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
