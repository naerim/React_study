import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  const [login, setLogin] = useState(false);

  const onLogin = () => {
    setLogin(!login);
  };

  return (
    <CategorySection>
      {login ? (
        <Link to="/login">
          <MenuButton onClick={onLogin}>login</MenuButton>
        </Link>
      ) : (
        <Link to="/">
          <MenuButton onClick={onLogin}>Logout</MenuButton>
        </Link>
      )}

      <Link to="myPage">
        <MenuButton>MyPage </MenuButton>
      </Link>
      <Link to="todos">
        <MenuButton>Todo </MenuButton>
      </Link>
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
  background: #f7bd00;
  color: white;
  width: 200px;
  height: 30px;
  margin-right: 30px;
  border: none;
  font-size: 1rem;

  &:hover {
    background: #f7a400;
  }
`;
export default Category;
