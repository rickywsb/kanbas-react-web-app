import axios from "axios";
import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

import { useState, useEffect } from "react";
import store from "./store/index.js";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const initialCourseState = {
    name: "",
    number: "",
    startDate: "",
    endDate: ""
  };

  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8000/api';
  const URL = `${API_BASE}/courses`;


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const addCourse = async () => {
    try {
      console.log("Sending course data:", course); // Debugging
      const response = await axios.post(URL, course, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Added Course:", response.data); // Debugging
      setCourses([response.data, ...courses]);
      setCourse(initialCourseState); // Reset the course to its initial state
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  
  
  
  const deleteCourse = async (courseId) => {
    await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    try {
        // Update the course on the server
        const response = await axios.put(`${URL}/${course._id}`, course);

        // Update the course in the local state
        setCourses(courses.map(c => c._id === course._id ? { ...c, ...course } : c));

        // Optionally, reset the course form or set it to a default state
        setCourse({
            name: "",      
            number: "",
            startDate: "2023-09-10", 
            endDate: "2023-12-15",
        });
    } catch (error) {
        console.error("Error updating course:", error);
        // Handle the error appropriately
    }
};


  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />


          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;