import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";

const Main = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";

  return (
    <AppLayout>
      <h2>
        Welcome to {""}
        Darkmode!
        <br />
        <ColoredText>Current mode is {CurrentMode}</ColoredText>
      </h2>
      <a
        href="https://github.com/gparkkii"
        target="_blank"
        rel="noreferrer noopener"
      >
        All rights reserved by Ji Yeon Park
      </a>
    </AppLayout>
  );
};

const ColoredText = styled.span`
  color: #e6b74a;
`;

export default Main;
