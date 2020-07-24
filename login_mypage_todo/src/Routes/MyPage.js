import React from "react";
import styled from "styled-components";
import Category from "../Components/category";
import { useSelector } from "react-redux";

const MyPage = () => {
  // store 안의 state 값을 props로 연결
  const { id } = useSelector((state) => ({
    id: state.user.id,
  }));

  return (
    <div>
      <Category />
      <MyPageSection>
        <Content>{id} 님 환영합니다.</Content>
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
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyPage;
