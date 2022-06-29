import todo from "../../store/todo";
import { observer } from "mobx-react-lite";

const Todo = observer(() => {
    console.log("render");
  return (
    <div>
      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completeTodo(t.id)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
