import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./Dashboard.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        
        <h2>Published Courses ({courses.length})</h2>
        
        <h5>Course</h5>
        <input value={course.name} className="form-control"
               onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
               onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
  
        <button className="add-button" onClick={addNewCourse}>Add</button>
        <button className="update-button" onClick={updateCourse}>Update</button>
  
        <div className="list-group">
          {courses.map((courseItem) => (
            <div className="course-item" key={courseItem._id}>
              <Link 
                to={`/Kanbas/Courses/${courseItem._id}`}
                className="list-group-item"
              >
                {courseItem.name}
              </Link>
              <button
                className="edit-button"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(courseItem);
                }}>
                Edit
              </button>
              <button
              className="delete-button"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(courseItem._id);
              }}>
              Delete
            </button>

            </div>
          ))}
        </div>
      </div>
    );
}

export default Dashboard;
