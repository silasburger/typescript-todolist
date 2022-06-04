import TodoItem from './TodoItem';

type Props = {
  todoItems: ITodo[];
  updateTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
};

const Todos = ({ todoItems, updateTodo, removeTodo }: Props) => {
  return (
    <div>
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default Todos;
