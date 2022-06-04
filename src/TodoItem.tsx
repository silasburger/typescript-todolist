type TodoItemProps = {
  todo: ITodo;
  updateTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
};

const TodoItem = ({
  todo: { text, completed, id },
  updateTodo,
  removeTodo
}: TodoItemProps) => {

  const renderText = () => (completed ? <s>{text}</s> : <span>{text}</span>);

  const toggleTodo = () => {
    updateTodo({ text, completed: !completed, id });
  };

  const handleRemove = () => removeTodo(id);

  return (
    <div>
      <button onClick={handleRemove}>X</button>{' '}
      {renderText()}{' '}
      <input
        type="checkbox"
        name="todo"
        checked={completed}
        onChange={toggleTodo}
      />
    </div>
  );
};

export default TodoItem;
