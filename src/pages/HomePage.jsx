import React, { useState } from "react";
import styled, { css } from "styled-components";
import Clock from "../components/Clock/Clock";
import TodoList from "../components/TotoList/TodoList";
import { TodoProvider } from "../context/TodoContext";

const StyledHomePage = styled.div`
  padding: 20px;
  padding-top: 40px;
  width: 100%;
  min-width: 300px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;

  background: rgb(255, 126, 83);
  background: linear-gradient(
    175deg,
    rgba(255, 126, 83, 1) 0%,
    rgba(255, 87, 71, 1) 35%,
    rgba(241, 64, 73, 1) 100%
  );
  ${(props) =>
    props.bg === "REST" &&
    css`
      background: rgb(101, 64, 246);
      background: linear-gradient(
        180deg,
        rgba(101, 64, 246, 1) 0%,
        rgba(70, 176, 255, 1) 65%,
        rgba(94, 254, 255, 1) 100%
      );
    `}
`;

const HomePage = (props) => {
  const [timerSession, setTimerSession] = useState("REST");

  return (
    <>
      <StyledHomePage bg={timerSession}>
        <Clock />
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </StyledHomePage>
    </>
  );
};

export default HomePage;
