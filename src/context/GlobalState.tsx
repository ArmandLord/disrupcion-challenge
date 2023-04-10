import { createContext, useReducer, PropsWithChildren } from "react";
import { AppReducer } from "./AppReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Types";

export interface TransactionInterface {
  id: number;
  text: string;
  amount: number;
}

export interface TypeInitialState {
  transactions: TransactionInterface[];
}

// Initial State
const initialState: TypeInitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

interface TypeGlobalContext {
  transactions: TransactionInterface[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionInterface) => void;
}

// Create context
export const GlobalContext = createContext({} as TypeGlobalContext);

// Provider component
export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  }

  function addTransaction(transaction: TransactionInterface) {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
