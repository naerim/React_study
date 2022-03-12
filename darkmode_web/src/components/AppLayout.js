import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import { FlexContainer } from "../style/styles";
import ThemeToggle from "../theme/ThemeToggle";
import Header from "./Header";
import Toggle from "./Toggle";

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <WrapContainer>
      <Header />
      <Toggle
        left="🌝"
        right="🌚"
        leftBgColor="var(--first)"
        rightBgColor="var(--purple)"
      />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </ThemeToggle>

      <FlexContainer>{children}</FlexContainer>
    </WrapContainer>
  );
};

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;

const ComponentWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

export default AppLayout;
