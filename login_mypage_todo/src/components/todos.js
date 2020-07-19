import React from "react";
import styled from "styled-components";
const TodoItem = () => {
  return (
    <div>
      <div>할 일</div>
    </div>
  );
};

const Todos = () => {
  return (
    <TodoSection>
      <Title>--TodoList--</Title>
      <Contents>
        <TodoForm>
          <input />
          <button type="submit">등록</button>
        </TodoForm>
        <TodoContainer>
          <TodoItem />
        </TodoContainer>
      </Contents>
    </TodoSection>
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

const Contents = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default Todos;
