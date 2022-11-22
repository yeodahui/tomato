import React from "react";
import styled from "styled-components";
import { useTodoState } from "../../context/TodoContext";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const StyledTodoContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
`;

const TodoList = (props) => {
  const todos = useTodoState();

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
