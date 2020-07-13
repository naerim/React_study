import React from "react";
import styled from "styled-components";
import Todos from "./component/Todos";

const App = () => {
  return (
    <TodoTemplate>
      <Title>TODO LIST</Title>
      <Content>
        <TodoContainer>
          <Name>This Week</Name>
          <Todos week />
        </TodoContainer>
        <TodoContainer>
          <Name>This Month</Name>
          <Todos />
        </TodoContainer>
      </Content>
    </TodoTemplate>
  );
};

const TodoTemplate = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
`;

const Title = styled.div`
  background: seagreen;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
`;

const Name = styled.div`
  height: 2rem;
  color: white;
  background: olivedrab;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default App;
