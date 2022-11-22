import React, { createContext, useReducer, useContext } from "react";

const SessionStateContext = createContext(null);
const SessionDispatchContext = createContext(null);

function SessionReducer(state, action) {
  switch (action.type) {
    case "WORK":
      return state;
    case "REST":
      return state;
    case "LONGREST":
      return state;
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
