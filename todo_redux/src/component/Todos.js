import React from "react";
import {
  changeInputWeek,
  insertWeek,
  toggleWeek,
  removeWeek,
  changeInputMonth,
  insertMonth,
  toggleMonth,
  removeMonth,
} from "../module/todos";
import { useSelector } from "react-redux";
import useActions from "../lib/useActions";

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

const Todos = ({ week }) => {
  const { inputWeek, inputMonth, todosWeek, todosMonth } = useSelector(
    ({ todos }) => ({
      inputWeek: todos.inputWeek,
      inputMonth: todos.inputMonth,
      todosWeek: todos.todosWeek,
      todosMonth: todos.todosMonth,
    })
  );

  const [
    onChangeInputWeek,
    onInsertWeek,
    onToggleWeek,
    onRemoveWeek,
    onChangeInputMonth,
    onInsertMonth,
    onToggleMonth,
    onRemoveMonth,
  ] = useActions(
    [
      changeInputWeek,
      insertWeek,
      toggleWeek,
      removeWeek,
      changeInputMonth,
      insertMonth,
      toggleMonth,
      removeMonth,
    ],
    []
  );

  // week에 따라 구분
  const input = week ? inputWeek : inputMonth;
  const todos = week ? todosWeek : todosMonth;
  const onInsert = week ? onInsertWeek : onInsertMonth;
  const onChangeInput = week ? onChangeInputWeek : onChangeInputMonth;
  const onRemove = week ? onRemoveWeek : onRemoveMonth;
  const onToggle = week ? onToggleWeek : onToggleMonth;

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(""); // 등록 후 인풋 초기화
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
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Todos);

