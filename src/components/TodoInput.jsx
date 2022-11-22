import React from "react";
import styled from "styled-components";
import IconPlus from "../assets/icon-plus.svg";

const StyledTodoInput = styled.div`
  margin-bottom: 20px;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease-in;
  border-radius: 30px;

  &:focus-within {
    box-shadow: 0 0 15px white;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &::before {
    content: " ";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${IconPlus});
    /* background-color: aqua; */
    background-repeat: no-repeat;
    background-position: center;
  }

  .input-todo {
    margin-top: 1px;
    background-color: transparent;
    border: 0;
    outline: none;

    &:focus {
      outline: none;
    }
  }
`;

const TodoInput = (props) => (
  <StyledTodoInput>
    <input
      className="input-todo"
      type="text"
      placeholder="할일을 입력하고, Enter키를 눌러 등록하세요."
    />
  </StyledTodoInput>
);

export default TodoInput;
