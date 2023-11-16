import axios from "axios";

const BASE_URL = "https://kanbas-node-server-app-sibo.onrender.com/api";

export const getAssignments = async (courseId) => {
    const response = await axios.get(`https://kanbas-node-server-app-sibo.onrender.com/api/courses/${courseId}/assignments`);
    return response.data;
  };

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(`${BASE_URL}/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`https://kanbas-node-server-app-sibo.onrender.com/api/assignments/${assignmentId}`);
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
  