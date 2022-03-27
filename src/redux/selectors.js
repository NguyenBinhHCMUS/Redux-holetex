export const todoListSelector = (state) => {
  const todosRemining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });

  return todosRemining;
};
export const searchTextSelector = (state) => state.filters.search;
