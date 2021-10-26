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
    completed: {1: 3, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 10, 3: 10,4: 10},
  },
  2: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 10, 3: 10,4: 10},
  },
  3: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 10, 3: 10,4: 10},
  },
  4: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 10, 3: 10,4: 10},
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
