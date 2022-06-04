import React, { FormEvent, useState } from 'react';
let uuid = 1;

type TodoFormProps = {
  handleAddTodo: (todo: ITodo)=>void,
  clearMarked: ()=>void
}

const TodoForm = ({handleAddTodo, clearMarked}: TodoFormProps) => {

  const [textValue, setTextValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let newTodo = { id: uuid++, text: textValue, completed: false };
    handleAddTodo(newTodo)
    setTextValue('');
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={clearMarked}>
        Clear marked
      </button>
    </form>
  );
};

export default TodoForm;
