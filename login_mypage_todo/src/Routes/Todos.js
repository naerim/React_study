import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Category from "../Components/category";
import { changeInput, insert, toggle, remove } from "../Modules/todos";
import { useDispatch, useSelector } from "react-redux";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <TodoItemDiv>
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
    </TodoItemDiv>
  );
};

const Todos = () => {
  const [todoInput, setTodoInput] = useState("");
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));

  const dispatch = useDispatch();

  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: "todos/INSERT", todo: todoInput });
    onInsert(todoInput);
    setTodoInput("");
  };

  const onChange = (e) => setTodoInput(e.target.value);

  return (
    <div>
      <Category />
      <TodoSection>
        <Title>--TodoList--</Title>
        <TodoDiv>
          <input value={todoInput} onChange={onChange} />
          <button type="button " onClick={onSubmit}>
            등록
          </button>
        </TodoDiv>

        <TodoContainer>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </TodoContainer>
      </TodoSection>
    </div>
  );
};

const TodoSection = styled.section`
  margin-left: 25%;
  margin-right: 25%;
  overflow: hidden;
`;

const Title = styled.div`
  margin-top: 5%;
  margin-bottom: 7%;
  color: #f7a400;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const TodoItemDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
`;

export default Todos;
