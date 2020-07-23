import React from "react";
import styled from "styled-components";
import Category from "../Components/category";
import { useSelector } from "react-redux";
import useActions from "../Lib/useActions";
import { changeInput, insert, remove, toggle } from "../Modules/todos";
import { isLoggedIn } from "../Modules/login";

const MyPage = () => {
  // store 안의 state 값을 props로 연결

  const { input, isLogged } = useSelector((state) => ({
    input: state.user.input,
    isLogged: state.user.isLogged,
  }));


  return (
    <div>
      <Category />
      <MyPageSection>
        <Content>{input}님 환영합니다.</Content>
      </MyPageSection>
    </div>
  );
};

const MyPageSection = styled.section`
  margin-left: 25%;
  margin-right: 25%;
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 10%;
  margin-bottom: 7%;
  color: #f7a400;
  font-weight: bold;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyPage;
