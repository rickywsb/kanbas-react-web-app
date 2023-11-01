import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import "./ModuleList.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="module-list-container">
      <ul className="list-group">
        <li className="list-group-item input-section">
          <div className="module-inputs">
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
          <div className="module-buttons">
            <button className="update-module-btn"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            <button className="add-module-btn"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
          </div>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item course-section">
              <div className="course-info">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </div>
              <div className="module-buttons">
                <button className="delete-module-btn"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button className="edit-module-btn"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;