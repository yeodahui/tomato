import React, { useState } from "react";
import styled from "styled-components";
import IconPlus from "../../assets/icon-plus.svg";
import { useTodoDispatch, useTodoNextId } from "../../context/TodoContext";

const StyledTodoForm = styled.form`
  margin-bottom: 20px;
  padding: 12px 10px;
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
    width: 20px;
    height: 20px;
    margin: 2px 5px;
    background-image: url(${IconPlus});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .input-todo {
    margin: 1px 5px 0;
    flex: 1;
    background-color: transparent;
    border: 0;
    outline: none;
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
  }
`;

const TodoInput = (props) => {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    nextId.current += 1;
    setValue("");
  };

  return (
    <StyledTodoForm onSubmit={onSubmit}>
      <input
        className="input-todo"
        type="text"
        tabIndex="-1"
        autoFocus
        onChange={onChange}
        value={value}
        placeholder="할일을 입력하고, Enter키를 눌러 등록하세요."
      />
    </StyledTodoForm>
  );
};

export default React.memo(TodoInput);
