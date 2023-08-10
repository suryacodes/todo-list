import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({});

export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (task) => {
    const updatedTodoList = [...todoList, task];
    setTodoList(updatedTodoList);
    return updatedTodoList;
  };

  const onDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((e) => e.id !== id);
    setTodoList(updatedTodoList);
    return updatedTodoList;
  };

  const onUpdateTodo = (task) => {
    const updatedTodoList = todoList.map((e) => (e.id === task.id ? task : e));
    setTodoList(updatedTodoList);
    return updatedTodoList;
  };

  const getTodo = (id) => {
    return todoList.find((e) => e.id === id);
  };

  const getTodoId = () => {
    return todoList.length + 1;
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        onDeleteTodo,
        onUpdateTodo,
        todoList,
        getTodo,
        getTodoId
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
