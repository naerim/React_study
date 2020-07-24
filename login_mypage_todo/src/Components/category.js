import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedOut } from "../Modules/user";

const Category = () => {
  const { isLogged } = useSelector((state) => ({
    isLogged: state.user.isLogged,
  }));

  const dispatch = useDispatch();
  const onLoggedOut = useCallback(() => dispatch(isLoggedOut()), [dispatch]);

  // 로그인 상태인지 확인
  const checkIsLogged = (url) => {
    return isLogged ? `/${url}` : "/";
  };

  // 경고창
  const showAlert = () => {
    return !isLogged && alert("회원만 가능합니다.");
  };

  // 1초 후 로그아웃 상태로 변경
  const changeLogout = () => {
    setTimeout(() => {
      onLoggedOut();
    }, 1000);
  };

  return (
    <CategorySection>
      {console.log(useSelector((state) => state))}
      {isLogged ? (
        <Link to="/">
          <MenuButton onClick={changeLogout}>Logout</MenuButton>
        </Link>
      ) : (
        <Link to="/login">
          <MenuButton>Login</MenuButton>
        </Link>
      )}
      <Link to={checkIsLogged("myPage")}>
        <MenuButton onClick={showAlert}>MyPage</MenuButton>
      </Link>
      <Link to={checkIsLogged("todos")}>
        <MenuButton onClick={showAlert}>Todo </MenuButton>
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
