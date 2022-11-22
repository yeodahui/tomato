import React from "react";
import styled from "styled-components";
import { useTodoState } from "../../context/TodoContext";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const StyledTodoContainer = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  max-width: 450px;

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 10px;
    text-align: center;
    font-size: 1.4rem;
    word-break: keep-all;
    color: white;

    &::before,
    &::after {
      content: " ";
      display: inline-block;
      width: 40%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.4);
    }
    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  }
`;

const TodoList = (props) => {
  const todos = useTodoState();

  return (
    <StyledTodoContainer>
      <TodoInput />
      {todos.length > 0 && <p className="divider">할 일</p>}
      <ul>
        {todos &&
          todos.map((todo) => {
            if (todo.done === false) {
              return (
                <TodoItem
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                  key={todo.id}
                />
              );
            }
          })}
      </ul>
      {todos && todos.find((todo) => todo.done === true) && (
        <p className="divider">완료됨</p>
      )}
      <ul>
        {todos &&
          todos.map((todo) => {
            if (todo.done === true) {
              return (
                <TodoItem
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                  key={todo.id}
                />
              );
            }
          })}
      </ul>
    </StyledTodoContainer>
  );
};

export default TodoList;
