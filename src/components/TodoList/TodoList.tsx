import { ITodo } from "../../types/todo";

interface IProps {
  todos: ITodo[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.body}>{todo.body}</li>
      ))}
    </ul>
  );
};

export default TodoList;
