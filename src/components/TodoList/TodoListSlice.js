const initialState = [
  { id: 1, name: "Learn HTML1", completed: false, priority: "High" },
  { id: 2, name: "Learn HTML2", completed: false, priority: "Low" },
  { id: 3, name: "Learn HTML3", completed: false, priority: "Medium" },
  { id: 4, name: "Learn HTML4", completed: true, priority: "High" },
  { id: 5, name: "Learn HTML5", completed: false, priority: "Medium" },
];
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
