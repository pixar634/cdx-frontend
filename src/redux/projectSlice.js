import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.items = action.payload.projects;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
