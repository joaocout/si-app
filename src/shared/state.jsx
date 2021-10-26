import React, { useReducer, createContext } from "react";

// acoes do redux aqui
const reducer = (state, action) => {
  switch (action.type) {
    case "addCompleted":
      return { ...state, completedExercises: state.completedExercises + 1 };
    default:
      return state;
  }
};

// formato do estado inicial
const initialState = {
  1: {
    completed: [],
    total: [],
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext(initialState);

export default Store;
