import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as assignmentService from './client'; // Import your client service

// Async thunk for fetching assignments
export const fetchAssignments = createAsyncThunk(
    'assignments/fetchAssignments',
    async (courseId) => { // Accept courseId as a parameter
      const response = await assignmentService.getAssignments(courseId); // Use courseId in the API call
      return response;
    }
  );

// Async thunk for deleting an assignment
export const deleteAssignmentAsync = createAsyncThunk(
  'assignments/deleteAssignment',
  async (assignmentId) => {
    await assignmentService.deleteAssignment(assignmentId);
    return assignmentId;
  }
);

// Define your initial state
const initialState = {
    assignments: []
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
          addAssignment: (state, action) => {
            state.assignments = [
              { ...action.payload, _id: new Date().getTime().toString() },
              ...state.assignments,
            ];
          },
          deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
              (assignment) => assignment._id !== action.payload
            );
          },
          updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
              if (assignment._id === action.payload._id) {
                return action.payload;
              } else {
                return assignment;
              }
            });
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAssignments.fulfilled, (state, action) => {
            state.assignments = action.payload;
          })
          .addCase(deleteAssignmentAsync.fulfilled, (state, action) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
          });
          
    }
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
