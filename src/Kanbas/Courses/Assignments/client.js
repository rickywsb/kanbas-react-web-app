import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const getAssignments = async (courseId) => {
    const response = await axios.get(`http://localhost:8000/api/courses/${courseId}/assignments`);
    return response.data;
  };

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(`${BASE_URL}/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`http://localhost:8000/api/assignments/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (courseId, assignment) => {
    const response = await axios.put(`${BASE_URL}/assignments/${assignment._id}`, assignment);
    return response.data;
  };
  
export const getAssignmentById = async (assignmentId) => {
    const response = await axios.get(`${BASE_URL}/assignments/${assignmentId}`);
    return response.data;
  };
  