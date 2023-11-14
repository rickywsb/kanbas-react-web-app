import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,

} from "./modulesReducer";
import * as client from "./clients.js";
import "./ModuleList.css";


function ModuleList() {


  
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




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
              onClick={handleUpdateModule}>
              Update
            </button>
            <button className="add-module-btn"
              onClick={handleAddModule}>
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
                  onClick={() => handleDeleteModule(module._id)}>
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