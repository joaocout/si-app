import React, { useReducer, createContext } from "react";

// acoes do redux aqui
const reducer = (prevState, action) => {
  switch (action.type) {
    case "addCompleted":
      return (() => {
        const newState = prevState;

        // verificando se o campo do curso já existe no estado
        if (!newState[action.course]) {
          newState[action.course] = { completed: {}, total: {} };
        }
        // verificando se já existe uma entrada em lições completadas, para o número buscado
        if (newState[action.course].completed[action.lesson]) {
          // verificando se nao é maior que o maximo
          if(newState[action.course].completed[action.lesson] < newState[action.course].total[action.lesson])
            newState[action.course].completed[action.lesson] += 1;
        } else {
          newState[action.course].completed[action.lesson] = 1;
        }
        return newState;
      })();
    default:
      return prevState;
  }
};

// formato do estado inicial
const initialState = {
  1: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 3, 3: 3,4: 2},
  },
  2: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 3, 3: 3,4: 3},
  },
  3: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 3, 3: 3,4: 3},
  },
  4: {
    completed: {1: 0, 2: 0, 3: 0, 4: 0},
    total: {1: 3, 2: 3, 3: 3,4: 3},
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
