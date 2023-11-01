import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer"; // 1. 导入 assignmentsReducer


const store = configureStore({
  reducer: {
    modulesReducer,
    assignments: assignmentsReducer
  }
});


export default store;