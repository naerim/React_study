import React from "react";
import { useSelector } from "react-redux";
import useActions from "../lib/useActions";
import { changeInput, insert, remove, toggle } from "../module/todos";
import {
  changeInputWeek,
  insertWeek,
  removeWeek,
  toggleWeek,
} from "../module/todosWeek";

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

const Todos = (props) => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const { inputWeek, todosWeek } = useSelector(({ todosWeek }) => ({
    inputWeek: todosWeek.inputWeek,
    todosWeek: todosWeek.todosWeek,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  const [
    onChangeInputWeek,
    onInsertWeek,
    onToggleWeek,
    onRemoveWeek,
  ] = useActions([changeInputWeek, insertWeek, toggleWeek, removeWeek], []);

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(""); // 등록 후 인풋 포기화
  };

  const onChange = (e) => onChangeInput(e.target.value);

  const onSubmitWeek = (e) => {
    e.preventDefault();
    onInsertWeek(inputWeek);
    onChangeInputWeek(""); // 등록 후 인풋 포기화
  };

  const onChangeWeek = (e) => onChangeInputWeek(e.target.value);

  return (
    <div>
      {props.name === "week" ? (
        <form onSubmit={onSubmitWeek}>
          <input value={inputWeek} onChange={onChangeWeek} />
          <button type="submit">등록</button>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
      )}
      {props.name === "week" ? (
        <div>
          {todosWeek.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={onToggleWeek}
              onRemove={onRemoveWeek}
              onChangeInput={onChangeInputWeek}
              onInsert={onInsertWeek}
            />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Todos;
