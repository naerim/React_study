import React from "react";
import { useSelector } from "react-redux";
import useActions from "../lib/useActions";
import { changeInput, insert, remove, toggle } from "../module/todos";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

/*
const Todos = ({input, todos, onSubmit, onChange, onToggle, onRemove, onChangeInput, onInsert}) => {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
          />
        ))}
      </div>
    </div>
  );
};*/

const Todos = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(""); // 등록 후 인풋 포기화
  };

  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
