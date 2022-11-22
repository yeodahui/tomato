import React, { createContext, useReducer, useContext } from "react";

const SessionStateContext = createContext(null);
const SessionDispatchContext = createContext(null);

function SessionReducer(state, action) {
  switch (action.type) {
    case "WORK":
      return state.concat(action.todo);
    case "REST":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "RONGREST":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const initialSession = {
  session: "WORK",
  onChangeBg: () => {},
};

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(SessionReducer, initialSession);

  return (
    <SessionStateContext.Provider value={state}>
      <SessionReducer.Provider value={dispatch}>
        {children}
      </SessionReducer.Provider>
    </SessionStateContext.Provider>
  );
}

export function useSessionState() {
  return useContext(SessionStateContext);
}

export function useSessionDispatch() {
  return useContext(SessionDispatchContext);
}
