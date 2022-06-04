import * as React from 'react';
import { useState } from 'react';
import Todos from './Todos';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (todo: ITodo): void => {
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const updateTodo = (uTodo: ITodo) => {
    const updatedTodos = [...todos];
    const idx = updatedTodos.findIndex((t) => t.id === uTodo.id);
    updatedTodos[idx] = uTodo;
    setTodos(updatedTodos);
  };

  const clearMarked = () => {
    const updatedTodos = todos.filter((t) => !t.completed);
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm handleAddTodo={handleAddTodo} clearMarked={clearMarked} />
      <Todos
        removeTodo={removeTodo}
        todoItems={todos}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;
