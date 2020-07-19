import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginTemplate>
      <LoginTitle>Login</LoginTitle>
      <InputDiv>
        <Input placeholder="아이디를 입력하세요" />
      </InputDiv>
      <InputDiv>
        <Input type="password" placeholder="비밀번호를 입력하세요" />
      </InputDiv>
      <ButtonDiv>
        <Button>확인</Button>
      </ButtonDiv>
    </LoginTemplate>
  );
};

const LoginTemplate = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 4rem;
  overflow: hidden;
`;

const LoginTitle = styled.div`
  margin-top: 10%;
  margin-bottom: 7%;
  color: #f7a400;
  font-weight: bold;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  margin: 3%;
`;
const Input = styled.input`
  display: block;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

const Button = styled.button`
  background: #f7a400;
  color: white;
  border: none;
  font-size: 1rem;
  width: 200px;
  height: 30px;
  &:hover {
    background: #F7BD00;
    
  }
  &:disabled {
    background: gray;
  }
`;

export default Login;
