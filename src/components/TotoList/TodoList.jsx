import React, { useState } from "react";
import styled from "styled-components";
import {
  useTodoDispatch,
  useTodoNextId,
  useTodoState,
} from "../../context/TodoContext";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const StyledTodoContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const TodoList = (props) => {
  const todos = useTodoState();

  //   const handleTodoSubmit = (e) => {
  //     if (e.key === "Enter") {
  //       const value = e.target.value;
  //       if (value) {
  //         const newTodos = [...todos];
  //         newTodos.push(value);
  //         setTodos(newTodos);
  //         e.target.value = "";
  //       }
  //     }
  //     return;
  //   };

  return (
    <StyledTodoContainer>
      <TodoInput />
      <ul>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              id={todo.id}
              text={todo.text}
              done={todo.done}
              key={todo.id}
            />
          ))}
      </ul>
    </StyledTodoContainer>
  );
};

export default TodoList;
