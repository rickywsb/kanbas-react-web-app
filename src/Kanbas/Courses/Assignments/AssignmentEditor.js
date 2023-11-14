import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAssignmentById, createAssignment, updateAssignment } from "./client.js";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();

  const [assignmentData, setAssignmentData] = useState({
    title: "",
    course: courseId
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      if (assignmentId && assignmentId !== "New") {
        try {
          const assignment = await getAssignmentById(assignmentId);
          if (assignment) {
            setAssignmentData(assignment);
          }
        } catch (error) {
          console.error("Error fetching assignment:", error);
        }
      }
    };
    fetchAssignment();
  }, [assignmentId]);

  const handleSave = async () => {
    try {
      if (assignmentId && assignmentId !== "New") {
        await updateAssignment(courseId, assignmentData);
      } else {
        await createAssignment(courseId, assignmentData);
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
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
      {/* 其他输入字段和按钮 */}
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
