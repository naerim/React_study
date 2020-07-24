import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../Modules/user";

const Login = () => {
  const { id } = useSelector((user) => ({
    id: user.id,
  }));

  const dispatch = useDispatch();
  const onLoggedIn = useCallback((id) => dispatch(isLoggedIn(id)), [dispatch]);

  // const changeLogIn = () => {
  //   setTimeout(() => {
  //       onLoggedIn(id);
  //   }, 1000);
  // };

  const onChange = (e) => onLoggedIn(e.target.value);

  return (
    <LoginTemplate>
      <LoginTitle>Login</LoginTitle>
      <form>
        <InputDiv>
          <Input
            value={id}
            placeholder="아이디를 입력하세요"
            onChange={onChange}
          />
        </InputDiv>
        <InputDiv>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </InputDiv>
      </form>

      <ButtonDiv>
        <Link to="/">
          <Button>확인</Button>
        </Link>
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
    background: #f7bd00;
  }
  &:disabled {
    background: gray;
  }
`;

export default Login;
