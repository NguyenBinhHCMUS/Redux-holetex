import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn HTML1", completed: false, priority: "High" },
    { id: 2, name: "Learn HTML2", completed: false, priority: "Low" },
    { id: 3, name: "Learn HTML3", completed: false, priority: "Medium" },
    { id: 4, name: "Learn HTML4", completed: true, priority: "High" },
    { id: 5, name: "Learn HTML5", completed: false, priority: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      action.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

export default todoListSlice;
