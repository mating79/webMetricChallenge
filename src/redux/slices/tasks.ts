import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../sliceTypes/tasks.type";

const initialState: initialStateType = {
  list: [
    {
      id: 1,
      title: "Test this application",
      description: "Hope to enjoy it ;)",
      completed: false,
    },
  ],
  searchValue: "",
  filterValue: 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const newTask = {
        id: uuidv4(),
        ...payload,
      };
      state.list = [...state.list, newTask];
    },

    completeTask: (state, { payload }) => {
      state.list = state.list.map((task) => {
        if (task.id === payload.id)
          return {
            ...task,
            completed: !task.completed,
          };
        else return task;
      });
    },

    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },

    setFilterValue: (state, { payload }) => {
      state.filterValue = payload;
    },
  },
});

export const { addTask, completeTask, setSearchValue, setFilterValue } =
  tasksSlice.actions;

export default tasksSlice.reducer;
