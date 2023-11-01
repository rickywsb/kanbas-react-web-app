import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                ...state.assignments,
                { ...action.payload, _id: new Date().getTime().toString() }
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
        }
    }
});

// Export the actions created by createSlice
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;

// Export the reducer
export default assignmentsSlice.reducer;
