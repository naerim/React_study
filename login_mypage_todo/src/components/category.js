import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategorySection>
      <MenuButton>Login</MenuButton>
      <MenuButton>MyPage</MenuButton>
      <MenuButton>Todo</MenuButton>
    </CategorySection>
  );
};

const CategorySection = styled.section`

  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 5%;
`;

const MenuButton = styled.button`
  background: #F7BD00;
  color: white;
  width: 200px;
  height: 30px;
  margin-right: 30px;
  border: none;
  font-size: 1rem;
  
  &:hover {
    background: #F7A400;
  }
`;
export default Category;
