import React from "react";
import styled from "styled-components";
import Category from "../Components/category";
import { changeInput, insert, toggle, remove } from "../Modules/todos";
import { useSelector } from "react-redux";
import useActions from "../Lib/useActions";

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
    onChangeInput("");
  };

  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <Category />
      <TodoSection>
        <Title>--TodoList--</Title>
        <TodoForm onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </TodoForm>
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

const TodoForm = styled.form`
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
