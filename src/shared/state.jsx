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
<<<<<<< HEAD
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
=======
    completed: {},
    total: {},
>>>>>>> ac304854e9cdda7b66d700afa331ad1d379e413b
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
