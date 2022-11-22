import React, { useState } from "react";
import styled from "styled-components";
import Clock from "../components/Clock/Clock";
import TodoList from "../components/TotoList/TodoList";
import { TodoProvider } from "../context/TodoContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const StyledHomePage = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  .wrapper {
    padding: 20px;
    padding-top: 40px;
    width: 100%;
    max-width: 880px;
    min-width: 300px;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  /* background: rgb(255, 126, 83);
  background: linear-gradient(
    175deg,
    rgba(255, 126, 83, 1) 0%,
    rgba(255, 87, 71, 1) 35%,
    rgba(241, 64, 73, 1) 100%
  ); */
  background: rgb(101, 64, 246);
  background: linear-gradient(
    180deg,
    rgba(101, 64, 246, 1) 0%,
    rgba(70, 176, 255, 1) 65%,
    rgba(94, 254, 255, 1) 100%
  );

  .button-float {
    padding: 15px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(101, 64, 246, 0.4);
    color: white;
    font-size: 2rem;
    background-color: rgb(101, 64, 246);
    transition: all 0.3s;

    &:hover {
      background-color: rgb(81, 47, 214);
      transform: scale(1.1);
    }
  }
`;

const HomePage = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handle = useFullScreenHandle();

  const handleFullScreen = (e) => {
    if (isFullScreen) {
      handle.exit();
      setIsFullScreen(false);
    } else {
      handle.enter();
      setIsFullScreen(true);
    }
  };

  return (
    <FullScreen className="full-screen" handle={handle}>
      <StyledHomePage>
        <div className="wrapper">
          <Clock />
          <TodoProvider>
            <TodoList />
          </TodoProvider>

          <aside className="button-float" onClick={handleFullScreen}>
            {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
          </aside>
        </div>
      </StyledHomePage>
    </FullScreen>
  );
};

export default HomePage;
