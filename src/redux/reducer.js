const initialState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },

  todoList: [
    { id: 1, name: "Learn HTML1", completed: false, priority: "High" },
    { id: 2, name: "Learn HTML2", completed: false, priority: "Low" },
    { id: 3, name: "Learn HTML3", completed: false, priority: "Medium" },
    { id: 4, name: "Learn HTML4", completed: false, priority: "High" },
    { id: 5, name: "Learn HTML5", completed: false, priority: "Medium" },
  ],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    default:
      return state;
  }
};

export default rootReducer;
