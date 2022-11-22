import React from "react";
import styled from "styled-components";
import TodoList from "../components/TotoList/TodoList";
import { TodoProvider } from "../context/TodoContext";

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background: rgb(255, 126, 83);
  background: linear-gradient(
    175deg,
    rgba(255, 126, 83, 1) 0%,
    rgba(255, 87, 71, 1) 35%,
    rgba(241, 64, 73, 1) 100%
  );
`;

const HomePage = (props) => (
  <>
    <StyledHomePage>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </StyledHomePage>
  </>
);

export default HomePage;
