import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledClock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid white;
  color: white;

  .date {
    margin-top: 10px;
    font-size: 2.2rem;
    color: #ffffffaa;
  }
  .time {
    margin-top: 20px;
    width: 230px;
    font-size: 6rem;
  }
`;

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const Timer = (props) => {
  let now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay();
  const [hour, setHour] = useState(padNumber(now.getMinutes(), 2));
  const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
  const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      now = new Date();

      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
      setSec(padNumber(now.getSeconds(), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <StyledClock>
      <p className="time">
        {hour}:{min}:{sec}
      </p>
      <p className="date">
        {year}년 {month}월 {day}일
      </p>
    </StyledClock>
  );
};

export default Timer;
