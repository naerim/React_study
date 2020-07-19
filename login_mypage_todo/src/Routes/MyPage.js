import React from "react";
import styled from "styled-components";
import Category from "./category";

const MyPage = () => {
  return (
    <div>
      <Category />
      <MyPageSection>
        <Content>myPage</Content>
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
