import React from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../../context/TodoContext";
import { MdDone, MdDelete } from "react-icons/md";

const StyledTodoItem = styled.li`
  margin-bottom: 5px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  font-size: 1.4rem;

  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.6);

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  ${(props) =>
    props.done &&
    css`
      background-color: rgba(255, 255, 255, 0.3);
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  color: #00000040;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Text = styled.p`
  padding-top: 1px;
  flex: 1;
  font-size: 1.6rem;
  color: #495057;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
    `}
`;

const CheckCircle = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;

  border-radius: 16px;
  border: 1px solid #00000040;
  color: #00000040;
  font-size: 2.2rem;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #ff6b6b;
      color: #ff6b6b;
    `}
`;

const TodoListItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();

  const onToggle = (e) => {
    dispatch({
      type: "TOGGLE",
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <StyledTodoItem>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </StyledTodoItem>
  );
};

export default React.memo(TodoListItem);