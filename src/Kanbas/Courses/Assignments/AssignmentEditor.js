import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importing useDispatch
import { updateAssignment, addAssignment } from "./assignmentsReducer"; // Import actions
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  const [assignmentData, setAssignmentData] = useState({
    title: "",
    description: "",
    dueDate: new Date(),
    availableFromDate: new Date(),
    availableUntilDate: new Date(),
    points: 100,
    course: courseId
  });

  useEffect(() => {
    if (assignmentId && assignmentId !== "New") {
      const assignment = db.assignments.find(a => a._id === assignmentId);
      if (assignment) {
        setAssignmentData(assignment);
      }
    }
  }, [assignmentId]);

  const handleSave = () => {
    if (assignmentId && assignmentId !== "New") {
      dispatch(updateAssignment(assignmentData)); // Use the updateAssignment action
    } else {
      dispatch(addAssignment(assignmentData)); // Use the addAssignment action
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleInputChange = (field) => (e) => {
    setAssignmentData({
      ...assignmentData,
      [field]: e.target.value
    });
  };

  return (
    <div>
      <h2>Assignment Name</h2>
      <input 
        value={assignmentData.title}
        onChange={handleInputChange("title")}
        className="form-control mb-2" 
      />
      <textarea
        value={assignmentData.description}
        onChange={handleInputChange("description")}
        className="form-control mb-2"
        placeholder="Assignment Description"
      ></textarea>
      <label>Points</label>
      <input 
        type="number" 
        value={assignmentData.points}
        onChange={handleInputChange("points")}
        className="form-control mb-2" 
      />
      <label>Due Date</label>
      <input 
        type="date" 
        value={assignmentData.dueDate}
        onChange={handleInputChange("dueDate")}
        className="form-control mb-2" 
      />
      <label>Available From</label>
      <input 
        type="date" 
        value={assignmentData.availableFromDate}
        onChange={handleInputChange("availableFromDate")}
        className="form-control mb-2" 
      />
      <label>Available Until</label>
      <input 
        type="date" 
        value={assignmentData.availableUntilDate}
        onChange={handleInputChange("availableUntilDate")}
        className="form-control mb-2" 
      />
      <button onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments`)} className="btn btn-danger">
        Cancel
      </button>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
